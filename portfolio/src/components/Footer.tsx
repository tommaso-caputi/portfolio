export default function Footer() {
    return (
        <footer>
            <p className="font-medium text-lg pb-6">Contact</p>
            <div className="flex flex-row space-x-4">
                <a href="mailto:tommasocaputi85@gmail.com" className="flex flex-row">
                    <p className="underline underline-offset-4 font-medium ">Email</p>&#8599;
                </a>
                <a href="https://github.com/tommaso-caputi" target="_blank" rel="noopener noreferrer" className="flex flex-row">
                    <p className="underline underline-offset-4 font-medium ">Github</p>&#8599;
                </a>
                <a href="https://www.linkedin.com/in/tommaso-caputi" target="_blank" rel="noopener noreferrer" className="flex flex-row">
                    <p className="underline underline-offset-4 font-medium ">LinkedIn</p>&#8599;
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className="flex flex-row">
                    <p className="underline underline-offset-4 font-medium ">Resume</p>&#8599;
                </a>
            </div>
        </footer>
    );
}