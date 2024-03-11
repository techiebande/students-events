import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CustomEditor from "./customEditor";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { jobPositionvalues } from "@/lib/jobPositionValues";
import { Input } from "./ui/input";
import CustomCheckbox from "./customCheckbox";

const CreateJobStep1Form = ({ form }: any) => {
  return (
    <>
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
                        <RadioGroupItem value={value.toLocaleLowerCase()} />
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

      <CustomCheckbox />

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
    </>
  );
};

export default CreateJobStep1Form;
