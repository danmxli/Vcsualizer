import Image from "next/image"
import ProjectOneImage from "../../public/2023_11_28_seePickle.png"

const FeaturesCard = () => {
    return (
        <div className="w-full p-6 rounded-3xl bg-neutral-950 border border-neutral-700 flex flex-col gap-3 leading-relaxed">
            <h1 className="text-white text-4xl font-semibold">Featured Projects.</h1>

            <a className="hover:cursor-pointer" href="https://github.com/danmxli/seePickle" target="_blank" rel="noopener noreferrer" >
                <div className="bg-neutral-900 shadow-inner shadow-neutral-700 p-6 rounded-3xl">
                    <div>
                        <h1 className="text-white text-2xl">seePickle</h1>
                        <h2 className="text-neutral-400">Your personal achievement visualization tool.</h2>
                        <Image src={ProjectOneImage} alt="seePickle" className="mt-6 rounded-3xl" />
                    </div>
                </div>
            </a>

        </div>
    )
}

export default FeaturesCard