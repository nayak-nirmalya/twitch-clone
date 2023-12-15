"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

export function Container({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar((state) => state);

  return (
    <div
      className={cn("flex-1", collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60")}
    >
      {children}
    </div>
  );
}
