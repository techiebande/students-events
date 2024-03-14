import React from "react";
import FormSteps from "./formSteps";
import InternshipCard from "./internshipCard";
import useStore from "@/store/zuStore";
import { cn } from "@/lib/utils";

const CreateJobSidebar = () => {
  const step = useStore((state) => state.createJob.step);
  return (
    <div
      className={cn(
        step === 6
          ? "hidden"
          : "hidden md:flex md:w-[10vw] lg:w-[96px] xl:px-6 xl:w-[324px]",
        "min-h-full bg-gradient-to-b from-[#F8F1F3] to-[#FFF6F8] pt-10 flex-col "
      )}
    >
      <p
        className={cn(
          step > 5 && "hidden",
          "w-full sm:text-center xl:text-left text-gray-400 text-xs poppins-semibold tracking-[0.507px] leading-4"
        )}
      >
        NEXT STEPS
      </p>
      <div className={cn(step > 5 && "hidden", "pt-5")}>
        <FormSteps />
      </div>
      <div className={cn("mt-[44px] hidden xl:block")}>
        <p
          className={cn(
            step !== 1 ? "hidden" : "",
            "w-full text-gray-400 text-xs poppins-semibold tracking-[0.507px] leading-4"
          )}
        >
          PREVIEW
        </p>
        <div
          className={cn(
            step !== 1 ? "hidden" : "",
            step > 5 ? "block mt-[49px]" : "mt-5",
            " text-primary500 text-xs poppins-semibold leading-4"
          )}
        >
          <InternshipCard />
        </div>
        <div className={cn("hidden mt-10")}>
          <p className="w-full text-gray-400 text-xs poppins-semibold tracking-[0.507px] leading-4">
            QUICK TIPS
          </p>
          <p className="text-gray-700 poppins-semibold text-sm leading-5 mt-5">
            Tips for challenge type selection:
          </p>
          <p className="mt-4 text-gray-600 text-xs poppins-regular leading-4">
            Publish your first challenge as a{" "}
            <span className="poppins-semibold">Fast-Track</span> or{" "}
            <span className="poppins-semibold">Virtual Experience</span>{" "}
            challenge for maximum talent reach.
          </p>
          <p className="mt-4 text-gray-600 text-xs poppins-regular leading-4">
            Once you have sparked interest of students who feel that they have
            both, enjoyed and mastered their first challenge, it is more likely
            that they will want to know more about the everyday-tasks.
          </p>
          <p className="mt-4 text-gray-600 text-xs poppins-regular leading-4">
            To showcase the daily work routine at your company use{" "}
            <span className="poppins-semibold">Insights</span> in a second step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateJobSidebar;
