import { cn } from "@/lib/utils";
import React from "react";

export const ParagraphHead = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-gray-950 poppins-medium text-sm leading-5",
        className
      )}
    >
      {children}
    </p>
  );
};

export const ParagraphBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-gray-800 text-sm poppins-regular leading-5",
        className
      )}
    >
      {children}
    </p>
  );
};

const FormParagraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn(className)}>{children}</div>;
};

export default FormParagraph;
