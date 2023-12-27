import React from "react";
import { WifiOff } from "lucide-react";

export function OfflineVideo({ username }: { username: string }) {
  return (
    <div className="h-full flex flex-col space-y-4 justify-center items-center">
      <WifiOff className="h-10 w-10 text-muted-foreground" />
      <p className="text-muted-foreground">{username} is offline</p>
    </div>
  );
}
