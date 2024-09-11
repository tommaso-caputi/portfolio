import Image from 'next/image'

export default function ProjectsSection() {
    return (
        <div className="grid gap-y-9">
            <p className="font-medium text-lg">Featured projects</p>
            <Project />
            <Project />
        </div>
    );
}

function Project() {
    return (
        <div>
            <p className="text-xs text-slate-300 pb-2" style={{ color: '#00000060' }}>2019 - present</p>
            <div className="flex h-fit justify-between">
                <div className="space-y-4">
                    <p style={{ fontSize: '17px' }}>This is a project name</p>
                    <p style={{ color: '#00000099' }}>
                        Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.
                    </p>
                    <div className="flex flex-row"><p className="underline underline-offset-4">Try it out</p>&#8599;</div>
                </div>
                {/* <span className="">
                    <Image
                        src="https://res.cloudinary.com/dbyioi2qq/q_auto/v1658400349/static/default-imagesvg_1658400349_15767.svg"
                        width={145}
                        height={145}
                        alt="Logo of project"
                    />
                </span> */}
            </div>
        </div>
    );
}