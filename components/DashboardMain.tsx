import { cn } from "@/lib/utils";
import useStore from "@/store/zuStore";
import React from "react";

const DashboardMain = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const step = useStore((state) => state.createJob.step);

  return (
    <div
      className={cn(
        step === 6
          ? "w-full"
          : "w-full md:w-[90vw] xl:w-2xlSidebar lg:w-lgSidebar",
        "bg-seBg min-h-full ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default DashboardMain;

// p-[30px] pb-[84px] sm:pb-[130px] sm:px-[30px] md:px-10 lg:px-[60px] sm:pt-8 md:pt-[52px] lg:pt-10
