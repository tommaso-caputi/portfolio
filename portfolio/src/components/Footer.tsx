import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">Tommaso Caputi</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link href="https://github.com/tommaso-caputi" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                    <FaGithub className="size-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/tommaso-caputi" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                    <FaLinkedin className="size-5" />
                </Link>
            </nav>
        </footer>
    )
}   