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

const JobLocationForm = ({ form }: any) => {
  const jobLocation = useStore((state) => state.createJob.jobLocation);

  const changeJobLocation = useStore((state) => state.changeJobLocation);

  return (
    <div className="mt-10">
      <div className="grid grid-cols-3 sm:flex-row gap-5 sm:flex-wrap">
        <JobType
          change={changeJobLocation}
          className="col-span-1"
          type="onsite"
          icon={
            jobLocation === "onsite"
              ? "/icons/on-site-icon.svg"
              : "/icons/onsite-inactive.svg"
          }
          selected={jobLocation === "onsite"}
          title="Onsite"
          description="Employee works in person from a specific location."
        />
        <JobType
          change={changeJobLocation}
          className="col-span-1"
          type="remote"
          icon={
            jobLocation !== "remote"
              ? "/icons/remote-icon.svg"
              : "/icons/remote-active.svg"
          }
          selected={jobLocation === "remote"}
          title="Remote"
          description="Employee works from 
          home."
        />
        <JobType
          change={changeJobLocation}
          className="col-span-1"
          type="hybrid"
          icon={
            jobLocation === "hybrid"
              ? "/icons/hybrid-active.svg"
              : "/icons/hybrid-icon.svg"
          }
          selected={jobLocation === "hybrid"}
          title="Hybrid"
          description="Employee works a combination of onsite and remote."
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

      <div className="mt-3 mb-[100px]">
        <Badge className="bg-white border border-gray-300 shadow-searchItems py-[10px] px-[14px] rounded-[180px] text-gray-950 text-sm poppins-semibold hover:bg-white">
          Paris, Greater Paris Metropolitan Area, France{" "}
          <Cross1Icon className="ml-2 w-5 h-5" />{" "}
        </Badge>
      </div>
    </div>
  );
};

export default JobLocationForm;
