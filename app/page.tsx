"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  MagnifyingGlassIcon,
  InfoCircledIcon,
  BellIcon,
  PlusIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Usercard from "@/components/usercard";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);
  return (
    <div className={cn("min-h-[100vh] flex bg-[#f0f5fe] poppins-regular")}>
      <div className="absolute sm:hidden left-5 top-3">
        <HamburgerMenuIcon
          className="w-[40px] h-[40px] cursor-pointer"
          onClick={() => {
            console.log("clicked");
            setOpenNav((openNav) => !openNav);
          }}
        />
      </div>
      <div className="hidden sm:flex sm:w-[10%] md:w-[25%] bg-white">
        <div className="flex h-[45px] w-full items-center sm:justify-center lg:justify-start lg:ml-8 mt-8">
          <Image src="/icons/logo.png" alt="site logo" width={45} height={45} />
        </div>
      </div>

      <div className="w-full sm:w-[90%] md:w[-75%] pt-8 px-3 md:px-8">
        <div className="mt-12 md:mt-0">
          <div>
            <h1 className="text-gray950 text-[32px] leading-10">Challenges</h1>
            <p
              className={cn(
                "text-gray800 font-[500] text-xs md:text-sm leading-5 mt-2 font-poppins"
              )}
            >
              Create events for students around the globe and attract talent.
            </p>
          </div>
          <div className="flex items-start justify-end gap-3 absolute top-3 md:top-8 right-8">
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
                <AvatarImage
                  className="w-[36px] h-[36px]"
                  src="icons/avatar.png"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-8 gap-3">
          <div className="bg-[rgba(255, 255, 255, 0.40)]  text-sm font-[500] text-gray500 leading-5 flex items-center justify-between gap-2 rounded shadow-stats">
            <p className="py-3 md:px-3 px-1 rounded">Overview</p>
            <p className="py-3 md:px-3 px-1 rounded">Analytics</p>
            <p className="py-3 md:px-3 px-1 font-[600] rounded-[6px] text-primary600 bg-white ">
              Engaged talents{" "}
              <Badge className="bg-primary600 rounded-full ml-2">3</Badge>
            </p>
          </div>
          <div className="col-span-1 md:ml-auto">
            <Button className="bg-primary600 flex gap-3 mt-4 md:mt-0 md:ml-auto">
              <PlusIcon />
              Create New Challenge
            </Button>
          </div>
        </div>
        <div className="mt-8 flex gap-4 overflow-x-auto scrollbar">
          <Usercard />
          <Usercard />
          <Usercard />
          <Usercard />
        </div>
      </div>
    </div>
  );
}
