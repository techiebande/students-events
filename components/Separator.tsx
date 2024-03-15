import { cn } from "@/lib/utils";
import React from "react";

const Separator = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full h-[1px] bg-gray-200 mt-10", className)}></div>
  );
};

export default Separator;
