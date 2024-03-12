import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const EditInfo = ({ className }: { className: string }) => {
  return (
    <div className={cn(className, "flex items-center gap-3")}>
      <p className="text-primary600 poppins-medium leading-5 text-sm">Edit</p>
      <Image src="/icons/Edit.svg" alt="icon" width={20} height={20} />
    </div>
  );
};

export default EditInfo;
