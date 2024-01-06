import React from "react";

import { StreamPlayerSkeleton } from "@/components/stream-player";

export default function UserLoading() {
  return (
    <div className="h-full">
      <StreamPlayerSkeleton />
    </div>
  );
}
