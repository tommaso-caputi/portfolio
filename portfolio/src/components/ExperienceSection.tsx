import React from 'react';

export default function ExperienceSection() {
    const experiences = [
        {
            title: 'Bachelor of Software Engineering',
            descr: 'Currently, I am studying Software Engineering at the Polytechnic University of Bari.',
            period: '2023 - present'
        }
    ];

    return (
        <div className="grid gap-y-0">
            <p className="font-medium text-lg pb-9">Experience</p>
            {experiences.map((exp, index) => (
                <Experience
                    key={index}
                    title={exp.title}
                    descr={exp.descr}
                    period={exp.period}
                />
            ))}
        </div>
    );
}

function Experience({ title, descr, period }: any) {
    return (
        <div className="flex flex-row">
            <div className="connector mr-4">
                <div className="point"></div>
                <div className="line"></div>
            </div>
            <div className="py-4">
                <p className="text-xs text-slate-300 pb-2" style={{ color: '#00000060' }}>{period}</p>
                <div className="flex h-fit justify-between">
                    <div className="space-y-2">
                        <p style={{ fontSize: '17px' }}>{title}</p>
                        <p style={{ color: '#00000099' }}>
                            {descr}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}