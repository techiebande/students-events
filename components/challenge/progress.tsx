"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressComp() {
  const [progress, setProgress] = React.useState(20);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-full lg:w-[327px]">
        <p className="text-gray-900 poppins-regular leading-5 text-sm">
          {progress}%
        </p>
        <p className="text-primary600 text-sm poppins-semibold leading-5">
          00:52:12
        </p>
      </div>

      <Progress value={progress} className="w-full lg:w-[327px]" />
    </div>
  );
}
