"use client";

import React from "react";

import { Switch } from "@/components/ui/switch";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

export function ToggleCard({
  field,
  label,
  value = false,
}: {
  field: FieldTypes;
  label: string;
  value: boolean;
}) {
  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>
        <div className="space-y-2">
          <Switch checked={value}>{value ? "On" : "Off"}</Switch>
        </div>
      </div>
    </div>
  );
}
