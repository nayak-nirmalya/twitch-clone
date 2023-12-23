"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { useCreatorSidebar } from "@/store/use-creator-sidebar";

export function Wrapper({ children }: { children: React.ReactNode }) {
  const { collapsed } = useCreatorSidebar((state) => state);

  return (
    <aside
      className={cn(
        "z-50 fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E34]",
        collapsed && "lg:w-[70px]"
      )}
    >
      {children}
    </aside>
  );
}
