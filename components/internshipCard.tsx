import { filmoType } from "@/app/create-job-post/page";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";
import { Badge } from "./ui/badge";

const InternshipCard = () => {
  return (
    <div className=" max-w-[85%] rounded-[5px] bg-white shadow-[0px 2.191px 1.753px 0px rgba(108, 73, 172, 0.02), 0px 5.265px 4.212px 0px rgba(108, 73, 172, 0.03), 0px 9.913px 7.93px 0px rgba(108, 73, 172, 0.04), 0px 17.683px 14.146px 0px rgba(108, 73, 172, 0.04), 0px 33.074px 26.459px 0px rgba(108, 73, 172, 0.05), 0px 79.167px 63.333px 0px rgba(108, 73, 172, 0.07)] px-2 pt-2 pb-4">
      <div className="relative rounded-[7.71px] bg-[#EEF4FF] p-3 pt-6 pb-24">
        <div className="bg-white w-[56px] h-[56px] rounded-[6px] absolute -bottom-6 flex items-center justify-center shadow border-0">
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
      <div className="mt-3 flex ">
        <Badge className="rounded-[24px] border border-[#EFF0F1] bg-[#F5F8FF] text-gray-500 text-xs font-normal leading-3 poppins-regular ml-auto">
          <Image
            src="/icons/hour-glass.svg"
            width={13}
            height={13}
            alt="hour glass"
          />
          Internship: 4 - 6m
        </Badge>
      </div>
    </div>
  );
};

export default InternshipCard;
