'use client'
import React, { useState, useEffect, useRef } from "react"
import { retrieveContributionData } from "@/modules/github-contributions"

const MainCard = () => {

    const fetchExecuted = useRef(false)
    const [contributionData, setContributionData] = useState<any>(null);

    const getGithubContributions = async () => {
        const data = await retrieveContributionData();
        console.log(data)
    }

    useEffect(() => {
        if (!fetchExecuted.current) {
            getGithubContributions()
            fetchExecuted.current = true
        }
    }, [])
    return (
        <div className="w-full p-6 rounded-3xl bg-neutral-950/50 border border-neutral-700 grid gap-6 leading-relaxed">
            <div>
                <h1 className="text-white text-4xl font-semibold">Building Robust Solutions with Ergonomic Design.</h1>
                <p className="text-neutral-400">I engineer innovative solutions to enhance the human experience.</p>
                <p className="text-neutral-400">My projects aim to create scalable software services that communicate seamlessly and deliver real-time benefits to users. </p>
            </div>

            <div>
                <h1 className="text-white text-4xl font-semibold">Contributor to Free and Open Source Software.</h1>
                <p className="text-neutral-400">Open to work and collaboration. Let&#39;s build something great together.</p>
            </div>
        </div>
    )
}

export default MainCard