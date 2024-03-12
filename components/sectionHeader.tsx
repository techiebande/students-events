import { cn } from "@/lib/utils";
import React from "react";

const SectionHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        className,
        "text-gray950 poppins-semibold leading-5 text-base"
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeader;
