"use client";

import CompanyLogo from "@/components/companyLogo";
import CustomCheckbox from "@/components/customCheckbox";
import { ParagraphBody } from "@/components/formParagraph";
import PageHeadSection from "@/components/pageHeadSection";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { companyLoginFormSchema } from "@/schemas/companyLoginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeClosedIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CompanyLoginPage = () => {
  const [passwordVisible, setpasswordVisible] = useState(false);
  const [rememberFor30Days, setRememberFor30Days] = useState(false);

  const togglePasswordVisibilty = () => {
    setpasswordVisible((passwordVisible) => !passwordVisible);
  };

  const form = useForm<z.infer<typeof companyLoginFormSchema>>({
    resolver: zodResolver(companyLoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberFor30Days: false,
    },
  });

  const onSubmit = (values: z.infer<typeof companyLoginFormSchema>) => {
    values = {
      ...values,
      rememberFor30Days,
    };

    console.log(values);
  };

  return (
    <div className="h-[100vh] flex justify-center lg:justify-start">
      <div className="bg-white w-[57%] pt-10 flex flex-col px-4 lg:pr-[130px] lg:pl-20 xl:pr-40 xl:pl-36 2xl:pr-60">
        <CompanyLogo />
        <div className="mt-[30px]">
          <PageHeadSection
            titleSize={32}
            title="Log In"
            description="Welcome back! Please enter your details."
          />
        </div>
        <div className="mt-5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col h-full"
            >
              {" "}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-sm poppins-semibold leading-5">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={cn(
                          "mt-3 py-5 px-[14px] rounded-[8px] border focus:outline-none outline-none leading-6 poppins-medium bg-white",
                          field.value ? "border-gray-600" : "border-gray300"
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel className="text-sm poppins-semibold leading-5">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={passwordVisible ? "text" : "password"}
                          className={cn(
                            "mt-3 py-5 px-[14px] rounded-[8px] border focus:outline-none outline-none leading-6 poppins-medium bg-white",
                            field.value ? "border-gray-600" : "border-gray300"
                          )}
                          {...field}
                        />
                        {passwordVisible ? (
                          <Image
                            onClick={togglePasswordVisibilty}
                            src="/icons/eye-closed.svg"
                            width={20}
                            height={20}
                            alt=""
                            className="absolute top-[11px] right-[12px] cursor-pointer"
                          />
                        ) : (
                          <Image
                            onClick={togglePasswordVisibilty}
                            src="/icons/eye-open.svg"
                            width={20}
                            height={20}
                            alt=""
                            className="absolute top-[11px] right-[12px] cursor-pointer"
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-2 flex items-end justify-between">
                <CustomCheckbox
                  value={rememberFor30Days}
                  label={"Remember for 30 days"}
                  isChecked={rememberFor30Days}
                  setIsChecked={setRememberFor30Days}
                />
                <p className="text-primary600 poppins-semibold text-sm leading-5">
                  Forgot password
                </p>
              </div>
              <div className="mt-5">
                <Button
                  type="submit"
                  className="bg-primary600 hover:bg-primary700 w-full rounded-[6px]"
                >
                  Sign in
                </Button>
              </div>
              <div className="mt-6">
                <ParagraphBody className="text-center">
                  Dont have an account?{" "}
                  <span className="text-primary600 poppins-semibold text-sm leading-5">
                    Sign up
                  </span>
                </ParagraphBody>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="hidden relative w-[43%] h-full lg:block bg-[url('/icons/company-login-bg.png')] bg-no-repeat bg-cover">
        <p className="absolute bottom-8 right-8 text-white poppins-regular text-[27px] leading-[34.945px]">
          #nextgentalent
        </p>
      </div>
    </div>
  );
};

export default CompanyLoginPage;
