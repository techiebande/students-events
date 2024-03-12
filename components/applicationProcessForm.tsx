import React from "react";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "./ui/calendar";
import JobType from "./jobType";
import useStore from "@/store/zuStore";
import Separator from "./Separator";
import { varyanceRequiredDocumentsValues } from "@/lib/varyanceRequiredDocumentsValues";
import CustomRadioInput from "./customRadioInput";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const ApplicationProcessForm = ({ form }: any) => {
  const preferedJobApplicationSubmissionMethod = useStore(
    (state) => state.createJob.preferedJobApplicationSubmissionMethod
  );

  const changePreferedJobApplicationSubmissionMethod = useStore(
    (state) => state.changePreferedJobApplicationSubmissionMethod
  );

  const requiredApplicationDocuments = useStore(
    (state) => state.createJob.requiredApplicationDocuments
  );

  const changeRequiredApplicationDocuments = useStore(
    (state) => state.changeRequiredApplicationDocuments
  );

  return (
    <div className="mt-10 flex flex-col min-h-main-content-height">
      <FormField
        control={form.control}
        name="openDate"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Application open date</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      " text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* <FormMessage /> */}
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="closeDate"
        render={({ field }) => (
          <FormItem className="flex flex-col mt-10">
            <FormLabel>Application close date</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      " text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* <FormMessage /> */}
          </FormItem>
        )}
      />

      <div className="mt-10">
        <p className="text-sm poppins-semibold leading-5">
          Preferred method for candidates to submit their application?
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-3">
        <JobType
          change={changePreferedJobApplicationSubmissionMethod}
          className="col-span-1"
          type="varyance"
          icon={"/icons/Logo.svg"}
          selected={preferedJobApplicationSubmissionMethod === "varyance"}
          title="On varyance.io"
          description="View applications on talent pool page."
        />
        <JobType
          change={changePreferedJobApplicationSubmissionMethod}
          className="col-span-1"
          type="seperate_website"
          icon={
            preferedJobApplicationSubmissionMethod === "seperate_website"
              ? "/icons/External-link-active.svg"
              : "/icons/External-link.svg"
          }
          selected={
            preferedJobApplicationSubmissionMethod === "seperate_website"
          }
          title="On a separate website"
          description="Enter a website or Applicant Tracking System URL"
        />
      </div>

      {preferedJobApplicationSubmissionMethod === "varyance" ? (
        <div className="mt-10">
          <div className="mt-6 mb-3">
            <p className="text-sm poppins-semibold leading-5">
              Required documents
            </p>
            <p className="text-sm poppins-regular leading-5">
              The fewer documents you require, the more likely candidates are to
              apply.
            </p>
            <div className="mt-3 flex flex-col gap-4">
              {varyanceRequiredDocumentsValues.map((value, i) => {
                return (
                  <CustomRadioInput
                    key={value + i}
                    name="requiredApplicationDocuments"
                    value={value}
                    label={value}
                    position={requiredApplicationDocuments}
                    changePosition={changeRequiredApplicationDocuments}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      {preferedJobApplicationSubmissionMethod === "seperate_website" ? (
        <>
          <FormField
            control={form.control}
            name="externalUrl"
            render={({ field }) => (
              <FormItem className="mt-10">
                <FormLabel className="text-sm poppins-semibold leading-5">
                  External URL
                </FormLabel>
                <FormControl>
                  <Input
                    className="mt-3 py-5 px-[14px] rounded-[8px] border border-gray300 focus:outline-none outline-none leading-6 poppins-medium bg-white"
                    {...field}
                    placeholder="hhtps://www.website.com"
                  />
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instructions"
            render={({ field }) => (
              <FormItem className="mb-10 mt-10">
                <FormLabel className="text-sm poppins-semibold leading-5">
                  Instructions for applicants
                </FormLabel>
                <FormControl>
                  <Textarea className="mt-10 bg-white" rows={5} {...field} />
                </FormControl>

                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
        </>
      ) : null}

      <Separator />
    </div>
  );
};

export default ApplicationProcessForm;
