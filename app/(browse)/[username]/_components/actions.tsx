"use client";

import React, { useTransition } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { onFollow } from "@/actions/follow";

export function Actions({
  isFollowing,
  userId,
}: {
  isFollowing: boolean;
  userId: string;
}) {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong, failed to follow"));
    });
  };

  return (
    <Button
      variant="primary"
      disabled={isFollowing || isPending}
      onClick={onClick}
    >
      Follow
    </Button>
  );
}
