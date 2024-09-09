import { Button } from "@/components/ui/button";
import { BellDot, SearchIcon } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-4 bg-white flex justify-between w-full">
      <div className="flex gap-2 border p-2 rounded-md">
        <SearchIcon className="h-5 w-5" />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>

      <div className="flex gap-4 items-center ">
        <BellDot className="text-gray-500" />
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
