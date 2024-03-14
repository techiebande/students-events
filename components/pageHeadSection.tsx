import { cn } from "@/lib/utils";
import localFont from "next/font/local";

import React from "react";

const filmoType = localFont({
  src: "../public/fonts/filmotype.woff2",
  display: "swap",
  variable: "--filmotype",
});

const PageHeadSection = ({
  className,
  title,
  description,
  titleSize,
}: {
  className?: string;
  title: string;
  description: string;
  titleSize?: number;
}) => {
  return (
    <div>
      <h1
        className={cn(
          `text-[${titleSize || 24}px]`,
          "text-gray950 font-[400] leading-6 sm:text-2xl",
          filmoType.className
        )}
      >
        {title}
      </h1>
      <p className="text-gray-800 text-xs leading-4 poppins-regular mt-1 sm:text-sm sm:leading-5 ">
        {description}
      </p>
    </div>
  );
};

export default PageHeadSection;
