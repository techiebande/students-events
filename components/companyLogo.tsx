import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const CompanyLogo = ({
  className,
  width,
  height,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      src="/icons/Logo.svg"
      alt="company logo"
      width={width || 36}
      height={height || 36}
      className={cn(className)}
    />
  );
};

export default CompanyLogo;
