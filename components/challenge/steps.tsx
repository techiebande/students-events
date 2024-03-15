"use client";

import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const steps = ["T1", "T2", "T3", "T4", "Done"];

const Step = ({
  isCurrent,
  step,
  currentStep,
  setCurrentStep,
}: {
  isCurrent: boolean;
  step: string;
  currentStep: string;
  setCurrentStep: (step: string) => void;
}) => {
  const changeStep = () => {
    setCurrentStep(step);
  };
  return (
    <Badge
      onClick={changeStep}
      className={cn(
        isCurrent
          ? "rounded-[20px] bg-primary600 hover:bg-primary600 text-white poppins-semibold"
          : "rounded-[4px] bg-gray-50 hover:bg-gray-50 text-gray-900 poppins-medium",
        "w-[44px] flex items-center justify-center pt-1 pr-[15px] pb-1 pl-[14.328px] text-xs leading-4"
      )}
    >
      {step}
    </Badge>
  );
};

const Steps = () => {
  const [currentStep, setCurrentStep] = useState("T1");

  return (
    <div className="flex items-center gap-4">
      {steps.map((step, i) => (
        <Step
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          step={step}
          isCurrent={currentStep === step}
          key={i}
        />
      ))}
    </div>
  );
};

export default Steps;
