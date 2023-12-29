"use client";

import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

import { ChatToggle } from "./chat-toggle";

export function ChatHeader() {
  return (
    <div className="relative p-3 border-b">
      <div className="absolute left-2 top-2 hidden lg:block">
        <ChatToggle />
      </div>
      <p className="font-semibold text-primary text-center">Stream Chat</p>
      {/* TODO: Toggle Chat Community */}
    </div>
  );
}

export function ChatHeaderSkeleton() {
  return (
    <div className="relative p-3 border-b hidden md:block">
      <Skeleton className="h-6 w-6 left-3 top-3" />
      <Skeleton className="h-6 w-28 left-3 mx-auto" />
    </div>
  );
}
