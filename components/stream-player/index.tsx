"use client";

import React from "react";
import { Stream, User } from "@prisma/client";
import { LiveKitRoom } from "@livekit/components-react";

import { useViewerToken } from "@/hooks/use-viewer-token";
import { useChatSidebar } from "@/store/use-chat-sidebar";
import { cn } from "@/lib/utils";

import { ChatToggle } from "./chat-toggle";
import { Video, VideoSkeleton } from "./video";
import { Chat, ChatSkeleton } from "./chat";
import { Header } from "./header";

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
  const { collapsed } = useChatSidebar((state) => state);

  if (!token || !identity || !name) {
    return <StreamPlayerSkeleton />;
  }

  return (
    <>
      {collapsed && (
        <div className="hidden lg:block fixed top-[100px] right-2 z-50">
          <ChatToggle />
        </div>
      )}
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
        className={cn(
          "grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full",
          collapsed && "lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
        )}
      >
        <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
          <Video hostName={user.username} hostIdentity={user.id} />
          <Header
            imageUrl={user.imageUrl}
            hostName={user.username}
            hostIdentity={user.id}
            isFollowing={isFollwing}
            name={stream.name}
            viewerIdentity={identity}
          />
        </div>
        <div className={cn("col-span-1", collapsed && "hidden")}>
          <Chat
            viewerName={name}
            hostName={user.username}
            hostIdentity={user.id}
            isFollowing={isFollwing}
            isChatEnabled={stream.isChatEnabled}
            isChatDelayed={stream.isChatDelayed}
            isChatFollowersOnly={stream.isChatFollowersOnly}
          />
        </div>
      </LiveKitRoom>
    </>
  );
}

export function StreamPlayerSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:gap-y-0 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-6 h-full">
      <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-2 2xl:col-span-5 lg:overflow-y-auto hidden-scrollbar pb-10">
        <VideoSkeleton />
        {/* TODO: Header Skeleton */}
      </div>
      <div className="col-span-1 bg-background">
        <ChatSkeleton />
      </div>
    </div>
  );
}
