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
}: {
  icon: string;
  selected: boolean;
  type: string;
  title: string;
  description: string;
}) => {
  const changeJobLocation = useStore((state) => state.changeJobLocation);
  return (
    <div
      onClick={() => changeJobLocation(type)}
      className={cn(
        "p-5 flex flex-col gap-[10px] rounded shadow-stats bg-white cursor-pointer w-[318px]",
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
