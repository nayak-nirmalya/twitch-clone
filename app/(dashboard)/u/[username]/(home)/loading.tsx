import React from "react";

import { StreamPlayerSkeleton } from "@/components/stream-player";

export default function CreatorLoading() {
  return (
    <div className="h-full">
      <StreamPlayerSkeleton />
    </div>
  );
}
