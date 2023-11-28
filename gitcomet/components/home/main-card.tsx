'use client'
import React, { useState, useEffect, useRef } from "react"
import { retrieveContributionData } from "@/modules/github-contributions"
import ContributionCount from "./main-card/contribution-count"
import { FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";

const MainCard = () => {

    const fetchExecuted = useRef(false)
    const [data, setData] = useState<any>(null);
    const [yearCount, setYearCount] = useState(0)

    const getGithubContributions = async () => {
        let user = await retrieveContributionData()
        setData(user)
        setYearCount(user.data.user.contributionsCollection.contributionCalendar.totalContributions)
    }

    useEffect(() => {
        if (!fetchExecuted.current) {
            getGithubContributions()
            fetchExecuted.current = true
        }
    }, [])

    return (
        <div className="w-full p-6 rounded-3xl bg-neutral-950 border border-neutral-700 grid gap-6 leading-relaxed">
            <div>
                <h1 className="text-white text-4xl font-semibold">Building Robust Solutions with Ergonomic Design.</h1>
                <p className="text-neutral-400">I engineer innovative solutions to enhance the human experience.</p>
                <p className="text-neutral-400">My projects aim to create scalable software services that communicate seamlessly and deliver real-time benefits to users. </p>
            </div>

            <div>
                <h1 className="text-white text-4xl font-semibold">Contributor to Free and Open Source Software.</h1>
                <p className="text-neutral-400">Open to work and collaboration. Let&#39;s build something great together.</p>
                {data ? (
                    <div className="flex gap-6 mt-6">
                        <div className="flex items-center">
                            <ContributionCount num={yearCount} />
                        </div>

                        <div className="flex items-center justify-center border p-6 rounded-3xl border-neutral-700">
                            <div className="">
                                <h1 className="text-xl text-neutral-700">Contributions in the last year.</h1>
                                <div className="mt-3 flex items-center text-2xl gap-3">
                                    <a className="bg-neutral-400 hover:bg-white hover:cursor-pointer p-3 rounded-3xl"><FaMailBulk /></a>
                                    <a className="bg-neutral-400 hover:bg-white hover:cursor-pointer p-3 rounded-3xl"><FaGithub /></a>
                                    <a className="bg-neutral-400 hover:bg-white hover:cursor-pointer p-3 rounded-3xl"><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default MainCard