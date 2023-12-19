"use client";

import React, { useTransition } from "react";

import { Button } from "@/components/ui/button";

export function Actions({ isFollowing }: { isFollowing: boolean }) {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {});
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
