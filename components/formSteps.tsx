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
        Icon="/icons/Copy-Document-active.svg"
        current
        title="Job description"
        description="please provide your name and email"
      />
      <FormStep
        Icon="/icons/Copy-Document.svg"
        title="Basic information"
        description="Add details about job post"
      />
      <FormStep
        Icon="/icons/Filter.svg"
        title="Categorize job post"
        description="Date and documents"
      />
      <FormStep
        Icon="/icons/Document-Edit.svg"
        title="Application Process"
        description="Add filter options and requirements"
      />
      <FormStep
        Icon="/icons/Share.svg"
        title="Share"
        description="Share your job post."
        last
      />
    </div>
  );
};

export default FormSteps;
