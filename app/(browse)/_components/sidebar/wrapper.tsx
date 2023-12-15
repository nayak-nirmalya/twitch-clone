import React from "react";

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      {children}
    </aside>
  );
}
