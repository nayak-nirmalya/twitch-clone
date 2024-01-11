"use client";

import React, { useTransition } from "react";
import { toast } from "sonner";

import { onUnblock } from "@/actions/block";
import { Button } from "@/components/ui/button";

export function UnblockButton({ userId }: { userId: string }) {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((result) =>
          toast.success(`User ${result.blocked.username} unblocked`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={onClick}
      variant="link"
      size="sm"
      className="text-blue-500 w-full"
    >
      Unblock
    </Button>
  );
}
