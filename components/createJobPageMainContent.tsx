//@ts-nocheck
"use client";

import React from "react";
import { Form } from "./ui/form";
import { useAppDispatch, useAppSelector } from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import localFont from "next/font/local";
import { z } from "zod";
import { setCreateJobState } from "@/store/jobCreateSlice";
import { cn } from "@/lib/utils";
import CreateJobStep1Form from "./createJobStep1Form";
import CreateJobStep2Form from "./createJobStep2Form";
import { Button } from "./ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import CreateJobSidebar from "./createJobSidebar";
import { createJobStepsData } from "@/lib/jobCreateStepsData";
import useStore from "@/store/zuStore";

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
    <div className="flex min-h-main-content-height">
      <div className="bg-seBg min-h-full w-full pt-5 px-5 pb-[84px] sm:pb-[130px] sm:px-[30px] md:px-10 lg:px-[60px] sm:pt-8 md:pt-[52px] lg:pt-10 md:w-[90vw]  xl:w-[77vw]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <h1
                className={cn(
                  "text-[20px] text-gray950 font-[400] leading-6 sm:text-2xl",
                  filmoType.className
                )}
              >
                {/* {createJobStepsData[step].title} */}
              </h1>
              <p className="text-gray-800 text-xs leading-4 poppins-regular mt-1 sm:text-sm sm:leading-5 ">
                {/* {createJobStepsData[step].description} */}
              </p>
            </div>

            {step === 1 ? <CreateJobStep1Form form={form} /> : null}
            {step === 2 ? <CreateJobStep2Form form={form} /> : null}

            <div className="mt-20 flex items-center justify-between sm:justify-end sm:gap-6 ">
              <Button
                onClick={prevStep}
                className="bg-white hover:bg-white border border-gray-300 text-gray-600"
              >
                Back
              </Button>
              <Button
                onClick={nextStep}
                className="inline-flex gap-3 bg-primary600 hover:bg-primary600 py-3 px-6"
              >
                Continue <ChevronRightIcon />
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
