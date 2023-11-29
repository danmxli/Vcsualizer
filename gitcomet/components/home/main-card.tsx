'use client'
import React, { useState, useEffect, useRef } from "react"
import { retrieveContributionData } from "@/modules/github-contributions"
import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// https://github.com/recharts/recharts/issues/2272
import dynamic from 'next/dynamic'
const CommitGraph = dynamic(
    () => import('./main-card/commit-graph'),
    { ssr: false }
)

const MainCard = () => {

    const fetchExecuted = useRef(false)
    const [currData, setCurrData] = useState<any>(null)
    const [yearCount, setYearCount] = useState(0)

    const getGithubContributions = async () => {
        let user = await retrieveContributionData()
        setCurrData(user.data.user.contributionsCollection.contributionCalendar.weeks)
        setYearCount(user.data.user.contributionsCollection.contributionCalendar.totalContributions)
    }

    useEffect(() => {
        if (!fetchExecuted.current) {
            getGithubContributions()
            fetchExecuted.current = true
        }
    }, [])

    return (
        <div className="w-full flex flex-col gap-6 leading-relaxed">
            <div className="flex-grow max-h-fit">
                <h1 className="text-white sm:text-4xl font-semibold">Building Robust Solutions with Ergonomic Design.</h1>
                <p className="text-xs sm:text-base text-neutral-400">My objective is to develop scalable software services that communicate seamlessly and deliver real-time benefits to users.</p>
                {currData ? (
                    <CommitGraph data={currData} />
                ) : (
                    <div className="mt-6 text-white grid justify-center">
                        <h1 className="flex items-center gap-3"><AiOutlineLoading3Quarters className="animate-spin" />loading analytics...</h1>
                    </div>
                )}

            </div>

            <div>
                <h1 className="text-white sm:text-4xl font-semibold">Contributor to Innovation.</h1>
                <p className="text-xs sm:text-base text-neutral-400">Open to work and collaboration. Let&#39;s build something great together.</p>
                <div className="flex gap-6 mt-6 ">
                    <div className="flex items-center justify-center bg-neutral-900 hover:bg-neutral-950 shadow-inner shadow-neutral-700 p-6 rounded-3xl">
                        <div>
                            <div className="flex items-center sm:text-2xl gap-3">
                                <a className="bg-neutral-400 hover:bg-white hover:cursor-pointer p-3 rounded-3xl"><FaMailBulk /></a>
                                <a className="bg-neutral-400 hover:bg-white hover:cursor-pointer p-3 rounded-3xl"><FaGithub /></a>
                                <a className="bg-neutral-400 hover:bg-white hover:cursor-pointer p-3 rounded-3xl"><FaLinkedin /></a>
                            </div>
                            <footer className="mt-3 text-sm sm:text-base text-neutral-600">
                                {currData ? (
                                    <span>
                                        {yearCount} total contributions this year.
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-3">
                                        <AiOutlineLoading3Quarters className="animate-spin" />loading yearly commit history...
                                    </span>
                                )}

                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCard