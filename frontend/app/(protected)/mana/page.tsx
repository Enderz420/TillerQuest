import { auth } from "@/auth";
import MainContainer from "@/components/MainContainer";
import { getUserByUsername } from "@/data/user/getUser";
import { Paper, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import ManaForm from "./_components/ManaForm";

export default async function ManaPage() {
  const session = await auth();

  if (!session) {
    return null;
  }

  const user = await getUserByUsername(session?.user.username);

  if (!user) {
    notFound();
  }

  const currentDate = new Date();

  async function checkIfWeekend() {
    const dayOfWeek = currentDate.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }

  const isWeekend = await checkIfWeekend();

  return (
    <MainContainer>
      <Paper
        elevation={6}
        className="m-3 p-5 flex flex-col gap-5 items-center text-center justify-center"
      >
        <Image
          src="/mana.jpg"
          className="rounded-full"
          alt="mana"
          width={400}
          height={400}
        />
        <Typography variant="h5" align="center">
          You attempt to attune to the magic around you
        </Typography>
        <ManaForm user={user} currentDate={currentDate} isWeekend={isWeekend} />
      </Paper>
    </MainContainer>
  );
}
