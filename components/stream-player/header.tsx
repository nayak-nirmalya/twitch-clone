"use client";

import React from "react";

import { UserAvatar } from "@/components/user-avatar";
import { VerifiedMark } from "@/components/verified-mark";

export function Header({
  hostIdentity,
  hostName,
  imageUrl,
  isFollowing,
  name,
  viewerIdentity,
}: {
  imageUrl: string;
  hostName: string;
  hostIdentity: string;
  viewerIdentity: string;
  isFollowing: boolean;
  name: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 items-start justify-between px-4">
      <div className="flex items-center gap-x-3">
        <UserAvatar
          imageUrl={imageUrl}
          username={hostName}
          size="lg"
          isLive={true}
          showBadge
        />
        <div className="space-y-1">
          <div className="flex items-center gap-x-2">
            <h2 className="text-lg font-semibold">{hostName}</h2>
            <VerifiedMark />
          </div>
        </div>
      </div>
    </div>
  );
}
