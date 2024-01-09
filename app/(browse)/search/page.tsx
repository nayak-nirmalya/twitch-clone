import React from "react";
import { redirect } from "next/navigation";

export default function SearchPage({
  searchParams,
}: {
  searchParams: {
    term?: string;
  };
}) {
  if (!searchParams.term) redirect("/");

  return <div>SearchPage</div>;
}
