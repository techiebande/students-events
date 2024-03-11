import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const CustomCheckbox = ({ label, value, isChecked, setIsChecked }: any) => {
  return (
    <label
      className="text-gray-800 text-sm poppins-regular leading-5 flex items-center gap-3"
      htmlFor={value}
    >
      <input
        id={value}
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked((isChecked: any) => !isChecked);
        }}
        className="hidden"
      />
      <div
        className={cn(
          "border border-[#292D32] rounded-md w-5 h-5 flex items-center justify-center"
        )}
      >
        {isChecked ? <CheckIcon /> : null}
      </div>
      {label}
    </label>
  );
};

export default CustomCheckbox;
