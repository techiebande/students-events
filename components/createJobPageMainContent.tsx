//@ts-nocheck
"use client";

import React from "react";
import { Form } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import localFont from "next/font/local";
import { z } from "zod";
import { cn } from "@/lib/utils";
import CreateJobStep1Form from "./createJobStep1Form";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import CreateJobSidebar from "./createJobSidebar";
import { createJobStepsData } from "@/lib/jobCreateStepsData";
import useStore from "@/store/zuStore";
import Separator from "./Separator";
import TimeRequirementsForm from "./timeRequirementsForm";
import JobLocationForm from "./jobLocationform";
import ApplicationProcessForm from "./applicationProcessForm";
import CategorizeJobForm from "./categorizeJobForm";
import ReviewForm from "./reviewForm";
import HiringTeamForm from "./hiringTeamForm";
import { useRouter } from "next/navigation";

const filmoType = localFont({
  src: "../public/fonts/filmotype.woff2",
  display: "swap",
  variable: "--filmotype",
});

const formSchema = z.object({
  title: z.string(),
  position: z.string(),
  description: z.string(),
});

const CreateJobPageMainContent = () => {
  const router = useRouter();
  const nextStep = useStore((state) => state.nextStep);
  const prevStep = useStore((state) => state.prevStep);

  const step = useStore((state) => state.createJob.step);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      position: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
  }
  return (
    <div id="top" className={cn("flex min-h-main-content-height")}>
      <div
        className={cn(
          step === 6
            ? "w-full"
            : "w-full md:w-[90vw] xl:w-2xlSidebar lg:w-lgSidebar",
          "bg-seBg min-h-full pt-5 px-5 pb-[84px] sm:pb-[130px] sm:px-[30px] md:px-10 lg:px-[60px] sm:pt-8 md:pt-[52px] lg:pt-10"
        )}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col h-full"
          >
            <div>
              <h1
                className={cn(
                  "text-[20px] text-gray950 font-[400] leading-6 sm:text-2xl",
                  filmoType.className
                )}
              >
                {createJobStepsData[step].title}
              </h1>
              <p className="text-gray-800 text-xs leading-4 poppins-regular mt-1 sm:text-sm sm:leading-5 ">
                {createJobStepsData[step].description}
              </p>
            </div>

            {step === 1 ? <CreateJobStep1Form form={form} /> : null}
            {step === 2 ? <TimeRequirementsForm form={form} /> : null}
            {step === 3 ? <JobLocationForm form={form} /> : null}
            {step === 4 ? <CategorizeJobForm form={form} /> : null}
            {step === 5 ? <ApplicationProcessForm form={form} /> : null}
            {step === 6 ? <ReviewForm /> : null}
            {step === 7 ? <HiringTeamForm form={form} /> : null}

            <Separator />

            <div className="flex items-start justify-between flex-col sm:flex-row sm:items-center gap-6  sm:justify-end sm:gap-6 mt-5">
              {step !== 1 ? (
                <Button
                  onClick={() => {
                    prevStep();
                    router.push("#top");
                  }}
                  disabled={step < 2}
                  className="bg-white hover:bg-white hover:border-gray-300 hover:shadow-stats border border-gray-300 shadow-none text-gray-600 py-[22px] px-[27.25px] leading-5 disabled:opacity-[0.3]"
                >
                  {step === 7 ? "Back to dashboard" : "Back"}
                </Button>
              ) : null}
              <Button
                onClick={() => {
                  nextStep();
                  router.push("#top");
                }}
                className="gap-3 bg-primary600 hover:bg-primary700 py-[22px] px-[27.25px] leading-5 disabled:bg-primary300 disabled:opacity-[0.25]"
              >
                {step === 6 ? (
                  "Publish Job"
                ) : step === 7 ? (
                  "Post another job"
                ) : (
                  <>
                    Continue <ChevronRightIcon />
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <CreateJobSidebar />
    </div>
  );
};

export default CreateJobPageMainContent;
