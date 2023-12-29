"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function ChatForm({
  value,
  isDelayed,
  isFollowersOnly,
  isFollowing,
  isHidden,
  onChange,
  onSubmit,
}: {
  onSubmit: () => void;
  onChange: (value: string) => void;
  value: string;
  isHidden: boolean;
  isFollowersOnly: boolean;
  isDelayed: boolean;
  isFollowing: boolean;
}) {
  return <div>ChatForm</div>;
}
