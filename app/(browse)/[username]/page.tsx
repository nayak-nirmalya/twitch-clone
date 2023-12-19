import React from "react";
import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";

import { Actions } from "./_components/actions";

export default async function UserPage({
  params: { username },
}: {
  params: { username: string };
}) {
  const user = await getUserByUsername(username);

  if (!user) notFound();

  const isFollowing = await isFollowingUser(user.id);

  return (
    <div className="flex flex-col gap-y-4">
      isFollowing: {`${isFollowing}`}
      <Actions userId={user.id} isFollowing={isFollowing} />
    </div>
  );
}
