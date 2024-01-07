import React from "react";
import Link from "next/link";
import { Stream, User } from "@prisma/client";

export function ResultCard({ data }: { data: Stream & { user: User } }) {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="h-full w-full space-y-4"></div>
    </Link>
  );
}
