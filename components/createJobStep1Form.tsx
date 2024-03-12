"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CustomEditor from "./customEditor";
import { jobPositionvalues } from "@/lib/jobPositionValues";
import { Input } from "./ui/input";
import CustomCheckbox from "./customCheckbox";
import CustomRadioInput from "./customRadioInput";

const CreateJobStep1Form = ({ form }: any) => {
  const [position, setPosition] = useState<string>("");
  const [isWorkStudyProgram, setIsWorkStudyProgram] = useState(false);

  const changePosition = (value: string) => setPosition(value);

  return (
    <div className="min-h-main-content-height">
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

      <div className="mt-5 sm:mt-10">
        <p className="text-sm poppins-semibold leading-5">Position type</p>
        <div className="mt-3 flex flex-col gap-4">
          {jobPositionvalues.map((value, i) => {
            return (
              <CustomRadioInput
                key={value + i}
                name="position"
                value={value}
                label={value}
                position={position}
                changePosition={changePosition}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-5 sm:mt-10">
        <CustomCheckbox
          label="Work-Study program"
          isChecked={isWorkStudyProgram}
          setIsChecked={setIsWorkStudyProgram}
        />
      </div>

      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="mt-5 sm:mt-10 mb-10">
            <FormLabel className="text-sm poppins-semibold leading-5">
              Job description
              <p className="text-gray-800 text-xs leading-4 poppins-regular mt-1 flex justify-center sm:text-sm sm:leading-5 ">
                Be sure to include specific skills you’re looking for, minimum
                requirements, and expected responsibilities.
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
    </div>
  );
};

export default CreateJobStep1Form;
