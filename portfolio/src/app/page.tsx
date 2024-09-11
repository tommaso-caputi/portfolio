import ExperienceSection from "@/components/ExperienceSection";
import FirstSection from "../components/FirstSection"
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen py-7">
      <div className="space-y-28 pt-8 text-left px-3 md:w-7/12 sm:w-full">
        <FirstSection />
        <ProjectsSection />
        <ExperienceSection />
        <Footer />
      </div>
    </div>
  );
}