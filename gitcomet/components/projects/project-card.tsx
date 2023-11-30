import React, { useState, useEffect } from "react"
import { retrieveReadme } from "@/modules/github-readme";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import { FaLink, FaUserCircle, FaStar, FaGithub } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

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
        let rawResponse = await retrieveReadme(repoName)
        if (rawResponse.data.repository.readme !== null) {
            console.log(rawResponse.data.repository.readme)
            setRawReadme(rawResponse.data.repository.readme.text)
        }
        setOpenReadme(true)
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
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="m-3 bg-neutral-900 max-w-screen-md shadow-inner shadow-neutral-700 p-6 rounded-3xl">
                            <button onClick={() => {
                                setRawReadme('')
                                setOpenReadme(false)
                            }} className="p-3 pl-12 pr-12 mb-6 bg-neutral-400 rounded-3xl font-semibold">
                                ESC
                            </button>
                            <div className="text-white leading-relaxed max-h-96 overflow-scroll scrollbar-hide ">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {rawReadme}
                                </ReactMarkdown>
                            </div>

                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}

export default ProjectCard