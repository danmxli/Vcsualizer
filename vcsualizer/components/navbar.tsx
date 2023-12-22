'use client'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Image from "next/image"
import Headshot from "../public/headshot.png"
import { AiFillHome, AiFillDatabase } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";


const Navbar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const Menus = [
        { id: "home", title: "Home", href: "/", icon: <AiFillHome /> },
        { id: "projects", title: "Projects", href: "/projects", icon: <AiFillDatabase /> },
        // { id: "about", title: "About Me", href: "/about", icon: <FaUserCircle /> }
    ];

    return (
        <main className="w-20 sm:w-52 bg-neutral-900 border-r border-neutral-700">
            <div className="m-6 pb-6 grid gap-6 justify-center border-b border-neutral-700">
                <Image src={Headshot} alt="headshot" loading="eager" priority={true} className="rounded-3xl" />
                <div className='hidden sm:block'>
                    <h1 className="text-4xl font-semibold text-white">Dan Li</h1>
                    <h2 className="text-neutral-500 font-light">Builder | Engineer</h2>
                </div>
            </div>
            <div className="m-6 grid space-y-6 pb-6 border-b border-neutral-700">
                {Menus.map((menu) => (
                    <button
                        key={menu.id}
                        className={`flex items-center gap-3 hover:text-white ${pathname === menu.href ? 'text-white' : 'text-neutral-400'}`}
                        onClick={() => {
                            router.push(menu.href)
                        }}
                    >
                        <span className='text-3xl'>{menu.icon}</span> <span className='hidden sm:block'>{menu.title}</span>
                    </button>
                ))}
            </div>
            <div className='m-6 grid'>
                <a className={`flex items-center gap-3 text-neutral-400 hover:text-white hover:cursor-pointer`} href="/Base_Resume_1.pdf" target="_blank" rel="noopener noreferrer">
                    <IoIosPaper className="text-3xl" /> <span className='hidden sm:block'>Resume</span>
                </a>
            </div>
        </main>
    )
}

export default Navbar