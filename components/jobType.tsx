"use client";
import { cn, filmoType } from "@/lib/utils";
import useStore from "@/store/zuStore";
import Image from "next/image";
import React from "react";

const JobType = ({
  icon,
  selected,
  type,
  title,
  description,
  className,
  change,
}: {
  icon: string;
  selected: boolean;
  type: string;
  title: string;
  description: string;
  className: string;
  change: (payload: string) => void;
}) => {
  return (
    <div
      onClick={() => change(type)}
      className={cn(
        className,
        "p-5 flex flex-col gap-[10px] rounded shadow-stats bg-white cursor-pointer",
        selected ? "border border-[#FD6F8E] bg-[#FFF5F6]" : ""
      )}
    >
      <Image src={icon} alt="icon" width={40} height={40} />
      <p
        className={cn(
          "mt-5  text-[20px] font-normal",
          filmoType.className,
          selected ? "text-primary600" : "text-gray-950"
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          "poppins-regular text-sm leading-5 font-normal",
          selected ? "text-primary600" : "text-gray-950"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default JobType;
