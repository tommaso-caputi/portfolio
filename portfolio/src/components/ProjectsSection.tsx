import Image from 'next/image';

export default function ProjectsSection() {
    const projects = [
        {
            title: 'Project 1',
            description: 'Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.',
            period: '2019 - present',
            imageUrl: 'https://res.cloudinary.com/dbyioi2qq/q_auto/v1658400349/static/default-imagesvg_1658400349_15767.svg'
        },
        {
            title: 'Project 2',
            description: 'Another project brief goes here. Mention any significant achievements or results.',
            period: '2018 - 2019',
            imageUrl: 'https://res.cloudinary.com/dbyioi2qq/q_auto/v1658400349/static/default-imagesvg_1658400349_15767.svg'
        }
    ];

    return (
        <div className="grid gap-y-9">
            <p className="font-medium text-lg">Featured projects</p>
            {projects.map((proj, index) => (
                <Project
                    key={index}
                    title={proj.title}
                    description={proj.description}
                    period={proj.period}
                    imageUrl={proj.imageUrl}
                />
            ))}
        </div>
    );
}

function Project({ title, description, period, imageUrl }: any) {
    return (
        <div>
            <p className="text-xs text-slate-300 pb-2" style={{ color: '#00000060' }}>{period}</p>
            <div className="flex h-fit justify-between">
                <div className="space-y-4">
                    <p style={{ fontSize: '17px' }} className='font-medium'>{title}</p>
                    <p style={{ color: '#00000099' }}>
                        {description}
                    </p>
                    <div className="flex flex-row">
                        <p className="underline underline-offset-4 font-medium">Try it out</p>&#8599;
                    </div>
                </div>
                <span>
                    {/* <Image
                        src={imageUrl}
                        width={145}
                        height={145}
                        alt={`Logo of ${title}`}
                    /> */}
                </span>
            </div>
        </div>
    );
}