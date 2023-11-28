'use client'
import { useRouter } from 'next/navigation'
import Image from "next/image"
import Headshot from "../public/headshot.png"
import { AiFillHome, AiFillCode } from "react-icons/ai"
import { FaUserCircle  } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";


const Navbar = () => {
    const router = useRouter()
    const Menus = [
        { id: "home", title: "Home", href: "/", icon: <AiFillHome /> },
        { id: "projects", title: "All Projects", href: "/projects", icon: <AiFillCode /> },
        { id: "about", title: "About Me", href: "/about", icon: <FaUserCircle  /> }
    ];

    return (
        <main className="w-52 bg-neutral-900">
            <div className="m-6 pb-6 grid gap-6 justify-center border-b border-neutral-700">
                <Image src={Headshot} alt="headshot" className="rounded-3xl shadow-2xl shadow-neutral-700" />
                <div>
                    <h1 className="text-4xl font-semibold text-white">Dan Li</h1>
                    <h2 className="text-neutral-400">Builder | Engineer</h2>
                </div>
            </div>
            <div className="m-6 grid space-y-6 pb-6 border-b border-neutral-700">
                {Menus.map((menu) => (
                    <button key={menu.id} className={`flex items-center gap-2 text-neutral-400 hover:text-white`}>
                        <span className='text-xl'>{menu.icon}</span> {menu.title}
                    </button>
                ))}
            </div>
            <div className='m-6'>
                <button className='flex items-center gap-2 text-neutral-400 hover:text-white'>
                    <IoIosPaper /> Resume
                </button>
            </div>
        </main>
    )
}

export default Navbar