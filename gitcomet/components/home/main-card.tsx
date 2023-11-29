'use client'
import React, { useState, useEffect, useRef } from "react"
import { retrieveContributionData } from "@/modules/github-contributions"
import ContributionCount from "./main-card/contribution-count"
import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";

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
        <div className="w-full p-6 rounded-3xl bg-neutral-950 border border-neutral-700 flex flex-col gap-6 leading-relaxed">
            <div className="flex-grow max-h-fit">
                <h1 className="text-white text-4xl font-semibold">Building Robust Solutions with Ergonomic Design.</h1>
                <p className="text-neutral-400">My projects aim to create scalable software services that communicate seamlessly and deliver real-time benefits to users. </p>
                {currData ? (
                    <CommitGraph data={currData} />
                ) : (
                    <></>
                )}

            </div>

            <div>
                <h1 className="text-white text-4xl font-semibold">Contributor to Innovation.</h1>
                <p className="text-neutral-400">Open to work and collaboration. Let&#39;s build something great together.</p>
                <div className="flex gap-6 mt-6">
                    {currData ? (
                        <div className="flex items-center">
                            <ContributionCount num={yearCount} />
                        </div>
                    ) : (
                        <>
                        </>
                    )}
                    <div className="flex items-center justify-center border p-6 rounded-3xl border-neutral-700">
                        <div className="">
                            <h1 className="text-xl text-neutral-700">Total Contributions.</h1>
                            <div className="mt-3 flex items-center text-2xl gap-3">
                                <a className="bg-neutral-400 hover:bg-white hover:cursor-pointer p-3 rounded-3xl"><FaMailBulk /></a>
                                <a className="bg-neutral-400 hover:bg-white hover:cursor-pointer p-3 rounded-3xl"><FaGithub /></a>
                                <a className="bg-neutral-400 hover:bg-white hover:cursor-pointer p-3 rounded-3xl"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCard