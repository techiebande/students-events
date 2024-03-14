import React, { useEffect, useState } from "react";
import Paper from "./paper";
import SectionHeader from "./sectionHeader";
import FormParagraph, { ParagraphBody, ParagraphHead } from "./formParagraph";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import CustomCheckbox from "./customCheckbox";
import { Button } from "./ui/button";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import TeamMember from "./teamMember";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const teamMembers = [
  {
    name: "Jennifer Cooper",
    email: "siam.andrews@bcg.com",
    title: "Owner",
    company: "Boston Consulting Group (BCG)",
    office: "London Office",
    country: "United Kingdom",
    registerStatus: "Registered",
    image: "/icons/avatar.png",
  },
  {
    name: "Jennifer Cooper",
    email: "siam.andrews@bcg.com",
    title: "Owner",
    company: "Boston Consulting Group (BCG)",
    office: "London Office",
    country: "United Kingdom",
    registerStatus: "Registered",
    image: "/icons/avatar.png",
  },
  {
    name: "Jennifer Cooper",
    email: "siam.andrews@bcg.com",
    title: "Owner",
    company: "Boston Consulting Group (BCG)",
    office: "London Office",
    country: "United Kingdom",
    registerStatus: "Pending",
    image: "/icons/avatar.png",
  },
];

const HiringTeamForm = ({ form }: any) => {
  const [emailOnAppClose, setEmailOnAppClose] = useState(true);
  const [monthlySummaryEmail, setMonthlySummaryEmail] = useState(true);
  const [emailOnApply, setEmailOnApply] = useState(false);
  const [featureAsAvailableCandidate, setFeatureAsAvailableCandidate] =
    useState(false);
  const [addTeamMembers, setAddTeamMembers] = useState(false);
  const [useAsDefault, setUseAsDefault] = useState();

  const [searchedTeamMembers, setSearchedTeamMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const data: any = teamMembers.filter((member) => {
      return member.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });

    setSearchedTeamMembers(data);
  }, [searchTerm]);

  return (
    <>
      <Paper className="mt-10">
        <SectionHeader>Job owner</SectionHeader>
        <FormParagraph className="mt-6">
          <div className="flex items-end gap-4">
            <Avatar className="border border-[#fff]">
              <AvatarImage className="w-[100px]" src="icons/avatar.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-[6px]">
              <ParagraphHead className="">Jennifer Cooper</ParagraphHead>
              <ParagraphBody className="">University recruiter</ParagraphBody>
            </div>
          </div>
        </FormParagraph>
        <FormParagraph className="mt-6">
          <ParagraphHead className="">Messaging availability</ParagraphHead>
          <ParagraphBody className="mt-3">
            Give candidates the option to message you through the job post.
            Messages from candidates will not count agains your message limit.
          </ParagraphBody>
        </FormParagraph>
        <FormParagraph className="mt-6">
          <CustomCheckbox
            label="Feature me as avaliable for candidate messages"
            isChecked={featureAsAvailableCandidate}
            setIsChecked={setFeatureAsAvailableCandidate}
          />
        </FormParagraph>
        <FormParagraph className="mt-10 ">
          <ParagraphHead className="">Email Settings</ParagraphHead>
          <div className="mt-6 flex flex-col gap-4">
            <CustomCheckbox
              label="Send summary email once application period closes"
              isChecked={emailOnAppClose}
              setIsChecked={setEmailOnAppClose}
            />
            <CustomCheckbox
              label="Send monthly summary email"
              isChecked={monthlySummaryEmail}
              setIsChecked={setMonthlySummaryEmail}
            />
            <CustomCheckbox
              label="Send email when a candidate applies"
              isChecked={emailOnApply}
              setIsChecked={setEmailOnApply}
            />
          </div>
        </FormParagraph>
      </Paper>
      <Paper className="mt-10">
        <SectionHeader>
          Add your team members to the party (or rather to this job post)
        </SectionHeader>
        <Button
          disabled={addTeamMembers}
          onClick={() => setAddTeamMembers(true)}
          variant="ghost"
          className="mt-6 inline-flex p-0 gap-3 hover:bg-transparent text-primary600 poppins-semibold text-sm hover:text-primary600"
        >
          <PlusIcon /> Add team members.
        </Button>
        {addTeamMembers ? (
          <FormParagraph className="mt-10">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => {
                field = {
                  ...field,
                  onChange: (e) => {
                    setSearchTerm(e.target.value);
                  },
                  value: searchTerm,
                };
                return (
                  <FormItem className=" relative">
                    <FormLabel className="text-sm poppins-semibold leading-5 flex justify-between">
                      Recruiting Team members (optional)
                      <span className="text-sm leading-5 poppins-medium text-primary600 cursor-pointer">
                        Invite new teammate (copy invitite link)
                      </span>
                    </FormLabel>

                    <FormControl>
                      <div className="relative">
                        <Input
                          className={cn(
                            searchTerm.length > 0
                              ? "border-gray-600"
                              : "border-gray300",
                            "mt-3 py-5 px-[12px] rounded-[8px] border focus:outline-none outline-none leading-6 poppins-medium bg-white"
                          )}
                          {...field}
                        />
                        <MagnifyingGlassIcon className="absolute w-5 h-5 top-[11px] right-[10px]" />
                      </div>
                    </FormControl>

                    {/* <FormMessage /> */}
                  </FormItem>
                );
              }}
            />
            <div className="overflow-x-auto">
              {searchedTeamMembers.length < 1 ? (
                <div className="mt-5 flex flex-col items-center justify-center pb-[23px]">
                  <Image
                    src="/icons/EmptyState.svg"
                    alt=""
                    width={225}
                    height={180}
                  />
                  <p className="mt-[50px] text-primary400 text-[20px] poppins-medium text-center">
                    No Results yet
                  </p>
                  <ParagraphBody className="mt-3 cursor-pointer text-gray-600">
                    Invite your colleagues. Its for sure even more fun with you
                    team here.
                  </ParagraphBody>
                </div>
              ) : null}
              {searchedTeamMembers.length > 0 && searchTerm.length > 0
                ? searchedTeamMembers.map((member, i, teamMembers) => {
                    return (
                      <TeamMember
                        key={i}
                        teamMember={member}
                        total={teamMembers.length}
                        index={i}
                      />
                    );
                  })
                : null}
            </div>
          </FormParagraph>
        ) : null}
      </Paper>
      <FormParagraph className="mt-6">
        <div className="mt-10">
          <CustomCheckbox
            label="Set this as default values for future job posts."
            isChecked={useAsDefault}
            setIsChecked={setUseAsDefault}
          />
        </div>
      </FormParagraph>
    </>
  );
};

export default HiringTeamForm;
