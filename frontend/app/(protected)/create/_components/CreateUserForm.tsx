"use client";
import { Button, Paper, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import Classes from "./Classes";
import { useSession } from "next-auth/react";
import { checkNewUserSecret } from "@/data/createUser";
import { $Enums } from "@prisma/client";

export default function CreateUserForm() {
  const { update, data } = useSession();

  const [secret, setSecret] = useState("");
  const [username, setUsername] = useState(data?.user.username);
  const [name, setName] = useState(data?.user.name);
  const [lastname, setLastname] = useState(data?.user.lastname);
  const [playerClass, setPlayerClass] = useState(
    data?.user.class || $Enums.Class.Barbarian,
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const isCorrectSecret = await checkNewUserSecret(secret);

    if (!isCorrectSecret) {
      setErrorMessage("Secret code is incorrect");
      return;
    }

    // update the role from NEW to USER
    // add initial username, name, lastname, class and class image
    // sends to auth.ts, which updates the token and the db
    await update({
      role: "USER",
      username: username,
      name: name,
      lastname: lastname,
      class: playerClass,
      image: playerClass,
    });
    // call update to refresh session before redirecting to main page
    await update().then(() => {
      location.reload();
    });
  };

  return (
    <Paper elevation={2} className="mx-10">
      <form
        className="flex flex-col gap-5 py-5 items-center text-center"
        onSubmit={handleSubmit}
      >
        <Typography variant="h2">Create User</Typography>
        <Typography variant="body1">Enter Secret Code</Typography>
        <TextField
          variant="filled"
          label="Secret Code"
          onChange={(e) => setSecret(e.target.value)}
          size="small"
          required
          helperText="Enter the secret code given from a game master"
          error={!!errorMessage}
        />
        <Typography variant="body1">Enter Username</Typography>
        <TextField
          variant="outlined"
          label="Username"
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
          size="small"
          required
          helperText="Must be unique"
        />
        <Typography variant="body1">Enter Name</Typography>
        <TextField
          variant="outlined"
          label="Name"
          onChange={(e) => setName(e.target.value)}
          defaultValue={name}
          size="small"
          required
          helperText="Enter your given name"
        />
        <Typography variant="body1">Enter Lastname</Typography>
        <TextField
          variant="outlined"
          label="Lastname"
          onChange={(e) => setLastname(e.target.value)}
          defaultValue={lastname}
          size="small"
          required
          helperText="Enter your lastname"
        />
        <Typography variant="h5">Choose class</Typography>
        <Classes playerClass={playerClass} setPlayerClass={setPlayerClass} />
        {errorMessage && (
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ maxWidth: 175 }}
        >
          Create user
        </Button>
      </form>
    </Paper>
  );
}
