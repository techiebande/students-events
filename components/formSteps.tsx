import React from "react";
import FormStep from "./formStep";
import useStore from "@/store/zuStore";

const FormSteps = () => {
  const step = useStore((state) => state.createJob.step);

  return (
    <div className="flex flex-col gap-6 w-full">
      <FormStep
        Icon={"/icons/Copy-Document-active.svg"}
        current
        title="Job description"
        description="please provide your name and email"
        first
      />
      <FormStep
        Icon={step > 1 ? "/icons/Clock-active.svg" : "/icons/Clock.svg"}
        title="Time Requirements"
        description="Specify anticipated workload"
        current={step > 1}
      />
      <FormStep
        Icon={step > 2 ? "/icons/Location-active.svg" : "/icons/Location.svg"}
        title="Job Location"
        description="Specifiy job location"
        current={step > 2}
      />
      <FormStep
        Icon={step > 3 ? "/icons/Filter-active.svg" : "/icons/Filter.svg"}
        title="Categorize job post"
        description="Add filters and requirements"
        current={step > 3}
      />
      <FormStep
        Icon={
          step > 4
            ? "/icons/Document-Edit-active.svg"
            : "/icons/Document-Edit.svg"
        }
        title="Application Process"
        description="Dates and documents"
        current={step > 4}
      />
    </div>
  );
};

export default FormSteps;
