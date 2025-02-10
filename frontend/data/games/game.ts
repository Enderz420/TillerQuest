"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { User } from "@prisma/client";

export const startGame = async (user: User) => {
  const session = await auth();
  if (!session?.user.id) {
    return "You need to be logged in to play";
  }

  if (user.arenaTokens < 1) {
    return false;
  }

  await db.user.update({
    where: { id: user.id },
    data: { arenaTokens: { decrement: 1 } },
  });
  return true;
};

export const finishGame = async (userId: string, score: number) => {
  const session = await auth();
  if (!session?.user.id) {
    return "You need to be logged in to play";
  }

  await db.user.update({
    where: { id: userId },
    data: { gold: { increment: score } },
  });
  return "Recieved " + score + " gold";
};
