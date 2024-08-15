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
                    {projects.map(project => (
                        <div className="bg-card p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">{project.name}</h3>
                            <p className="text-muted-foreground pt-1">{project.descr}</p>
                            <div className="mt-4 flex gap-2">
                                <Link
                                    href={project.url}
                                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Github
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const projects = [{ name: "Crypto Keeper", descr: "A bitcoin wallet with nfc transactions", url: "https://github.com/tommaso-caputi/CryptoKeeper" }]