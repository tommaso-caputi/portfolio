import Link from "next/link";
import { FaTerminal } from "react-icons/fa";


export default function Header() {
    return (
        <header className="px-8 lg:px-6 h-14 flex items-center">
            <Link href="https://tommasocaputi.altervista.org/portfolio/terminal/index.html" className="flex items-center justify-center" prefetch={false}>
                <FaTerminal className="size-6" />
                <span className="sr-only">Tommaso Caputi's portfolio</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                {/* <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    About
                </Link> */}
                <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Projects
                </Link>
                <Link href="mailto:tommasocaputi85@gmail.com" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Contact
                </Link>
            </nav>
        </header>
    )
}