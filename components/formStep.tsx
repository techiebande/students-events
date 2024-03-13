import React from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

const FormStep = ({ current, first, Icon, title, description }: any) => {
  return (
    <div className="flex items-center mx-auto xl:mx-0  gap-3 relative">
      <Badge variant="formBadge">
        <Image src={Icon} width={20} height={20} alt="icon" />

        {first ? (
          ""
        ) : (
          <span
            className={cn(
              current ? "bg-primary600" : "bg-gray-700",
              "w-[2px] h-4 absolute rounded-[2px] -top-5 left-5"
            )}
          ></span>
        )}
      </Badge>
      <p
        className={cn(
          current ? "text-primary600" : "text-gray-700",
          "hidden xl:block text-sm poppins-semibold "
        )}
      >
        {title}
        <span
          className={cn(
            current ? "text-primary600" : "text-gray-500",
            "block text-xs pippins-medium leading-4 mt-1"
          )}
        >
          {description}
        </span>
      </p>
    </div>
  );
};

export default FormStep;
