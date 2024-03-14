import React from "react";
import Paper from "./paper";
import FormParagraph, { ParagraphBody, ParagraphHead } from "./formParagraph";
import SectionHeader from "./sectionHeader";
import { Button } from "./ui/button";
import EditInfo from "./editInfo";
import CategoryBadge from "./categoryBadge";

const ReviewForm = () => {
  return (
    <div>
      <Paper className="mt-10 relative">
        <div className="absolute right-6 top-6">
          <EditInfo className="cursor-pointer" />
        </div>
        <SectionHeader>Basic Information</SectionHeader>
        <FormParagraph className="mt-6">
          <ParagraphHead>Job title</ParagraphHead>
          <ParagraphBody className="mt-3">
            Junior Engineer Assistant
          </ParagraphBody>
        </FormParagraph>
        <FormParagraph className="mt-6">
          <ParagraphHead>Position type</ParagraphHead>
          <ParagraphBody className="mt-3">Placement</ParagraphBody>
        </FormParagraph>
        <FormParagraph className="mt-6">
          <ParagraphHead>Job description</ParagraphHead>
          <ParagraphBody className="mt-3">
            About Us: [Company Name] is a leading [industry/sector] consulting
            firm known for providing innovative and strategic solutions to our
            clients. We specialize in [specific areas or industries], helping
            businesses achieve their goals and stay ahead in a competitive
            market. Role Overview: As a Strategy Consulting Intern at [Company
            Name], you will have the opportunity to work closely with our
            experienced consultants on various client projects. You will
            contribute to the development and implementation of strategic
            initiatives, conduct market research and analysis, and assist in
            creating comprehensive client presentations.{" "}
            <span className="text-primary600 poppins-semibold leading-5 mt-6 block p-0 hover:bg-none cursor-pointer">
              View more...
            </span>
          </ParagraphBody>
        </FormParagraph>
      </Paper>
      <Paper className="mt-10 relative">
        <div className="absolute right-6 top-6">
          <EditInfo className="cursor-pointer" />
        </div>
        <SectionHeader>Location Requirement</SectionHeader>
        <FormParagraph className="mt-6">
          <ParagraphHead>Location type</ParagraphHead>
          <ParagraphBody className="mt-3">Onsite</ParagraphBody>
        </FormParagraph>
        <FormParagraph className="mt-6">
          <ParagraphHead>Onsite location</ParagraphHead>
          <ParagraphBody className="mt-3">
            Frankfurt, Hesse, Germany
          </ParagraphBody>
        </FormParagraph>
      </Paper>
      <Paper className="mt-10 relative">
        <div className="absolute right-6 top-6">
          <EditInfo className="cursor-pointer" />
        </div>
        <SectionHeader>Time Requirements</SectionHeader>
        <FormParagraph className="mt-6">
          <ParagraphHead>Schedule</ParagraphHead>
          <ParagraphBody className="mt-3">Full time</ParagraphBody>
        </FormParagraph>
        <FormParagraph className="mt-6">
          <ParagraphHead>Employment duration</ParagraphHead>
          <ParagraphBody className="mt-3">Permanent</ParagraphBody>
        </FormParagraph>
      </Paper>
      <Paper className="mt-10 relative">
        <div className="absolute right-6 top-6">
          <EditInfo className="cursor-pointer" />
        </div>
        <SectionHeader>Categorize your job</SectionHeader>
        <FormParagraph className="mt-6">
          <ParagraphHead>Student interest</ParagraphHead>
          <div className="mt-3 flex items-center gap-3">
            <CategoryBadge active icon="/icons/finance.svg" text="Consulting" />
            <CategoryBadge active icon="/icons/tv.svg" text="Technology & AI" />
          </div>
        </FormParagraph>
        <FormParagraph className="mt-6">
          <ParagraphHead>Skills</ParagraphHead>
          <ParagraphBody className="mt-3 flex flex-wrap gap-3">
            <p>Permanent</p>
            <p>Permanent</p>
            <p>Permanent</p>
            <p>Permanent</p>
          </ParagraphBody>
        </FormParagraph>{" "}
        <FormParagraph className="mt-6">
          <ParagraphHead>Study level</ParagraphHead>
          <ParagraphBody className="mt-3">Masters program</ParagraphBody>
        </FormParagraph>{" "}
        <FormParagraph className="mt-6">
          <ParagraphHead>Language</ParagraphHead>
          <ParagraphBody className="mt-3">English</ParagraphBody>
        </FormParagraph>
      </Paper>
    </div>
  );
};

export default ReviewForm;
