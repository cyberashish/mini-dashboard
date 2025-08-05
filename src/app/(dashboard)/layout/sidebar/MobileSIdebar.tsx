import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from "@/components/ui/sheet";
import SidebarLayout from "./SidebarLayout";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function MobileSidebar() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
         <Button variant='ghost' className="md:hidden flex" ><Icon icon="ci:hamburger-md" width={24} height={24} /></Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 px-0 border-e-0" >
          <SheetHeader className="px-0" >
            <SheetTitle className="hidden" >Are you absolutely sure?</SheetTitle>
            <SheetDescription asChild>
              <SidebarLayout/>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
