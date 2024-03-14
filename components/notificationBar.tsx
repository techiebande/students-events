import React from "react";
import { Badge } from "./ui/badge";
import {
  BellIcon,
  InfoCircledIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

const NotificationBar = ({ className }: { className: string }) => {
  return (
    <div className={cn("flex items-start justify-end gap-3", className)}>
      <div className="flex justify-between gap-3">
        <Badge variant="icon">
          <MagnifyingGlassIcon />
        </Badge>
        <Badge variant="icon">
          <BellIcon />
        </Badge>
        <Badge variant="icon">
          <InfoCircledIcon />
          Support
        </Badge>
      </div>
      <div>
        <Avatar className="border border-[#fff]">
          <AvatarImage className="w-[36px] h-[36px]" src="icons/avatar.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default NotificationBar;
