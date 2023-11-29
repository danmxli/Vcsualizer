import Image from "next/image"
import ProjectOneImage from "../../public/2023_11_28_seePickle.png"
import ProjectTwoImage from "../../public/2023_11_29_conduify.png"

const FeaturesCard = () => {
    return (
        <div className="w-full p-6 rounded-3xl bg-neutral-950 border border-neutral-700 leading-relaxed">
            <h1 className="text-white sm:text-4xl font-semibold mb-6">Featured Projects.</h1>
            <div className="grid grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 gap-6">
                <a className="hover:cursor-pointer" href="https://github.com/danmxli/seePickle" target="_blank" rel="noopener noreferrer" >
                    <div className="bg-neutral-900 shadow-inner shadow-neutral-700 p-6 rounded-3xl">
                        <div>
                            <h1 className="text-white sm:text-2xl">seePickle</h1>
                            <h2 className="text-neutral-400 text-xs sm:text-base">Your personal achievement visualization tool.</h2>
                            <Image src={ProjectOneImage} alt="seePickle" className="mt-6 rounded-3xl" />
                        </div>
                    </div>
                </a>
                <a className="hover:cursor-pointer" href="https://github.com/danmxli/Conduify" target="_blank" rel="noopener noreferrer" >
                    <div className="bg-neutral-900 shadow-inner shadow-neutral-700 p-6 rounded-3xl">
                        <div>
                            <h1 className="text-white sm:text-2xl">Conduify</h1>
                            <h2 className="text-neutral-400 text-xs sm:text-base">Your personal interview preparation assistant.</h2>
                            <Image src={ProjectTwoImage} alt="conduify" className="mt-6 rounded-3xl" />
                        </div>
                    </div>
                </a>
            </div>


        </div>
    )
}

export default FeaturesCard