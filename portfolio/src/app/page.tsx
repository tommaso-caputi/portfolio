import ExperienceSection from "@/components/ExperienceSection";
import FirstSection from "../components/FirstSection"
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="flex justify-center bg-white min-h-screen py-8">
      <div className="space-y-28 pt-8 text-left px-3 md:w-7/12 sm:w-full">
        <FirstSection />
        <ProjectsSection />
        <ExperienceSection />
        <footer>
          <p className="font-medium text-lg pb-4">Experience</p>
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row"><p className="underline underline-offset-4">Email</p>&#8599;</div>
            <div className="flex flex-row"><p className="underline underline-offset-4">Github</p>&#8599;</div>
            <div className="flex flex-row"><p className="underline underline-offset-4">Linkedin</p>&#8599;</div>
          </div>
        </footer>
      </div>
    </div>
  );
}