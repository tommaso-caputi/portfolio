import Link from "next/link";

export default function ProjectsSection() {
    return (
        <section id="projects" className="w-full py-12">
            <div className="space-y-12 px-4 md:px-6 w-full">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="w-full text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Check out some of my latest projects.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">{project.name}</h3>
                            <p className="text-muted-foreground pt-1">{project.descr}</p>
                            <div className="mt-4 flex gap-2">
                                {project.giturl && (
                                    <Link
                                        href={project.giturl}
                                        className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Github
                                    </Link>
                                )}
                                {project.url && (
                                    <Link
                                        href={project.url}
                                        className="inline-flex h-9 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        Live Demo
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const projects = [
    { name: "Crypto Keeper", descr: "A bitcoin wallet with NFC transactions", giturl: "https://github.com/tommaso-caputi/CryptoKeeper", url: "" },
    { name: "Masseria Coppa Website", descr: "A website for a local farm", giturl: "https://github.com/tommaso-caputi/Masseria-Coppa-website", url: "https://masseria-coppa.vercel.app" },
    { name: "Dear Diary", descr: "A journal app", giturl: "https://github.com/tommaso-caputi/Dear-Diary" },
    { name: "Telegram trading bot", descr: "pythob telegram bot controlled by telegram", giturl: "https://github.com/tommaso-caputi/telegram-trading-bot" }
];