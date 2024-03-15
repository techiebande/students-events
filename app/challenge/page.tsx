import Separator from "@/components/Separator";
import ChallengeStepsList from "@/components/challenge/challengeStepsList";
import ChallengeHeader from "@/components/challenge/header";
import Paper from "@/components/paper";
import { Button } from "@/components/ui/button";
import { cn, filmoType } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Actions = () => {
  return (
    <div className="flex items-center gap-6">
      <Button className="py-3 px-6 flex items-center justify-center border rounded-[6px] border-gray-300 hover:shadow-stats bg-white hover:bg-white text-gray-600 poppins-semibold text-sm leading-5">
        Back
      </Button>
      <Button className="items-center justify-center w-[216px] bg-primary600 hover:bg-primary700 poppins-semibold text-sm leading-5 text-white">
        Next
      </Button>
    </div>
  );
};

const ChallengePage = () => {
  return (
    <div>
      <ChallengeHeader title="Introduction to strategy consulting " />
      <div className="mt-5 px-2 md:px-[60px] flex gap-[30px] pb-6">
        <div className="w-full">
          <Paper className="">
            <p className="text-gray-800 text-sm poppins-medium leading-5">
              Task 1: SWOT Analysis
            </p>
            <p
              className={cn(
                filmoType.className,
                "text-gray-900 text-[24px] font-[400]"
              )}
            >
              Hi Jack! Welcome to the challenge.
            </p>
            <Separator className="mt-5" />
            <div className="mt-5">
              <iframe
                className="rounded-[10px]"
                width="100%"
                height="406px"
                src="https://www.youtube.com/embed/gNAzo22-uNs"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </Paper>
          <div className="mt-6 lg:hidden">
            <Actions />
          </div>
        </div>
        <div className="hidden lg:flex w-[324px] h-full flex-col ">
          <Paper className="w-full flex items-center justify-center">
            <Image src="/icons/BCG-new.svg" alt="" width={160} height={37} />
          </Paper>
          <Paper className="mt-6 pl-6">
            <ChallengeStepsList />
          </Paper>
          <div className="mt-[53px]">
            <Actions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengePage;
