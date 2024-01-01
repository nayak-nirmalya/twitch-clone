"use client";

import React from "react";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Actions({
  hostIdentity,
  isFollowing,
  isHost,
}: {
  hostIdentity: string;
  isFollowing: boolean;
  isHost: boolean;
}) {
  return (
    <Button
      disabled={isHost}
      onClick={() => {}}
      variant="primary"
      size="sm"
      className="w-full lg:w-auto"
    >
      <Heart
        className={cn("h-4 w-4 mr-2", isFollowing ? "fill-white" : "fill-none")}
      />
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
}
