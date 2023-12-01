import React, { useState, useEffect } from "react"
import { retrieveReadme } from "@/modules/github-readme";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import { FaLink, FaUserCircle, FaStar, FaGithub } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import "../../app/customs.scss"

interface Repository {
    nameWithOwner: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
    isPrivate: boolean;
    owner: { login: string };
    primaryLanguage: { name: string };
    stargazerCount: number;
    forkCount: number;
    licenseInfo?: { name: string } | null;
    homepageUrl?: string | null;
    url: string;
}

interface ProjectCardProps {
    repo: Repository
}

const ProjectCard: React.FC<ProjectCardProps> = ({ repo }) => {
    const {
        nameWithOwner,
        description,
        owner,
        stargazerCount,
        forkCount,
        homepageUrl,
        url,
    } = repo;

    const [openReadme, setOpenReadme] = useState(false)
    const [rawReadme, setRawReadme] = useState('')

    // get raw README.md from each project card
    const getReadme = async (repoName: String) => {
        setOpenReadme(true)
        let rawResponse = await retrieveReadme(repoName)
        if (rawResponse.data.repository.readme !== null) {
            console.log(rawResponse.data.repository.readme)
            setRawReadme(rawResponse.data.repository.readme.text)
        }
    }

    // set openReadme to false when hit escape key
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setRawReadme('')
            setOpenReadme(false)
        }
    }
    // run effect when component is mounted
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [])

    return (
        <div className="flex flex-col bg-neutral-950 border border-neutral-700 hover:shadow-lg hover:shadow-neutral-700 p-3 rounded-lg break-words">
            <div className="flex-grow max-h-fit">
                <h1 className="text-xl text-white font-semibold">{nameWithOwner}</h1>
                {description && <p className="text-sm text-neutral-400">{description}</p>}
                {homepageUrl && (
                    <a href={homepageUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white text-sm flex items-center gap-1">
                        <FaLink />Website
                    </a>
                )}
            </div>

            <div className="mt-6">
                <ul className="text-neutral-600 text-sm">
                    <li>
                        <span className="flex items-center gap-1"><FaUserCircle />Owner: {owner.login}</span>
                    </li>
                    <li>
                        <span className="flex items-center gap-1"><FaStar />Stargazers: {stargazerCount}</span>
                    </li>
                    <li>
                        <span className="flex items-center gap-1"><FaCodeFork />Forks: {forkCount}</span>
                    </li>
                </ul>

                <div className="flex items-center">
                    <button className="w-full text-neutral-400 hover:text-white text-left"
                        onClick={() => {
                            getReadme(nameWithOwner.split("/")[1])
                        }}
                    >
                        <code>README.md</code>
                    </button>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-2xl text-neutral-600 hover:text-white">
                        <FaGithub />
                    </a>
                </div>
                {openReadme && (
                    <div className="fixed inset-0 flex items-center justify-center bg-neutral-900/50 backdrop-blur">
                        <div className="m-3 bg-neutral-900 w-9/12 sm:max-w-2xl shadow-inner shadow-neutral-700 p-6 rounded-3xl">
                            <button onClick={() => {
                                setRawReadme('')
                                setOpenReadme(false)
                            }} className="p-1 pl-6 pr-6 mb-6 bg-neutral-950 text-neutral-400 hover:text-white rounded-3xl shadow-inner shadow-neutral-700">
                                <code>Close README.md</code>
                            </button>
                            <div className="customHtmlStyles leading-relaxed max-h-96 overflow-scroll scrollbar-hide">

                                {rawReadme !== '' ? (
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {rawReadme}
                                    </ReactMarkdown>
                                ) : (
                                    <div className="space-y-3">
                                        <p className="animate-pulse p-3 bg-neutral-700 w-full rounded-3xl"></p>
                                        <p className="animate-pulse p-3 bg-neutral-700 w-2/3 rounded-3xl"></p>
                                        <p className="animate-pulse p-3 bg-neutral-700 w-1/3 rounded-3xl"></p>
                                        <p className="animate-pulse p-3 bg-neutral-700 w-2/3 rounded-3xl"></p>
                                        <p className="animate-pulse p-3 bg-neutral-700 w-1/3 rounded-3xl"></p>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}

export default ProjectCard