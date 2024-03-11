import React, { useState } from "react";
import JobType from "./jobType";
import useStore from "@/store/zuStore";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { employmentDurationValues } from "@/lib/employmentDurationValues";
import CustomRadioInput from "./customRadioInput";
import { durationValues } from "@/lib/durationValues";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "./ui/calendar";
import CustomCheckbox from "./customCheckbox";

const TimeRequirementsForm = ({ form }: any) => {
  const [useAsDefault, setUseAsDefault] = useState();
  const jobTimeRequirements = useStore(
    (state) => state.createJob.jobTimeRequirements
  );

  const changeJobTimeRequirements = useStore(
    (state) => state.changeJobTimeRequirements
  );

  const employmentDuration = useStore(
    (state) => state.createJob.employmentDuration
  );

  const changeEmploymentDuration = useStore(
    (state) => state.changeEmploymentDuration
  );

  const duration = useStore((state) => state.createJob.duration);

  const changeDuration = useStore((state) => state.changeDuration);

  return (
    <div className="h-full mt-10 flex flex-col">
      <div className="grid grid-cols-2 gap-5">
        <JobType
          change={changeJobTimeRequirements}
          className="col-span-1"
          type="full time"
          icon={
            jobTimeRequirements === "full time"
              ? "/icons/Clock-active.svg"
              : "/icons/Clock.svg"
          }
          selected={jobTimeRequirements === "full time"}
          title="Full time"
          description="Employee works a combination of onsite and remote."
        />
        <JobType
          change={changeJobTimeRequirements}
          className="col-span-1"
          type="part time"
          icon={
            jobTimeRequirements === "part time"
              ? "/icons/Watch-active.svg"
              : "/icons/Watch.svg"
          }
          selected={jobTimeRequirements === "part time"}
          title="Part time"
          description="Less than 30 hours per week"
        />
      </div>
      {jobTimeRequirements === "part time" ? (
        <div className="mt-10">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm poppins-semibold leading-5">
                  Hours (optional)
                </FormLabel>
                <div className="flex">
                  <FormControl className="">
                    <Input
                      className="mt-2 sm:mt-3 mr-2 md:mr-8 py-5 px-[14px] rounded-[8px] border border-gray300 focus:outline-none outline-none leading-6 poppins-medium bg-white"
                      {...field}
                    />
                  </FormControl>
                  <p className="text-nowrap self-center">hours per</p>

                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="mt-2 sm:mt-3 ml-2 md:ml-8 py-5 px-[14px] rounded-[8px] border border-gray300 focus:outline-none outline-none leading-6 poppins-medium bg-white">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="week">Week</SelectItem>
                      <SelectItem value="day">Day</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* <FormMessage /> */}
              </FormItem>
            )}
          />
        </div>
      ) : null}

      <div className="mt-6">
        <p className="text-sm poppins-semibold leading-5">
          Employment Duration
        </p>
        <div className="mt-3 flex flex-col gap-4">
          {employmentDurationValues.map((value, i) => {
            return (
              <CustomRadioInput
                key={value + i}
                name="employmentDuration"
                value={value}
                label={
                  value === "Permanent"
                    ? "Permanent (equal to or longer than 12 month contract)"
                    : value
                }
                position={employmentDuration}
                changePosition={changeEmploymentDuration}
              />
            );
          })}
        </div>
      </div>

      {employmentDuration === "Temporary" ? (
        <div>
          <div className="mt-6">
            <p className="text-sm poppins-semibold leading-5">Duration</p>
            <div className="mt-3 flex gap-6">
              {durationValues.map((value, i) => {
                return (
                  <CustomRadioInput
                    key={value + i}
                    name="duration"
                    value={value}
                    label={value}
                    position={duration}
                    changePosition={changeDuration}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-6 mb-6">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Estimated start date</FormLabel>
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
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Estimated start date</FormLabel>
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
          </div>
        </div>
      ) : null}

      <div className="mt-auto mb-3">
        <CustomCheckbox
          label="Set this as default values for future job posts."
          isChecked={useAsDefault}
          setIsChecked={setUseAsDefault}
        />
      </div>
    </div>
  );
};

export default TimeRequirementsForm;
