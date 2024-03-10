import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";

const CreateJobPageHeader = () => {
  return (
    <div className="flex justify-between items-center py-2 px-[15px] sm:px-[26px] md:px-8 lg:px-[60px]">
      <div className="flex gap-1 items-center sm:gap-5">
        <Image
          src="/icons/logo.png"
          alt="logo"
          width="36"
          height="36"
          className="mt-2"
        />

        <p className=" text-gray950 text-sm sm:text-base font-bold leading-5 sm:leading-6">
          Create new job post
        </p>
      </div>
      <div className="flex gap-2 items-center sm:gap-10">
        <Button
          variant="ghost"
          className="text-xs leading-4 text-gray950 poppins-semibold px-0 sm:leading-5 sm:text-sm"
        >
          save as draft
        </Button>
        <Cross1Icon className="w-5 h-5" />
      </div>
    </div>
  );
};

export default CreateJobPageHeader;
