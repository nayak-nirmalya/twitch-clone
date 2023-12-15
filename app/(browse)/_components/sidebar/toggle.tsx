"use client";

import React from "react";
import { ArrowLeftFromLine } from "lucide-react";

import { useSidebar } from "@/store/use-sidebar";
import { Button } from "@/components/ui/button";

export function Toggle() {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full">
          <p className="font-semibold text-primary">For you</p>
          <Button
            className="h-auto ml-auto p-2"
            variant="ghost"
            onClick={onCollapse}
          >
            <ArrowLeftFromLine className="w-4 h-4" />
          </Button>
        </div>
      )}
    </>
  );
}
