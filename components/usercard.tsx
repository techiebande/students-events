import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const Usercard = () => {
  return (
    <div className="p-5 bg-white rounded-[5px] shadow-cards ">
      <div className="flex gap-36">
        <Avatar className="border border-[#fff]">
          <AvatarImage
            className="w-[45px] h-[36px]"
            src="icons/card-avatar.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-[14px]">
          <Badge className="bg-[#fcfcfd] text-[#667085] leading-4 py-[6px] text-xs px-4 font-[400] rounded-[30px] flex items-center justify-center gap-[6px] hover:bg-[#fcfcfd]">
            <Image
              alt="germany flag"
              src="/icons/DE.svg"
              width="16"
              height="16"
            />
            Germany
          </Badge>

          <Cross1Icon className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-primary600 text-[16px] leading-6 text-sm font-semibold">
          Elias Noorzai
        </p>
        <p className="text-[#oc111d] text-sm font-semibold leading-5 font-poppins">
          <span className="text-gray950">
            London School of Economics and Political Science{" "}
          </span>
          <span className="text-[#475467] text-sm font-[400] leading-5">
            | B.Sc Mechanical Engineering and Physics | Intake 2023
          </span>
        </p>

        <div className="mt-5">
          <p className="text-sm font-semibold leading-5 text-gray950">
            Skills and Interests
          </p>
          <div className="flex flex-wrap mt-3 gap-2">
            <Badge variant="badge" className="bg-[#f0f5fe]">
              <Image
                alt="finance"
                src="/icons/finance.svg"
                width="16"
                height="16"
              />
              Finance{" "}
              <span className="text-[#3538CD] text-xs font-[700]">TOP 5%</span>
            </Badge>
            <Badge variant="badge">Company Analysis</Badge>
            <Badge variant="badge">DFC Analysis</Badge>
            <Badge variant="badge">DCM</Badge>
            <Badge variant="badge">Data Interpretation</Badge>
            <Badge variant="badge">M&A Process Understanding</Badge>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <Button className="w-[133px] bg-[transparent] text-[#475467] hover:bg-transparent rounded-[6px] hover:shadow-stats">
          Message
        </Button>
        <Button className="w-[133px] bg-success600 hover:bg-green-700 rounded-[6px]">
          saved
        </Button>
      </div>
    </div>
  );
};

export default Usercard;
