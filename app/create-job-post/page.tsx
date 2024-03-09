"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChevronRightIcon, Cross1Icon } from "@radix-ui/react-icons";
import localFont from "next/font/local";
import InternshipCard from "@/components/internshipCard";
import Image from "next/image";
import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobPositionvalues } from "../../lib/jobPositionValues";
import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";
import FormSteps from "@/components/formSteps";

const CustomEditor = dynamic(
  () => {
    return import("../../components/customEditor");
  },
  { ssr: false }
);

const filmoType = localFont({
  src: "../../public/fonts/filmotype.woff2",
  display: "swap",
  variable: "--filmotype",
});

const formSchema = z.object({
  title: z.string(),
  position: z.string(),
  description: z.string(),
});

const CreateJobPostPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      position: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex flex-col poppins-regular">
      <div className="flex justify-between items-center py-2 px-[15px] sm:px-[26px] md:px-8 lg:px-[60px]">
        <div className="flex gap-1 items-center sm:gap-5">
          <Image
            src="/icons/logo.png"
            alt="logo"
            width="36"
            height="36"
            className="mt-2"
          />

          <p className=" text-gray950 text-sm sm:text-base font-bold leading-5 sm:leading-6">
            Create new job post
          </p>
        </div>
        <div className="flex gap-2 items-center sm:gap-10">
          <Button
            variant="ghost"
            className="text-xs leading-4 text-gray950 poppins-semibold px-0 sm:leading-5 sm:text-sm"
          >
            save as draft
          </Button>
          <Cross1Icon className="w-5 h-5" />
        </div>
      </div>
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
                  Job Description
                </h1>
                <p className="text-gray-800 text-xs leading-4 poppins-regular mt-1 sm:text-sm sm:leading-5 ">
                  what is this job about
                </p>
              </div>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="mt-10">
                    <FormLabel className="text-sm poppins-semibold leading-5">
                      Job title
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="mt-3 py-5 px-[14px] rounded-[8px] border border-gray300 focus:outline-none outline-none leading-6 poppins-medium bg-white"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem className="mt-5 sm:mt-10">
                    <FormLabel className="text-sm poppins-semibold leading-5">
                      Position type
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-4"
                      >
                        {jobPositionvalues.map((value, i) => {
                          return (
                            <FormItem
                              key={i}
                              className="flex items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <RadioGroupItem
                                  value={value.toLocaleLowerCase()}
                                />
                              </FormControl>
                              <FormLabel className="font-normal text-gray-800 text-sm leading-5">
                                {value}
                              </FormLabel>
                            </FormItem>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>

                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="mt-5 sm:mt-10">
                    <FormLabel className="text-sm poppins-semibold leading-5">
                      Job description
                      <p className="text-gray-800 text-xs leading-4 poppins-regular mt-1 flex justify-center sm:text-sm sm:leading-5 ">
                        Be sure to include specific skills you’re looking for,
                        minimum requirements, and expected responsibilities.
                        <span className="text-primary600 text-sm poppins-semibold hidden ml-auto sm:inline-block ">
                          Copy description from exsisting job
                        </span>
                      </p>
                    </FormLabel>

                    <FormControl>
                      <CustomEditor />
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              <Separator className="mt-14 bg-gray-200 sm:mt-10" />

              <div className="mt-5 flex items-center justify-between sm:justify-end sm:gap-6 ">
                <Button className="bg-white hover:bg-white border border-gray-300 text-gray-600">
                  Back
                </Button>
                <Button className="inline-flex gap-3 bg-primary600 hover:bg-primary600 py-3 px-6">
                  Continue <ChevronRightIcon />
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="hidden min-h-full bg-gradient-to-b from-[#F8F1F3] to-[#FFF6F8] pt-10 md:flex flex-col md:w-[10vw] xl:pl-6 xl:w-[23vw]">
          <p className="w-full sm:text-center xl:text-left text-gray-400 text-xs poppins-semibold tracking-[0.507px] leading-4">
            NEXT STEPS
          </p>
          <div className="pt-5">
            <FormSteps />
          </div>
          <div className="mt-[44px] hidden xl:block">
            <p className="w-full text-gray-400 text-xs poppins-semibold tracking-[0.507px] leading-4">
              PREVIEW
            </p>
            <div className="mt-5 text-primary500 text-xs poppins-semibold leading-4">
              <InternshipCard />
            </div>
            <div className="mt-10">
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
                Once you have sparked interest of students who feel that they
                have both, enjoyed and mastered their first challenge, it is
                more likely that they will want to know more about the
                everyday-tasks.
              </p>
              <p className="mt-4 text-gray-600 text-xs poppins-regular leading-4">
                To showcase the daily work routine at your company use{" "}
                <span className="poppins-semibold">Insights</span> in a second
                step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJobPostPage;
