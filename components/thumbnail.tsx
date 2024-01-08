import React from "react";
import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";
import { LiveBadge } from "@/components/live-badge";
import { UserAvatar } from "@/components/user-avatar";

export function Thumbnail({
  src,
  fallback,
  isLive,
  username,
}: {
  src: string | null;
  fallback: string;
  isLive: boolean;
  username: string;
}) {
  return <div>Thumbnail</div>;
}
