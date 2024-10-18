"use client";

import { useEffect, useRef, useState } from "react";
import ExperienceSection from "@/components/ExperienceSection";
import FirstSection from "../components/FirstSection";
import ProjectsSection from "@/components/ProjectsSection";
import Bar from "@/components/Bar";

const sections = [
  { component: <FirstSection />, id: 'first' },
  { component: <ProjectsSection />, id: 'projects' },
  { component: <ExperienceSection />, id: 'experience' },
];

export default function Home() {
  const [visibleSections, setVisibleSections] = useState(new Array(sections.length).fill(false));

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index >= 0) {
            setVisibleSections((prev) => {
              const newVisibleSections = [...prev];
              newVisibleSections[index] = true;
              return newVisibleSections;
            });
            observer.unobserve(entry.target);
          }
        }
      });
    });

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center min-h-screen py-7">
      <div className="space-y-28 pt-8 text-left px-3 sm:w-8/12 md:w-8/12 lg:w-5/12 mb-36">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className={`transition-opacity duration-3000 ${visibleSections[index] ? 'opacity-100' : 'opacity-0'}`}
          >
            {section.component}
          </div>
        ))}
      </div>
      <Bar />
    </div>
  );
}