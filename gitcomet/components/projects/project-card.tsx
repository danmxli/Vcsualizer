import React from "react"
import { FaLink, FaUserCircle, FaStar } from "react-icons/fa";
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
        createdAt,
        updatedAt,
        owner,
        stargazerCount,
        forkCount,
        homepageUrl,
        url,
    } = repo;

    return (
        <div className="flex flex-col bg-neutral-950 border border-neutral-700 hover:shadow-lg hover:shadow-neutral-700 p-3 rounded-lg break-words">
            <div className="flex-grow max-h-fit">
                <h1 className="text-xl text-white font-semibold">{nameWithOwner}</h1>
                {description && <p className="text-sm text-neutral-400">{description}</p>}
                {homepageUrl && (
                    <a href={homepageUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-500 text-sm flex items-center gap-1">
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

                <a href={url} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white block">
                    Repository
                </a>
            </div>

        </div>
    );
}

export default ProjectCard