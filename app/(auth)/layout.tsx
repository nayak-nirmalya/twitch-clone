import React from "react";
import { Metadata } from "next";

import { Logo } from "./_components/logo";

export const metadata: Metadata = {
  title: 'Authentication',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6">
      <Logo />
      {children}
    </div>
  );
}
