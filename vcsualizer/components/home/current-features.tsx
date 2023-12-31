import Image from "next/image"
import seePickleImage from "../../public/2023_11_28_seePickle.png"
import ConduifyImage from "../../public/2023_12_10_conduify.png"
import VcsualizerImage from "../../public/2023_11_29_projects.png"

const FeaturesCard = () => {

    const featureList = [
        { id: 1, title: "Conduify", href: "https://github.com/danmxli/Conduify", desc: "An agent integrated interview guidance and resume analysis platform.", img: ConduifyImage },
        { id: 2, title: "seePickle", href: "https://github.com/danmxli/seePickle", desc: "An all purpose productivity visualization tool.", img: seePickleImage },
        { id: 3, title: "Vcsualizer", href: "https://github.com/danmxli/Vcsualizer", desc: "A self regenerative developer portfolio with Github API integration.", img: VcsualizerImage }
    ]

    return (
        <div className="w-full leading-relaxed">
            <div className="grid grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 gap-6">
                {featureList.map((item) => (
                    <a key={item.id} className="hover:cursor-pointer" href={item.href} target="_blank" rel="noopener noreferrer" >
                        <div className="bg-neutral-900 hover:bg-neutral-950 shadow-inner shadow-neutral-700 p-6 rounded-3xl">
                            <div>
                                <h1 className="text-neutral-400 sm:text-2xl">{item.title}</h1>
                                <h2 className="text-neutral-600 text-xs sm:text-sm">{item.desc}</h2>
                                <Image src={item.img} alt="seePickle" className="mt-6 rounded-3xl" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default FeaturesCard