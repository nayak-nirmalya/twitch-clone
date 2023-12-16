"use client";

import React from "react";
import { User } from "@prisma/client";

import { useSidebar } from "@/store/use-sidebar";

import { UserItem } from "./user-item";

export function Recommended({ data }: { data: User[] }) {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && data.length > 0;

  return (
    <div>
      {showLabel && (
        <div className="pl-6 mb-4">
          <p className="text-xs text-muted-foreground">Recommended</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((user) => (
          <UserItem
            key={user.id}
            imageUrl={user.imageUrl}
            username={user.username}
            isLive={true}
          />
        ))}
      </ul>
    </div>
  );
}
