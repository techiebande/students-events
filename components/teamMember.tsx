import React, { useState } from "react";
import { z } from "zod";
import { teamMembers } from "./hiringTeamForm";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ParagraphBody, ParagraphHead } from "./formParagraph";
import Separator from "./Separator";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import CustomCheckbox from "./customCheckbox";

const Field = ({ content, title }: { title: string; content: string }) => {
  return (
    <div className="flex flex-col gap-[4px]">
      <ParagraphHead className="poppins-semibold text-sm text-[#252733]">
        {title}
      </ParagraphHead>
      <ParagraphBody className="text-xs text-[#667085] poppins-regular">
        {content}
      </ParagraphBody>
    </div>
  );
};

const TeamMember = ({ teamMember, total, index }: any) => {
  const [addToRecruitingTeamMembers, setAddToRecruitingTeamMembers] =
    useState(false);

  return (
    <>
      <div className="flex items-center justify-between mt-5 mb-5 px-5 gap-14">
        <div className="flex items-end gap-4">
          <Avatar className="border border-[#fff]">
            <AvatarImage className="w-[100px]" src={teamMember.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Field title={teamMember.name} content={teamMember.email} />
        </div>
        <Field title={teamMember.title} content={teamMember.company} />
        <Field title={teamMember.office} content={teamMember.country} />
        <div>
          <Badge
            className={cn(
              teamMember.registerStatus === "Registered"
                ? "bg-success100 border-success200 hover:bg-success100 text-success700"
                : "bg-[#FFF2F1] border-error400 text-error400 hover:bg-[#fff2f1]",
              "py-[5px] pr-[8px] pl-[6px] rounded-[16px] flex items-center gap-1 min-w-[90px]"
            )}
          >
            <div
              className={cn(
                teamMember.registerStatus === "Registered"
                  ? "bg-success500"
                  : "bg-error400",
                "w-2 h-2 rounded-full"
              )}
            ></div>
            {teamMember.registerStatus}
          </Badge>
        </div>
        <CustomCheckbox
          label=""
          isChecked={addToRecruitingTeamMembers}
          setIsChecked={setAddToRecruitingTeamMembers}
        />
      </div>
      {index !== total - 1 ? <Separator /> : ""}
    </>
  );
};

export default TeamMember;
