"use client";

import React from "react";
import { Stream, User } from "@prisma/client";

export default function StreamPlayer({
  user,
  stream,
  isFollwing,
}: {
  user: User & { stream: Stream | null };
  stream: Stream;
  isFollwing: boolean;
}) {
  return <div>StreamPlayer</div>;
}
