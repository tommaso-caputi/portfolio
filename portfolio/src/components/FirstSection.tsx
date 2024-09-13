export default function FirstSection() {
    return (
        <div className="space-y-3">
            <div className="relative">
                <span
                    className="block h-20 w-20 min-w-20 min-h-20 bg-cover rounded-full shadow-xl"
                    style={{
                        backgroundImage:
                            "url('https://avatars.githubusercontent.com/u/56504768?v=4')",
                    }}>
                    <span
                        className="absolute w-8 h-8 bg-cover rounded-full"
                        style={{
                            margin: '48px 0px 0px 48px',
                            backgroundImage:
                                "url('https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif')",
                        }}
                    />
                </span>
            </div>
            <div className="font-medium text-2xl">
                Hi, I am Tommaso!
            </div>
            <p className="text-slate-500">
                I&apos;m a passionate software engeneering student at Politecnico di Bari
                with expertise in building modern, scalable, and user-friendly web and mobile apps.
            </p>
            <a href="https://tommasocaputi.altervista.org/portfolio/terminal/index.html" target="_blank" rel="noopener noreferrer" className="flex flex-row">
                <div className="flex flex-row font-medium"><p className="underline underline-offset-4">terminal ui</p>&#8599;</div>
            </a>
        </div>
    );
}