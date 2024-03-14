import CompanyLogo from "@/components/companyLogo";
import PageHeadSection from "@/components/pageHeadSection";
import Image from "next/image";
import React from "react";

const CompanyLoginPage = () => {
  return (
    <div className="h-[100vh] flex justify-center lg:justify-start">
      <div className="bg-white w-1/2 pt-10 flex flex-col  lg:pl-20">
        <CompanyLogo />
        <div className="mt-[30px]">
          <PageHeadSection
            titleSize={32}
            title="Log In"
            description="Welcome back! Please enter your details."
          />
        </div>
      </div>
      <div className="hidden w-1/2 h-full lg:block bg-[url('/icons/Section.png')] bg-no-repeat bg-cover"></div>
    </div>
  );
};

export default CompanyLoginPage;
