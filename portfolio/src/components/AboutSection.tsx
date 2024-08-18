export default function AboutSection() {
    return (
        <section id="about" className="w-full py-12">
            <div className="space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-5">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I am a software engineering student at the Politecnico di Bari, specializing in web and mobile development. I build responsive websites and Progressive Web Apps using React, Next.js and Tailwind and develop cross-platform mobile apps with Capacitor and Ionic. I also have experience in creating robust APIs for seamless system integration. I am dedicated to learning and applying new technologies to deliver impactful solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}