"use client";

import React, { useTransition } from "react";
import { toast } from "sonner";
import { MinusCircle } from "lucide-react";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { onBlock } from "@/actions/block";
import { cn, stringToColor } from "@/lib/utils";

export function CommunityItem({
  hostName,
  viewerName,
  participantName,
  participantIdentity,
}: {
  hostName: string;
  viewerName: string;
  participantName?: string;
  participantIdentity: string;
}) {
  return <div>CommunityItem</div>;
}
