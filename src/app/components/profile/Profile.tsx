"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") { 
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not signed in</div>;
  }

  return (
    <div>
        <h1 className="text-xl font-medium text-center text-primary mb-4">User Profile</h1>
      <span className="size-20 bg-primary/20 text-primary text-3xl flex items-center justify-center rounded-full mx-auto">
      {session?.user?.email?.charAt(0).toUpperCase()}
      </span>
      <p className="text-base text-center mt-2" >{session.user?.email}</p>
    </div>
  );
}
