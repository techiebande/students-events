import { cn } from "@/lib/utils";
import React from "react";
import CompanyLogo from "../companyLogo";
import { ProgressComp } from "./progress";
import Steps from "./steps";
import { Cross1Icon } from "@radix-ui/react-icons";

const ChallengeHeader = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "py-2 pb-4 sm:pb-2 xl:items-center justify-between flex flex-col gap-y-4 xl:flex-row px-8 sm:px-[60px]  bg-white relative w-[100vw]",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row gap-y-0 gap-5">
        <CompanyLogo />
        <h1 className="relative pt-[2px] text-gray950 poppins-medium leading-6">
          {title}
        </h1>
      </div>
      <div className="flex flex-col gap-y-4 lg:flex-row gap-10 lg:items-center ">
        <div className="relative -top-1">
          <ProgressComp />
        </div>
        <div className="">
          <Steps />
        </div>
        <Cross1Icon className="text-gray-400 w-[22px] h-[22px] xl:static absolute top-[15px] right-8 sm:right-[60px]" />
      </div>
    </div>
  );
};

export default ChallengeHeader;
