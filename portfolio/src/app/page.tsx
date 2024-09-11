import ExperienceSection from "@/components/ExperienceSection";
import FirstSection from "../components/FirstSection"
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen py-7">
      <div className="space-y-28 pt-8 text-left px-3  sm:w-8/12 md:w-5/12 lg:w-5/12">
        <FirstSection />
        <ProjectsSection />
        <ExperienceSection />
        <Footer />
      </div>
    </div>
  );
}