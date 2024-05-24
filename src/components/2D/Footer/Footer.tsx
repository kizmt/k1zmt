import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaTelegram, FaX } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

export default function Footer() {
    return (
        <footer className="min-w-full px-4 py-8 top-0 z-10 text-white bg_primary">
            <div className="flex items-center justify-center mx-auto p-4 text-2xl">
            <Link href="/" className="flex items-center sm:text-2xl text-lg font-semibold text-white hover:text-orange no-underline">
                        <span>contact</span>
                    </Link>
            <Link href="https://t.me/k1zmet" className="text-white mx-2">
                    <FaTelegram />
                </Link>
                <Link href="https://twitter.com/toadofdestiny" className="text-white mx-2">
                    <FaX />
                </Link>
                <Link href="mailto:kizmetsol@proton.me" className="text-white mx-2">
                    <GrMail />
                </Link>
                <Link href="https://github.com/kizmt" className="text-white mx-2">
                    <FaGithub />
                </Link>
            </div>
        </footer>
    )
}