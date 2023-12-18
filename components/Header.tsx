import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header>
            <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
                <Image
                    src="/logo.png"
                    width={40}
                    height={40}
                    className="mx-auto"
                    alt={"logo"}
                />
                <Link href={`/`}>
                    <h1 className="text-2xl text-white font-bold mt-4">Madhurya{`'`}s Blog</h1>
                </Link>
                <p className="text-slate-300">🤘 Welcome to my Tech Blog 🤘</p>
            </div>
        </header>
    )
}

export default Header