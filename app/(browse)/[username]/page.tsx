import React from "react";
import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/user-service";

export default async function UserPage({
  params: { username },
}: {
  params: { username: string };
}) {
  const user = await getUserByUsername(username);

  if (!user) notFound();

  return <div className="flex flex-col gap-y-4">User: {user?.username}</div>;
}
