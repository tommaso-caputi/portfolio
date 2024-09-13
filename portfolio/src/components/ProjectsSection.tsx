import Image from 'next/image';

export default function ProjectsSection() {
    const projects = [
        {
            title: 'Crypto Keeper',
            description: 'Crypto Keeper is a useful application for the exchange of cryptocurrencies using the nfc technology.',
            period: '2022 - 2023',
            imageUrl: '/LogoCryptoKeeper.png',
            tryItOutUrl: 'https://cryptokeeper.altervista.org/'
        },
        {
            title: "Masseria Coppa's delivery app",
            description: "The adoption of delivery management software for handling orders and deliveries has improved the company's operations by 70%.",
            period: '2023 - present',
            imageUrl: '/LogoDeliveryApp.png'
        },
        {
            title: 'Dear Diary',
            description: "DearDiary is a user-friendly journaling app designed to support self-reflection and personal growth.",
            period: '2023',
            imageUrl: '/LogoDearDiary.png',
            tryItOutUrl: 'https://github.com/tommaso-caputi/Dear-Diary/releases'
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
                    tryItOutUrl={proj.tryItOutUrl}
                />
            ))}
        </div>
    );
}

function Project({ title, description, period, imageUrl, tryItOutUrl }: any) {
    return (
        <div>
            <p className="text-xs text-slate-300 pb-2" style={{ color: '#00000060' }}>{period}</p>
            <div className="flex">
                <div className="space-y-4 w-11/12">
                    <p style={{ fontSize: '17px' }} className='font-medium'>{title}</p>
                    <p style={{ color: '#00000099' }}>
                        {description}
                    </p>
                    {tryItOutUrl && (
                        <div className="flex flex-row">
                            <a href={tryItOutUrl} target="_blank" rel="noopener noreferrer" className="flex flex-row">
                                <p className="underline underline-offset-4 font-medium">Try it out</p>&#8599;
                            </a>
                        </div>
                    )}
                </div>
                {imageUrl && (
                    <span className='flex content-center'>
                        <Image
                            src={imageUrl}
                            width={120}
                            height={120}
                            alt={`Logo of ${title}`}
                            style={{ objectFit: 'contain' }} // Maintain aspect ratio and fit within the bounds
                        />
                    </span>
                )}
            </div>
        </div>
    );
}