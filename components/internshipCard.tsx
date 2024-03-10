import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";
import localFont from "next/font/local";
import { Badge } from "./ui/badge";

const filmoType = localFont({
  src: "../public/fonts/filmotype.woff2",
  display: "swap",
  variable: "--filmotype",
});

const InternshipCard = () => {
  return (
    <div className="w-[250px] h-[290px] rounded-[5px] bg-white shadow-internship box-border px-2 pt-2 pb-20">
      <div className="relative rounded-[7.71px] bg-[#EEF4FF] p-3 pt-6 pb-24">
        <div className="bg-white w-[56px] h-[56px] rounded-[6px] absolute -bottom-[32px] flex items-center justify-center shadow-stats border-0">
          <Image
            src="/icons/bnc-logo.svg"
            alt="company logo"
            width="42"
            height="20"
          />
        </div>
        <p className="text-gray-700 poppins-medium text-[10px] leading-[12.823px]">
          2 days ago
        </p>
        <p className="mt-3">Boston Consulting Group (BCG) - Germany </p>
        <p
          className={cn(
            filmoType.className,
            "mt-2 text-[20px] leading-6 font-normal text-gray-800 "
          )}
        >
          Client Solutions Internship
        </p>
      </div>
      <div className="mt-2 flex">
        <Badge className="rounded-[24px] w-[136px] h-[24px] px-[6px] py-[3px] border border-[#EFF0F1]  bg-[#F5F8FF] hover:bg-[#F5F8FF] text-gray-500 text-xs font-normal leading-3 poppins-regular ml-auto shadow-none">
          <Image
            src="/icons/hour-glass.svg"
            width={13.2}
            height={13.2}
            alt="hour glass"
          />
          Internship: 4 - 6m
        </Badge>
      </div>
    </div>
  );
};

export default InternshipCard;
