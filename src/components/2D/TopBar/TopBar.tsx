import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav
            className="min-w-full px-4 py-4 top-0 z-10 text-white bg_primary"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}
        >
            <div className="max-w-5xl mx-auto px-4 prose prose-xl">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center sm:text-2xl text-lg font-semibold text-white hover:text-orange no-underline">
                        <Image
                            src={"/logo.png"}
                            alt="Logo"
                            width={50}
                            height={50}
                            sizes="100vw"
                        />
                        <span className="ml-2">kizmt</span>
                    </Link>
                    <div className="flex space-x-4">
                        <Link href="/story" className="text-white sm:text-xl text-lg no-underline">Story</Link>
                        <Link href="/work" className="text-white sm:text-xl text-lg no-underline">Work</Link>
                        <Link href="/code" className="text-white sm:text-xl text-lg no-underline">Code</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
