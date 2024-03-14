import { cn } from "@/lib/utils";
import useStore from "@/store/zuStore";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import CompanyLogo from "./companyLogo";
import Separator from "./Separator";
import InternshipCard from "./internshipCard";
import CompanyCard from "./companyCard";

const leftSidebarItems = [
  { icon: "/icons/dashboard.svg", title: "Dashboard", hasChildren: false },
  { icon: "/icons/challenges.svg", title: "Challenges", hasChildren: false },
  { icon: "/icons/job-posts.svg", title: "Job Posts", hasChildren: false },
  { icon: "/icons/events.svg", title: "Events", hasChildren: false },
  { icon: "/icons/talent-pool.svg", title: "Talent Pool", hasChildren: true },
];

const leftSidebarTools = [
  { icon: "/icons/Chat.svg", title: "Messanger", hasChildren: false },
  { icon: "/icons/team.svg", title: "Team", hasChildren: false },
  { icon: "/icons/setting.svg", title: "Settings", hasChildren: false },
];

const SidebarItem = ({ item }: any) => {
  return (
    <div className="flex relative items-center gap-4 hover:bg-[#FFF5F6] rounded-[5px] py-3 px-4 ">
      <Image src={item.icon} alt="" width={20} height={20} />
      <span className="hidden xl:inline poppins-medium text-gray-950 text-sm leading-5   hover:text-primary600">
        {item.title}
      </span>
      {item.hasChildren && (
        <ChevronDownIcon className="absolute xl:static -right-2" />
      )}
    </div>
  );
};

const LeftSidebar = () => {
  const step = useStore((state) => state.createJob.step);
  return (
    <div
      className={cn(
        step === 6
          ? "hidden"
          : "hidden md:flex md:w-[10vw] lg:w-[96px] xl:px-6 xl:w-[324px]",
        "min-h-full bg-white pt-[30px] flex-col pb-6"
      )}
    >
      <CompanyLogo className="mx-auto xl:mx-[unset]" />
      <div className="flex gap-6 flex-col items-center xl:items-start mt-[42px]">
        {leftSidebarItems.map((item, i) => {
          return <SidebarItem key={i} item={item} />;
        })}
      </div>
      <Separator className="mt-[36px]" />

      <div className="mt-6 flex gap-6 flex-col items-center xl:items-start">
        <p className="text-gray400 text-xs leading-4 poppins-medium">TOOLS</p>
        {leftSidebarTools.map((item, i) => {
          return <SidebarItem key={i} item={item} />;
        })}
      </div>
      <div className="hidden xl:block mt-[32px]">
        <CompanyCard />
      </div>
    </div>
  );
};

export default LeftSidebar;
