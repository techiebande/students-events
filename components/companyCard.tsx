import { Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const CompanyCard = () => {
  return (
    <div className="bg-[#F5F8FF] p-4 w-[200px] rounded-[8px] relative flex flex-col gap-4">
      <Cross1Icon className="absolute top-4 right-4" />
      <div className="pt-[10px] px-[2px] rounded shadow w-8 h-8 bg-white">
        <Image alt="" src="/icons/bnc-logo.svg" width={32} height={32} />
      </div>

      <p className="text-gray-950 text-xs poppins-medium leading-5">
        Boston Consulting Group - Germany
      </p>
      <p className="text-primary600 poppins-semibold text-xs leading-5 cursor-pointer">
        Visit company page
      </p>
    </div>
  );
};

export default CompanyCard;
