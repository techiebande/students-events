import React from "react";
import FormStep from "./formStep";
import {
  ClipboardIcon,
  CopyIcon,
  MixerHorizontalIcon,
  Pencil2Icon,
  Share1Icon,
} from "@radix-ui/react-icons";

const FormSteps = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <FormStep
        Icon={CopyIcon}
        current
        title="Job description"
        description="please provide your name and email"
      />
      <FormStep
        Icon={ClipboardIcon}
        title="Basic information"
        description="Add details about job post"
      />
      <FormStep
        Icon={MixerHorizontalIcon}
        title="Categorize job post"
        description="Add filter options and requirements"
      />
      <FormStep
        Icon={Pencil2Icon}
        title="Application Process"
        description="Add filter options and requirements"
      />
      <FormStep
        Icon={Share1Icon}
        title="Share"
        description="Share your job post."
        last
      />
    </div>
  );
};

export default FormSteps;
