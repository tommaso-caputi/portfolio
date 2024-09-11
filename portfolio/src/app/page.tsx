import ExperienceSection from "@/components/ExperienceSection";
import FirstSection from "../components/FirstSection"
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="flex justify-center bg-white min-h-screen">
      <div className="space-y-28 pt-8 text-left px-3 md:w-7/12 sm:w-full">
        <FirstSection />
        <ProjectsSection />
        <ExperienceSection />
      </div>
    </div>
  );
}