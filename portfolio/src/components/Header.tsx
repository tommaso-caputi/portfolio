import Link from "next/link";

export default function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
                {/* <CodeIcon className="size-6" /> */}
                <span className="sr-only">Tommaso Caputi's portfolio</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    About
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Projects
                </Link>
                <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                    Contact
                </Link>
            </nav>
        </header>
    )
}