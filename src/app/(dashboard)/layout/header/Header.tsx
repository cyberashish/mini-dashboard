"use client";

import { Button } from "@/components/ui/button";
import ProfileDropdown from "./ProfileDropdown";
import MobileSidebar from "../sidebar/MobileSIdebar";

export default function Header(){
    return (
        <div className="flex items-center justify-between p-3 sticky top-0 z-20 backdrop-blur-3xl">
          <div className="flex">
          <Button variant='ghost' className="md:block hidden" >Demo Dashboard</Button>
          <MobileSidebar/>
          </div>
          <ProfileDropdown/>
        </div>
    )
}