'use client'
import Navbar from "@/components/navbar"
import { useState, useEffect, useRef } from "react"
import { retrieveRepoData } from "@/modules/github-repos"
import ProjectCard from "@/components/projects/project-card"

const ProjectsPage = () => {
    const fetchExecuted = useRef(false)

    const [currRepos, setCurrRepos] = useState<any>(null)

    const getGithubRepos = async () => {
        let repos = await retrieveRepoData()

        // filter out private repos, sort by latest updateAt values
        let publicRepositories = (repos.data.user.repositories.nodes)
            .filter((repo: { isPrivate: any }) => !repo.isPrivate)
            .sort((a: { updatedAt: string | number | Date }, b: { updatedAt: string | number | Date }) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
        setCurrRepos(publicRepositories)
    }

    useEffect(() => {
        if (!fetchExecuted.current) {
            getGithubRepos()
            fetchExecuted.current = true
        }
    }, [])

    return (
        <main className="flex min-h-screen bg-neutral-900">
            <Navbar />
            <div className="flex-1">
                <div className="h-screen overflow-y-scroll scrollbar-hide">
                    {currRepos ? (
                        <div className="m-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {currRepos.map((repo: any, index: any) => (
                                <ProjectCard key={index} repo={repo} />
                            ))}
                        </div>
                    ) : (
                        <>
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}

export default ProjectsPage