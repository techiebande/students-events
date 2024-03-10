"use client";

import React from "react";
import JobType from "./jobType";
import useStore from "@/store/zuStore";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/form";
import { Input } from "./ui/input";
import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";

const CreateJobStep2Form = ({ form }: any) => {
  const jobLocation = useStore((state) => state.createJob.jobLocation);

  return (
    <div className="mt-10">
      <div className="flex flex-col items-center sm:items-start sm:flex-row gap-5 ">
        <JobType
          type="onsite"
          icon={
            jobLocation === "onsite"
              ? "/icons/on-site-icon.svg"
              : "/icons/onsite-inactive.svg"
          }
          selected={jobLocation === "onsite"}
        />
        <JobType
          type="remote"
          icon={
            jobLocation !== "remote"
              ? "/icons/remote-icon.svg"
              : "/icons/remote-active.svg"
          }
          selected={jobLocation === "remote"}
        />
        <JobType
          type="hybrid"
          icon={
            jobLocation === "hybrid"
              ? "/icons/hybrid-active.svg"
              : "/icons/hybrid-icon.svg"
          }
          selected={jobLocation === "hybrid"}
        />
      </div>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="mt-10 relative">
            <FormLabel className="text-sm poppins-semibold leading-5">
              Onsite location
              <span className="text-gray-800 block mt-1 text-sm font-normal leading-5">
                Here you can add additional skills.
              </span>
            </FormLabel>

            <FormControl>
              <Input
                className="mt-3 py-5 px-[36px] rounded-[8px] border border-gray300 focus:outline-none outline-none leading-6 poppins-medium bg-white"
                {...field}
              />
            </FormControl>
            {/* <FormMessage /> */}
            <MagnifyingGlassIcon className="absolute w-5 h-5 top-[60px] left-[10px]" />
          </FormItem>
        )}
      />

      <div className="mt-3">
        <Badge className="bg-white border border-gray-300 shadow-searchItems py-[10px] px-[14px] rounded-[180px] text-gray-950 text-sm poppins-semibold hover:bg-white">
          Paris, Greater Paris Metropolitan Area, France{" "}
          <Cross1Icon className="ml-2 w-5 h-5" />{" "}
        </Badge>
      </div>
    </div>
  );
};

export default CreateJobStep2Form;