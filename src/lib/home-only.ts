import { redirect } from "@tanstack/react-router";

/** Homepage-first project: inner paths return to Morton's Seafood hashes. */
export function toHome(hash: string = "top"): never {
  throw redirect({ to: "/", hash });
}
