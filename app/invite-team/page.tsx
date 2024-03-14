//@ts-nocheck

"use client";
import DashboardMain from "@/components/DashboardMain";
import DashboardHead from "@/components/dashboardHead";
import FormParagraph, { ParagraphBody } from "@/components/formParagraph";
import LeftSidebar from "@/components/leftSidebar";
import NotificationBar from "@/components/notificationBar";
import Paper from "@/components/paper";
import SectionHeader from "@/components/sectionHeader";
import TeamMember from "@/components/teamMember";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Cross1Icon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { teamMembers } from "@/components/hiringTeamForm";

const formSchema = z.object({
  title: z.string(),
  position: z.string(),
  description: z.string(),
});

const InviteTeampage = () => {
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
    const data: any = teamMembers.filter((member: any) => {
      return member.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
    });

    setSearchedTeamMembers(data);
  }, [searchTerm]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      position: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
  }

  return (
    <div className="flex min-h-[100vh] relative">
      <LeftSidebar />
      <DashboardMain className="p-4 sm:p-[30px]">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between">
          <DashboardHead
            className="mt-20 sm:mt-0"
            title="Team"
            description="Create events for students around the globe and attract talent."
          />
          <NotificationBar className="absolute right-[30px] top-[30px] sm:static" />
        </div>
        <Paper className="mt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
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
                                placeholder="Choose team member"
                              />
                              <MagnifyingGlassIcon className="absolute w-5 h-5 top-[11px] right-[10px]" />
                            </div>
                          </FormControl>

                          {/* <FormMessage /> */}
                        </FormItem>
                      );
                    }}
                  />
                  <div className="mt-6 flex flex-col gap-y-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge className="flex items-center gap-2 py-[10px] px-[16px] rounded-[8px] bg-white border border-gray-300 shadow-sm hover:bg-white text-gray-700 text-sm poppins-semibold leading-5">
                        All time <Cross1Icon />
                      </Badge>
                      <Badge className="flex items-center gap-2 py-[10px] px-[16px] rounded-[8px] bg-white border border-gray-300 shadow-sm hover:bg-white text-gray-700 text-sm poppins-semibold leading-5">
                        US, AU +4 <Cross1Icon />
                      </Badge>
                      <Badge className="flex items-center gap-2 py-[10px] px-[16px] rounded-[8px] bg-white border border-gray-300 shadow-sm hover:bg-white text-gray-700 text-sm poppins-semibold leading-5">
                        <Image
                          alt=""
                          src="/icons/filter-lines.svg"
                          width={20}
                          height={20}
                        />
                        More filters
                      </Badge>
                    </div>
                    <div>
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
                              <FormControl>
                                <div className="relative">
                                  <Input
                                    className={cn(
                                      searchTerm.length > 0
                                        ? "border-gray-600"
                                        : "border-gray300",
                                      "mt-3 py-5 w-full lg:w-[320px] px-[12px] pl-8 rounded-[8px] border focus:outline-none outline-none leading-6 poppins-medium bg-white"
                                    )}
                                    {...field}
                                    placeholder="Search"
                                  />
                                  <MagnifyingGlassIcon className="absolute text-gray-500 w-5 h-5 top-[11px] left-[10px]" />
                                </div>
                              </FormControl>

                              {/* <FormMessage /> */}
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  </div>

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
                          Invite your colleagues. Its for sure even more fun
                          with you team here.
                        </ParagraphBody>
                      </div>
                    ) : null}
                    {searchedTeamMembers.length > 0 && searchTerm.length > 0 ? (
                      <>
                        <Table className="mt-6 ">
                          <TableHeader className="bg-gray-200 text-gray-600 poppins-medium rounded-tl-[5px] rounded-tr-[5px]">
                            <TableRow>
                              <TableHead>User</TableHead>
                              <TableHead>Role</TableHead>
                              <TableHead>Location</TableHead>
                              <TableHead>Department</TableHead>
                              <TableHead>Status</TableHead>
                              <TableHead>Action</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {searchedTeamMembers.map((member, i) => (
                              <TeamMember
                                key={i}
                                teamMember={member}
                                total={teamMembers.length}
                                index={i}
                              />
                            ))}
                          </TableBody>
                        </Table>
                      </>
                    ) : null}
                  </div>
                </FormParagraph>
              ) : null}
            </form>
          </Form>
        </Paper>
      </DashboardMain>
    </div>
  );
};

export default InviteTeampage;
