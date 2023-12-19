import React from "react";

export default function UserPage({
  params: { username },
}: {
  params: { username: string };
}) {
  return <div>User: {username}</div>;
}
