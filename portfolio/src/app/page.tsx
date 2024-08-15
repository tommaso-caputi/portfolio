import Header from "@/components/Header";


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
                  I'm a passionate software developer with expertise in building modern, scalable, and user-friendly web
                  applications.
                </p>
              </div>
              <div className="justify-center flex">
                <img
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
      </main>
    </div>
  );
}
