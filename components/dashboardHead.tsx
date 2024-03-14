import { cn, filmoType } from "@/lib/utils";
import React from "react";

const DashboardHead = ({
  className,
  title,
  description,
}: {
  className?: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="">
      <h1
        className={cn(
          filmoType.className,
          "text-gray-950 text-[32px] leading-[41.6px]",
          className
        )}
      >
        {title}
      </h1>
      <p className="text-gray-800 poppins-medium text-sm leading-5">
        {description}
      </p>
    </div>
  );
};

export default DashboardHead;
