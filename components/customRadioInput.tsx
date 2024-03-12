import { cn } from "@/lib/utils";
import React, { useState } from "react";

const CustomRadioInput = ({
  label,
  value,
  name,
  position,
  changePosition,
}: any) => {
  return (
    <label
      className="text-gray-800 text-xs sm:text-sm poppins-regular leading-5 flex items-center gap-3"
      htmlFor={value}
    >
      <input
        id={value}
        type="radio"
        checked={position === value}
        onChange={() => {
          changePosition(value);
        }}
        className="hidden"
        value={value}
        name={name}
      />
      <div
        className={cn(
          position === value
            ? "border-0 bg-primary600"
            : "border border-[#292D32]",
          "w-5 h-5 rounded-full flex items-center justify-center"
        )}
      >
        {position === value ? (
          <div className="w-2 h-2 rounded-full bg-white"></div>
        ) : null}
      </div>
      {label}
    </label>
  );
};

export default CustomRadioInput;
