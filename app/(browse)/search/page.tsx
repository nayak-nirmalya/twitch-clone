import React from "react";
import { redirect } from "next/navigation";

import { Results } from "./_components/results";

export default function SearchPage({
  searchParams,
}: {
  searchParams: {
    term?: string;
  };
}) {
  if (!searchParams.term) redirect("/");

  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Results term={searchParams.term} />
    </div>
  );
}
