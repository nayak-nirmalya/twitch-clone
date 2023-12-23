import React from "react";
import { redirect } from "next/navigation";

import { getSelfByUsername } from "@/lib/auth-service";

export default async function CreatorLayout({
  children,
  params: { username },
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  const self = await getSelfByUsername(username);

  if (!self) redirect("/");

  return <div>{children}</div>;
}
