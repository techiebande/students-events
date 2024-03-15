//@ts-nocheck
"use client";

import CompanyLogo from "@/components/companyLogo";
import { ParagraphBody, ParagraphHead } from "@/components/formParagraph";
import Paper from "@/components/paper";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";
import localFont from "next/font/local";
import Image from "next/image";
import { useState } from "react";

const filmoType = localFont({
  src: "../../public/fonts/filmotype.woff2",
  display: "swap",
  variable: "--filmotype",
});

const supportCardData = [
  {
    title: "Chat to support",
    icon: "/icons/Chat.svg",
    iconActive: "/icons/Chat-active.svg",
    description: "We're here to help.",
    contact: "support@varyance.io",
  },
  {
    title: "Knowledge Base",
    icon: "/icons/Copy-Document.svg",
    iconActive: "/icons/Copy-Document-active.svg",
    description: "Find the right ressources.",
    contact: "Learn more",
  },
  {
    title: "Call us",
    icon: "/icons/Telephone.svg",
    iconActive: "/icons/Telephone.svg",
    description: "Mon-Fri, 9am - 5pm GMT",
    contact: "0044 - 203 856 4734",
  },
];

const SupportCard = ({
  icon,
  title,
  description,
  contact,
  iconActive,
}: {
  icon: string;
  title: string;
  description: string;
  contact: string;
  iconActive: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const mouseEnter = () => {
    setHovered(true);
  };
  const mouseLeave = () => {
    setHovered(false);
  };
  return (
    <Paper
      onMouseLeave={mouseLeave}
      onMouseEnter={mouseEnter}
      className={cn(
        !hovered ? "opacity-50" : "opacity-100",
        "p-6 sm:w-[374px] w-[300px] cursor-pointer"
      )}
    >
      <Image src={hovered ? iconActive : icon} width={32} height={32} alt="" />
      <ParagraphHead
        className={cn(
          !hovered ? "text-gray-950" : "text-primary600",
          " mt-8 poppins-semibold"
        )}
      >
        {title}
      </ParagraphHead>
      <ParagraphBody
        className={cn(
          !hovered ? "poppins-regular" : "poppins-medium",
          "mt-2 text-gray-600"
        )}
      >
        {description}
      </ParagraphBody>
      <ParagraphBody className="mt-5  poppins-semibold text-primary600">
        {contact}
      </ParagraphBody>
    </Paper>
  );
};

export default function SupportPage() {
  return (
    <div className="min-h-[100vh] pb-10 bg-cover bg-no-repeat pt-10 px-4 lg:px-[135px] xl:px-[230px] 2xl:px-[400px] bg-[url('/icons/support-bg.png')]">
      <div className="flex items-center justify-between">
        <CompanyLogo />
        <Cross1Icon className="w-6 h-6 text-gray-400" />
      </div>
      <div className="mt-[100px]">
        <h2 className="text-sm poppins-semibold leading-6 text-primary600">
          Support
        </h2>
        <p
          className={cn(
            filmoType.className,
            "text-gray-900 text-[32px] leading-[48px] tracking-[-0.4px]"
          )}
        >
          We&#39;d love to hear from you
        </p>
      </div>
      <div className="mt-10 gap-y-6  flex flex-col items-center sm:flex-row sm:gap-6 sm:justify-between">
        {supportCardData.map((data, i) => {
          return (
            <SupportCard
              key={i}
              title={data.title}
              description={data.description}
              contact={data.contact}
              icon={data.icon}
              iconActive={data.iconActive}
            />
          );
        })}
      </div>
    </div>
  );
}
