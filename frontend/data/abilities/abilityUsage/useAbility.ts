// ------------------- Ability usage -------------------

import { Ability, User } from "@prisma/client";
import { db as prisma } from "@/lib/db";
import { gemstonesOnLevelUp } from "@/lib/gameSetting";
import { logger } from "@/lib/logger";
import { PrismaTransaction } from "@/types/prismaTransaction";
import { healingValidator, manaValidator } from "@/data/validators/validators";
import { auth } from "@/auth";
import { getUserPassiveEffect } from "@/data/passives/getPassive";

//FIXME: implement session in all functions

/**
 * Selects and uses an ability for a user on a target user.
 *
 * @param user - The user who is using the ability.
 * @param targetUserId - The ID of the target user on whom the ability is being used.
 * @param ability - The ability being used.
 * @returns A promise that resolves to a string message indicating the result of the ability usage.
 *
 * @remarks
 * - If the user's HP is 0, they cannot use abilities and a message is returned.
 * - If the user does not have enough mana to use the ability, a message is returned.
 * - Depending on the type of ability, the appropriate function is called to handle the ability usage.
 */
export const selectAbility = async (
  user: User,
  targetUserId: string,
  ability: Ability,
) => {
  const session = await auth();

  if (session?.user?.id !== user.id) {
    return "Not authorized";
  }

  if (user.hp === 0) {
    return "You can't use abilities while dead";
  }

  if (user.mana < (ability.manaCost || 0)) {
    return "Insufficient mana";
  }

  try {
    return await prisma.$transaction(async (db) => {
      // check ability type and call the appropriate function
      switch (ability.type) {
        // heal the target
        case "Heal":
          return await useHealAbility(db, user, targetUserId, ability);
        // give mana to the target
        case "Mana":
          return await useManaAbility(db, user, targetUserId, ability);
        // transfer a resource from one player to another player
        case "Transfer":
          return await useTransferAbility(db, user, targetUserId, ability);
      }

      finalizeAbilityUsage(db, user, ability);

      logger.info(
        `User ${user.id} used ability ${ability.name} on user ${targetUserId} and gained ${ability.xpGiven} XP`,
      );
    });
  } catch (error) {
    logger.error(
      "Error using" + ability.name + " by user " + user.id + ": " + error,
    );
    return (
      "Something went wrong using " +
      ability.name +
      ". Please notify a game master of this timestamp: " +
      Date.now()
    );
  }
};

const finalizeAbilityUsage = async (
  db: PrismaTransaction,
  user: User,
  ability: Ability,
) => {
  try {
    const xpMultipler = await getUserPassiveEffect(db, user.id, "Experience");
    const newUserXp = user.xp + ability.xpGiven! * (xpMultipler + 1);
    const abilityCost = ability.manaCost ? "mana" : "hp";

    // subtract mana cost and add xp. Levels the user up if they have enough xp
    const levelDifference = Math.floor(newUserXp / 1000) + 1 - user.level;

    await db.user.update({
      where: { id: user.id },
      data: {
        [abilityCost]: {
          decrement:
            abilityCost === "mana" ? ability.manaCost : ability.healthCost,
        },
        xp: { increment: ability.xpGiven || 0 },
        ...(levelDifference > 0
          ? {
              level: { increment: levelDifference },
              gemstones: {
                increment: gemstonesOnLevelUp * levelDifference,
              },
            }
          : {}),
      },
    });
    levelDifference > 0 &&
      logger.info(
        `LEVEL UP: User ${user.id} leveled up to level ${user.level}`,
      );
  } catch (error) {
    logger.error(
      "Error finalizing ability usage by user " + user.id + ": " + error,
    );
  }
};

// ---------------------------- Helper functions for specific ability types ----------------------------

export const useHealAbility = async (
  db: PrismaTransaction,
  castingUser: User,
  targetUserId: string,
  ability: Ability,
) => {
  try {
    // validate health to heal and passives
    let valueToHeal = await healingValidator(
      db,
      targetUserId,
      ability.value ?? 0,
    );

    if (valueToHeal === 0) {
      return "Target is already at full health";
    } else if (valueToHeal === "dead") {
      return "You can't heal a dead target. The dead require a different kind of magic.";
    } else if (typeof valueToHeal === "string") {
      return valueToHeal;
    }

    await db.user.update({
      where: {
        id: targetUserId,
      },
      data: {
        hp: {
          increment: valueToHeal,
        },
      },
    });

    return "Target healed for " + valueToHeal;
  } catch (error) {
    logger.error("Error using heal ability: " + error);
    return (
      "Something went wrong. Please notify a game master of this timestamp: " +
      Date.now()
    );
  }
};

export const useManaAbility = async (
  db: PrismaTransaction,
  castingUser: User,
  targetUserId: string,
  ability: Ability,
) => {
  // validate mana value and passives
  try {
    let value = await manaValidator(db, targetUserId, ability.value!);

    // if the value is a string, it's an error message
    if (typeof value === "string") {
      return value;
    }
    await db.user.update({
      where: {
        id: targetUserId,
      },
      data: {
        mana: {
          increment: value,
        },
      },
    });

    return "Target given " + value + " mana";
  } catch (error) {
    logger.error("Error using mana ability: " + error);
    return (
      "Something went wrong. Please notify a game master of this timestamp: " +
      Date.now()
    );
  }
};

export const useTransferAbility = async (
  db: PrismaTransaction,
  castingUser: User,
  targetUserId: string,
  ability: Ability,
) => {
  try {
    // if the ability costs health, the ability trades health. Otherwise, it trades mana
    const fieldToUpdate = ability.healthCost ? "hp" : "mana";
    // validate value and passives
    let value = ability.value;
    if (fieldToUpdate === "hp") {
      let targetUser = await healingValidator(db, targetUserId, ability.value!);
      // check if user is dead and return error message
      if (typeof targetUser === "string") {
        return targetUser;
      }
      value = targetUser;
    } else {
      let targetUser = await manaValidator(db, targetUserId, ability.value!);
      // return error message if user cannot recieve mana
      if (typeof targetUser === "string") {
        return targetUser;
      }
      value = targetUser;
    }

    await db.user.update({
      where: {
        id: targetUserId,
      },
      data: {
        [fieldToUpdate]: {
          increment: value,
        },
      },
    });

    return "Target given " + value + " from your " + fieldToUpdate;
  } catch (error) {
    logger.error("Error using transfer ability " + error);
    return (
      "Something went wrong. Please notify a game master of this timestamp: " +
      Date.now()
    );
  }
};
