export default function FirstSection() {
    return (
        <div className="space-y-3">
            <div>
                <span
                    className="block h-20 w-20 min-w-20 min-h-20 bg-cover rounded-full relative shadow-xl"
                    style={{
                        backgroundImage:
                            "url('https://avatars.githubusercontent.com/u/56504768?v=4')",
                    }}
                ></span>
            </div>
            <div className="font-medium text-2xl">Lorem Ipsum</div>
            <p className="text-slate-500">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
            </p>
            <div className="flex flex-row"><p className="underline underline-offset-4">Lorem ipsum</p>&#8599;</div>
        </div>
    );
}