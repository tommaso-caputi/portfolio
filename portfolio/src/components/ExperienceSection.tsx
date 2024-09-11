export default function ExperienceSection() {
    return (
        <div className="grid gap-y-0">
            <p className="font-medium text-lg pb-9">Experience</p>
            <Experience />
            <Experience />
        </div>
    );
}

function Experience() {
    return (
        <div className="flex flex-row">
            <div className="connector mr-4">
                <div className="point"></div>
                <div className="line"></div>
            </div>
            <div className="py-8">
                <p className="text-xs text-slate-300 pb-2" style={{ color: '#00000060' }}>2019 - present</p>
                <div className="flex h-fit justify-between">
                    <div className="space-y-2">
                        <p style={{ fontSize: '17px' }}>Senior UX Designer</p>
                        <p style={{ color: '#00000099' }}>
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}