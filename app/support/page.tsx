import CompanyLogo from "@/components/companyLogo";
import { ParagraphBody, ParagraphHead } from "@/components/formParagraph";
import JobType from "@/components/jobType";
import Paper from "@/components/paper";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";
import localFont from "next/font/local";
import Image from "next/image";

const filmoType = localFont({
  src: "../../public/fonts/filmotype.woff2",
  display: "swap",
  variable: "--filmotype",
});

const supportCardData = [
  {
    title: "Chat to support",
    icon: "/icons/Chat.svg",
    description: "We're here to help.",
    contact: "support@varyance.io",
  },
  {
    title: "Knowledge Base",
    icon: "/icons/Document.svg",
    description: "Find the right ressources.",
    contact: "Learn more",
  },
  {
    title: "Call us",
    icon: "/icons/Telephone.svg",
    description: "Mon-Fri from 9am to 5pm GMT",
    contact: "0044 - 203 856 4734",
  },
];

const SupportCard = ({
  icon,
  title,
  description,
  contact,
}: {
  icon: string;
  title: string;
  description: string;
  contact: string;
}) => {
  return (
    <Paper className="p-6 sm:w-[374px] w-[300px]">
      <Image src={icon} width={40} height={40} alt="" />
      <ParagraphHead className="text-primary600 mt-8 poppins-semibold">
        {title}
      </ParagraphHead>
      <ParagraphBody className="mt-2 ">{description}</ParagraphBody>
      <ParagraphBody className="mt-5 text-primary600 poppins-semibold">
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
            />
          );
        })}
      </div>
    </div>
  );
}
