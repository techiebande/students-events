"use client";

import React from "react";
import CreateJobPageHeader from "@/components/createJobPageHeader";
import CreateJobPageMainContent from "@/components/createJobPageMainContent";

const CreateJobPostPage = () => {
  return (
    <div className="flex flex-col poppins-regular">
      <CreateJobPageHeader />
      <CreateJobPageMainContent />
    </div>
  );
};

export default CreateJobPostPage;
