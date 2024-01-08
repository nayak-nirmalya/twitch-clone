import React from "react";
import Link from "next/link";
import { Stream, User } from "@prisma/client";

import { Thumbnail } from "@/components/thumbnail";

export function ResultCard({ data }: { data: Stream & { user: User } }) {
  return (
    <Link href={`/${data.user.username}`}>
      <div className="h-full w-full space-y-4">
        <Thumbnail
          src={data.thumbnailUrl}
          fallback={data.user.imageUrl}
          isLive={data.isLive}
          username={data.user.username}
        />
      </div>
    </Link>
  );
}
