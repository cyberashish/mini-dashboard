"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function ProfileDropdown() {
  const { data: session } = useSession();
  const userInfo = session?.user?.email?.charAt(0).toUpperCase() || "A";
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center cursor-pointer text-sm font-medium">
          {userInfo}
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem  asChild>
          <Link href="/profile" className="cursor-pointer" >
          Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
        asChild
          onClick={() => signOut()}
        >
          <Button className="w-full" >
          Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
