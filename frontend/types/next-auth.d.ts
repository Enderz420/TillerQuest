import { UserRole } from "@prisma/client";
import { Class } from "@prisma/client";
// eslint doesn't recognize usage of the following imports
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { type DefaultSession } from "next-auth";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

// This file extends the default types provided by NextAuth.js to include additional properties.
// Specifically, it adds a 'role' property to the 'User' object, which is part of the 'Session' object.
// The 'role' property is of type 'UserRole', which is imported from '@prisma/client'.
// This allows us to access the 'role' property on the 'User' object in our application,
// for example, to implement role-based access control.

export type ExtendedUser = DefaultSession["user"] & {
  name: string;
  username: string;
  lastname: string;
  class: Class;
  role: UserRole;
};

declare module "next-auth" {
  export interface Session {
    user: ExtendedUser;
  }
}

declare module "auth/core/jwt" {
  interface JWT {
    name: string;
    username: string;
    lastname: string;
    class: Class;
    role: UserRole;
  }
}
