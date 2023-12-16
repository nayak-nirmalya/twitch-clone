import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export default function UserAvatar({
  imageUrl,
  username,
  isLive,
}: {
  imageUrl: string;
  username: string;
  isLive?: boolean;
}) {
  return <div>UserAvatar</div>;
}
