import React, { useState } from "react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CategoryBadge = ({
  icon,
  text,
  active,
}: {
  icon: string;
  text: string;
  active?: boolean;
}) => {
  const [selected, setSelected] = useState(() => (active ? true : false));

  const toggleSelect = () => setSelected((selected) => !selected);
  return (
    <Badge
      onClick={active ? () => {} : toggleSelect}
      className={cn(
        !selected
          ? "bg-white text-gray-800 poppins-regular hover:bg-white"
          : "bg-primary400 border text-white poppins-semibold hover:bg-primary400",
        "py-[10px] pl-[10px] rounded-[30px] flex items-center gap-2 leading-5"
      )}
    >
      <Image src={icon} alt="icon" width={20} height={20} />
      {text}
    </Badge>
  );
};

export default CategoryBadge;
