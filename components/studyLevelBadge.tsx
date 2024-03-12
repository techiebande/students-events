import React, { useState } from "react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { cn } from "@/lib/utils";

const StudyLevelBadge = ({ text }: { text: string }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelect = () => setSelected((selected) => !selected);
  return (
    <Badge
      onClick={toggleSelect}
      className={cn(
        !selected
          ? "bg-white text-gray-800 poppins-regular border-[#D0D5DD] hover:bg-white"
          : "bg-primary25  border-primary100 shadow-stats text-primary600 poppins-bold  hover:bg-primary25",
        "rounded-[6px] border py-[10px] px-3 flex items-center text-sm justify-center leading-5"
      )}
    >
      {text}
    </Badge>
  );
};

export default StudyLevelBadge;
