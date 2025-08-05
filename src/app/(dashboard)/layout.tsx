"use client";

import { SessionProvider } from "next-auth/react";
import { ReduxProvider } from "../store/ReduxProvider";
import Sidebar from "./layout/sidebar/Sidebar";
import Header from "./layout/header/Header";

export default function Layout({children}:{children:React.ReactNode}){
    return (
        <>
        <SessionProvider>
        <ReduxProvider>
         <Sidebar/>
          <div className="md:ml-64 ml-0 mt-4 h-full">
          <Header/>
          {children}
          </div>
         </ReduxProvider>
         </SessionProvider>
        </>
    )
}