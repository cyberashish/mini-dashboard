"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItem{
    id: string,
    title: string,
    url: string,
    icon: string
}

export default function NavItem({item}:{item:NavItem}){

    const pathname = usePathname();

    return (
        <>
         <Button asChild variant={item.url === pathname?'default' :'ghost'}  size="lg" >
          <Link href={item.url} className="mb-0.5 flex items-center gap-2 !text-base w-full justify-start" >
          <Icon icon={item.icon} width={20} height={20} />
          {item.title}
          </Link>
         </Button>
        </>
    )
}