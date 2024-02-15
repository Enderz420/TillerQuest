"use client";
import Classes from "@/components/ui/Classes";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { InputWithLabel } from "@/components/ui/InputWithLabel";
import { Button, TextField } from "@mui/material";

export default function Create() {
  const { update } = useSession();
  const { data: user } = useSession();

  user?.user.id;

  const router = useRouter();

  const tekst = process.env.NEXT_PUBLIC_NEW_USER_SECRET;

  const [secret, setSecret] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [playerClass, setPlayerClass] = useState("Cleric1");

  // updates the user with the role of USER
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // TODO: might need to change this to db call
    if (secret !== tekst) {
      toast.error("Failure", {
        style: { background: "#581c87", color: "#fff" },
      });
      return;
    }

    toast.success("Updated user!", {
      style: { background: "#581c87", color: "#fff" },
    });
    // update the role from NEW to USER
    // add initial username, name, lastname, class and class image
    // sends to auth.ts, which updates the token with some values and the db
    update({
      role: "USER",
      username: username,
      name: name,
      lastname: lastname,
      class: playerClass.slice(0, -1),
      image: playerClass,
    });
    // necessary refreshes before redirecting to profile
    getSession();
    router.refresh();
    await update().then(() => {
      router.push("profile");
    });
  };

  return (
    <>
      <Toaster />
      <main className="flex min-h-screen flex-col  items-center justify-between md:p-16 bg-gradient-to-br from-purple-950 to-gray-950">
        <div className="bg-slate-900 flex justify-center flex-col p-10 rounded-xl">
          <form
            className=" flex flex-col items-center text-center gap-10"
            onSubmit={handleSubmit}
          >
            <h1 className="text-5xl">Create user</h1>
            <TextField
              variant="filled"
              label="Enter secret code"
              helperText="The secret code given from administrator"
              color="info"
              className=" max-w-lg w-full"
              size="small"
              onChange={(e) => setSecret(e.target.value)}
            />
            <h1 className="text-3xl">Choose class</h1>
            <Classes
              playerClass={playerClass}
              setPlayerClass={setPlayerClass}
            />
            <TextField
              variant="outlined"
              label="Enter username"
              helperText="You will be identified by this name"
              color="info"
              className=" max-w-lg w-full"
              size="small"
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Enter name"
              color="info"
              className=" max-w-lg w-full"
              size="small"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              label="Enter last name"
              color="info"
              className=" max-w-lg w-full"
              size="small"
              onChange={(e) => setLastname(e.target.value)}
            />
            <Button type="submit" variant="contained">
              Create user
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}
