"use client";

import React from "react";
import { Stream, User } from "@prisma/client";

import { useViewerToken } from "@/hooks/use-viewer-token";

export default function StreamPlayer({
  user,
  stream,
  isFollwing,
}: {
  user: User & { stream: Stream | null };
  stream: Stream;
  isFollwing: boolean;
}) {
  const { identity, name, token } = useViewerToken(user.id);

  if (!token || !identity || !name) {
    return <div>Can not watch the stream.</div>;
  }

  return <div>Allowed to watch stream.</div>;
}
