"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Task Overview",
    description: "A few details about your companyccasdad",
  },
  {
    id: 2,
    title: "Instructions",
    description:
      "Which of the following venues is NOT classified as on-premise sales?",
  },
  {
    id: 3,
    title: "Resources",
    description: "Start collaborating with your teams",
  },
  {
    id: 4,
    title: "Question 1",
    description:
      "Which of the following venues is NOT classified as on-premise sales....",
  },
  {
    id: 5,
    title: "Question 2",
    description:
      "Which of the following venues is NOT classified as on-premise sales....",
  },
];

const Step = ({
  isCurrent,
  step,
  currentStep,
}: {
  isCurrent: boolean;
  step: { title: string; description: string; id: number };
  currentStep: number;
}) => {
  return (
    <div className="flex relative items-start gap-3">
      <Image
        src={
          currentStep > step.id
            ? "/icons/checked-active.svg"
            : "/icons/checked-inactive.svg"
        }
        alt=""
        width={24}
        height={24}
        className="relative top-[10px]"
      />
      {step.id !== 1 && (
        <span
          className={cn(
            !isCurrent ? "bg-gray-200" : "bg-[#177b57]",
            "w-[2px]  rounded-[2px] absolute h-[38px] left-[11px] top-[-26px]"
          )}
        ></span>
      )}

      <div className="mt-2">
        <p
          className={cn(
            isCurrent ? "text-[#177b57]" : "text-gray-700",
            "text-sm poppins-semibold"
          )}
        >
          {step.title}
        </p>
        <p
          className={cn(
            isCurrent ? "text-[#177B57]" : "text-gray-600",
            "text-xs poppins-regular h-[32px]"
          )}
        >
          {step.description.slice(0, 50) + "..."}
        </p>
      </div>
    </div>
  );
};

const ChallengeStepsList = () => {
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <div>
      {steps.map((step, i) => (
        <Step
          key={step.id}
          currentStep={currentStep}
          step={step}
          isCurrent={currentStep === step.id}
        />
      ))}
    </div>
  );
};

export default ChallengeStepsList;
