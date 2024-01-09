import React from "react";

export async function Results({ term }: { term?: string }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Results for term &quot;{term}&quot;
      </h2>
    </div>
  );
}

export function ResultsSkeleton() {
  return <div></div>;
}
