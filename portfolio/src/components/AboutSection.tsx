export default function AboutSection() {
    return (
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
            <div className="space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-5">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I am a software engeneering student at Politecnico di Bari with a passion for creating innovative and user-friendly web applications.
                            I have experience in a variety of technologies, including React, Node.js and I am always
                            eager to learn new skills to improve my craft.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}