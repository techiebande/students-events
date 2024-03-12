import { cn } from "@/lib/utils";
import React from "react";

const Paper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(className, "p-6 bg-white rounded-[5px] shadow-stats")}>
      {children}
    </div>
  );
};

export default Paper;
