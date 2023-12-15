import React from "react";

export function Wrapper({ children }: { children: React.ReactNode }) {
  return <aside>{children}</aside>;
}
