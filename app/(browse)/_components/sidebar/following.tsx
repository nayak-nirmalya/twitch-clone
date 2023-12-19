"use client";

import React from "react";
import { Follow, User } from "@prisma/client";

import { useSidebar } from "@/store/use-sidebar";

export function Following({
  data,
}: {
  data: (Follow & { following: User })[];
}) {
  const { collapsed } = useSidebar((state) => state);

  if (!data.length) return null;

  return (
    <div>
      {!collapsed && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      )}
    </div>
  );
}
