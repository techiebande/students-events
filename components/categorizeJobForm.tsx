import { categoriesData } from "@/lib/categoriesData";
import React, { useState } from "react";
import CategoryBadge from "./categoryBadge";
import { studyLevelData } from "@/lib/studyLevelData";
import StudyLevelBadge from "./studyLevelBadge";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import CustomCheckbox from "./customCheckbox";
import { cn } from "@/lib/utils";

const CategorizeJobForm = ({ form }: any) => {
  const [useAsDefault, setUseAsDefault] = useState();
  return (
    <div className="mt-10 flex flex-col">
      <div>
        <p className="text-sm text-gray-950 poppins-semibold leading-5">
          Student Interests
        </p>
        <p className="text-sm poppins-regular text-gray-800 leading-5">
          Categorize challenge based on student interests. Add a maximum of 3
          interest fields.
        </p>
        <div className="mt-3 flex flex-wrap gap-[6px] gap-y-4">
          {categoriesData.map((category, i) => (
            <CategoryBadge
              key={`${category.name}${i}`}
              icon={category.icon}
              text={category.name}
            />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-sm text-gray-950 poppins-semibold leading-5">
          Study Level
        </p>
        <div className="mt-3 flex gap-3 flex-wrap gap-y-3">
          {studyLevelData.map((studyLevel, i) => (
            <StudyLevelBadge key={i + studyLevel} text={studyLevel} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-sm text-gray-950 poppins-semibold leading-5">
          Change language requirements (optional)
        </p>
        <p className="text-sm poppins-regular text-gray-800 leading-5 mt-3">
          To ensure maximum exposure of each job post, the default language for
          all job posts is English. Please select the language primarily needed
          for this job if other than English.
        </p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-3 bg-white mb-3">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className={cn(
                      field.value ? "border-gray-600" : "border-gray300",
                      "border"
                    )}
                  >
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                  <SelectItem value="Dutch">Dutch</SelectItem>
                </SelectContent>
              </Select>

              {/* <FormMessage /> */}
            </FormItem>
          )}
        />
      </div>
      <div className="mt-10">
        <CustomCheckbox
          label="Set this as default values for future job posts."
          isChecked={useAsDefault}
          setIsChecked={setUseAsDefault}
        />
      </div>
    </div>
  );
};

export default CategorizeJobForm;
