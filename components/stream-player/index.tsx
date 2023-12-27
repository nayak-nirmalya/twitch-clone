"use client";

import React from "react";
import { Stream, User } from "@prisma/client";
import { LiveKitRoom } from "@livekit/components-react";

import { useViewerToken } from "@/hooks/use-viewer-token";

import { Video } from "./video";

export function StreamPlayer({
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

  return (
    <>
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className="grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full"
      >
        <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
          <Video hostName={user.username} hostIdentity={user.id} />
        </div>
      </LiveKitRoom>
    </>
  );
}
