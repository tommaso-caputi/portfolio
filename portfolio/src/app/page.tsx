import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <section className="w-full pt-10 pb-10 border-b">
          <div className="md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="flex justify-center flex-col">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Tommaso Caputi
                </h1>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Software Developer</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  I am a software engineering student at the Politecnico di Bari, specializing in web and mobile development. I build responsive websites and Progressive Web Apps using React, Next.js and Tailwind and develop cross-platform mobile apps with Capacitor and Ionic. I also have experience in creating robust APIs for seamless system integration. I am dedicated to learning and applying new technologies to deliver impactful solutions.
                </p>
              </div>
              <div className="justify-center flex">
                <Image
                  src="/avatar-circle.png"
                  width="300"
                  height="300"
                  alt="John Doe"
                  className="rounded-full"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* <AboutSection /> */}
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
