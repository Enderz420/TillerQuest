"use server";

import { db } from "@/lib/db";
import {
  damageValidator,
  experienceAndLevelValidator,
  healingValidator,
  manaValidator,
} from "../validators/validators";
import { logger } from "@/lib/logger";
import { User } from "@prisma/client";
import { auth } from "@/auth";
import { sendDiscordMessage } from "@/lib/discord";

export const healUsers = async (users: { id: string }[], value: number) => {
  const session = await auth();
  if (!session || session?.user.role !== "ADMIN") {
    throw new Error("Not authorized");
  }

  try {
    return await db.$transaction(async (db) => {
      const healedUsers: string[] = [];
      await Promise.all(
        users.map(async (user) => {
          const valueToHeal = await healingValidator(db, user.id, value);

          if (typeof valueToHeal === "number" && valueToHeal !== 0) {
            const targetUser = await db.user.update({
              where: {
                id: user.id,
              },
              select: {
                username: true,
              },
              data: {
                hp: { increment: valueToHeal },
              },
            });

            healedUsers.push(targetUser.username ?? "Hidden");
            logger.info(
              "A game master healed user " +
                targetUser.username +
                " for " +
                valueToHeal,
            );
          } else {
            logger.info(
              "Healing failed for user " +
                user.id +
                " with an attempt to do: " +
                valueToHeal,
            );
          }
        }),
      );
      await sendDiscordMessage(
        "Game Master",
        `User(s) ${healedUsers.map((user) => user).join(", ")} has been healed for ${value} HP.`,
      );
      return "Healing successful. The dead are not healed";
    });
  } catch (error) {
    logger.error("A game master failed to heal users: " + error);
    return "Something went wrong at " + Date.now() + " with error: " + error;
  }
};

export const damageUsers = async (users: { id: string }[], value: number) => {
  const session = await auth();
  if (!session || session?.user.role !== "ADMIN") {
    throw new Error("Not authorized");
  }

  try {
    return await db.$transaction(async (db) => {
      const damagedUsers: string[] = [];
      await Promise.all(
        users.map(async (user) => {
          const targetHP = await db.user.findFirst({
            where: {
              id: user.id,
            },
            select: { hp: true },
          });

          const valueToDamage = await damageValidator(
            db,
            user.id,
            targetHP!.hp,
            value,
          );

          const targetUser = await db.user.update({
            where: {
              id: user.id,
            },
            data: {
              hp: { decrement: valueToDamage },
            },
          });
          damagedUsers.push(targetUser.username ?? "Hidden");
        }),
      );
      await sendDiscordMessage(
        "Game Master",
        `User ${damagedUsers.map((user) => user).join(", ")} has been damaged for ${value} HP.`,
      );
      return "Damage successful";
    });
  } catch (error) {
    logger.error("A game master failed to heal users: " + error);
    return "Something went wrong at " + Date.now() + " with error: " + error;
  }
};

/**
 * Gives XP to multiple users, without setting the last mana date.
 * @param users - An array of User objects.
 * @param xp - The amount of XP to give to each user.
 * @returns A string indicating the result of the operation.
 */
export const giveXpToUsers = async (users: User[], xp: number) => {
  const session = await auth();
  if (!session || session?.user.role !== "ADMIN") {
    throw new Error("Not authorized");
  }

  try {
    return await db.$transaction(async (db) => {
      await Promise.all(
        users.map(async (user) => {
          await experienceAndLevelValidator(db, user, xp);
        }),
      );
      sendDiscordMessage(
        "Game Master",
        `User(s) ${users.map((user) => user.username).join(", ")} has been given ${xp} XP.`,
      );
      return "Successfully gave XP to users";
    });
  } catch (error) {
    logger.error("A game master failed to give XP to users: " + error);
    return "Something went wrong at " + Date.now() + " with error: " + error;
  }
};

export const giveManaToUsers = async (users: User[], mana: number) => {
  const session = await auth();
  if (!session || session?.user.role !== "ADMIN") {
    throw new Error("Not authorized");
  }

  try {
    return await db.$transaction(async (db) => {
      await Promise.all(
        users.map(async (user) => {
          // Validate the mana amount to give
          const manaToGive = await manaValidator(db, user.id, mana);

          // If the validator returns a string, return the error message
          if (typeof manaToGive === "string" || manaToGive === 0) {
            return manaToGive;
          }

          await db.user.update({
            where: {
              id: user.id,
            },
            data: {
              mana: { increment: manaToGive },
            },
          });
        }),
      );
      sendDiscordMessage(
        "Game Master",
        `User(s) ${users.map((user) => user.username).join(", ")} has been given ${mana} mana.`,
      );
      return "Mana given successfully";
    });
  } catch (error) {
    logger.error("A game master failed to give mana to users: " + error);
    return "Something went wrong at " + Date.now() + " with error: " + error;
  }
};

export const giveArenatokenToUsers = async (
  users: User[],
  arenatoken: number,
) => {
  const session = await auth();
  if (!session || session?.user.role !== "ADMIN") {
    throw new Error("Not authorized");
  }

  try {
    return await db.$transaction(async (db) => {
      await Promise.all(
        users.map(async (user) => {
          await db.user.update({
            where: {
              id: user.id,
            },
            data: {
              arenaTokens: { increment: arenatoken },
            },
          });
        }),
      );
      sendDiscordMessage(
        "Game Master",
        `User(s) ${users.map((user) => user.username).join(", ")} has been given ${arenatoken} arenatokens.`,
      );
      return "Arenatoken given successfully";
    });
  } catch (error) {
    logger.error("A game master failed to give arenatoken to users: " + error);
    return "Something went wrong at " + Date.now() + " with error: " + error;
  }
};

export const giveGoldToUsers = async (users: User[], gold: number) => {
  const session = await auth();
  if (!session || session?.user.role !== "ADMIN") {
    throw new Error("Not authorized");
  }

  try {
    return await db.$transaction(async (db) => {
      await Promise.all(
        users.map(async (user) => {
          await db.user.update({
            where: {
              id: user.id,
            },
            data: {
              gold: { increment: gold },
            },
          });
        }),
      );
      sendDiscordMessage(
        "Game Master",
        `User(s) ${users.map((user) => user.username).join(", ")} has been given ${gold} gold.`,
      );
      return "Gold given successfully";
    });
  } catch (error) {
    logger.error("A game master failed to give gold to users: " + error);
    return "Something went wrong at " + Date.now() + " with error: " + error;
  }
};
