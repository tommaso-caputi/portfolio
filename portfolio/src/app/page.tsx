"use client";

import { useRef } from "react";
import ExperienceSection from "@/components/ExperienceSection";
import FirstSection from "../components/FirstSection";
import ProjectsSection from "@/components/ProjectsSection";
import Bar from "@/components/Bar";
import pageLoader from "@/components/pageLoader";

const sections = [
  { component: <FirstSection />, id: 'first' },
  { component: <ProjectsSection />, id: 'projects' },
  { component: <ExperienceSection />, id: 'experience' },
];

export default function Home() {
  const visibleSections = pageLoader(sections.length, 400);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className="flex justify-center min-h-screen py-7">
      <div className="space-y-28 pt-8 text-left px-3 sm:w-8/12 md:w-8/12 lg:w-6/12 mb-36">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className={`transition-opacity duration-[1000ms] ${visibleSections[index] ? 'opacity-100' : 'opacity-0'}`}
          >
            {section.component}
          </div>
        ))}
      </div>
      <Bar />
    </div>
  );
}