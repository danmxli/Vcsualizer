'use client'

import { motion } from "framer-motion";
import CountingNumbers from "./count-animation";
import React from "react";
interface ContributionCountProps {
    num: number
}

const ContributionCount: React.FC<ContributionCountProps> = ({ num }) => {
    return (
        <div className="relative">
            <motion.svg
                className="inset-0 m-auto"
                viewBox="0 0 100 100"
                width={140}
                height={140}
            >
                <motion.circle
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
                    strokeWidth={7}
                    strokeDasharray="0 1"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="#0a0a0a"
                    stroke="#052e16"
                ></motion.circle>
                
            </motion.svg>
            <CountingNumbers
                value={num}
                duration={2500}
                className="absolute inset-0 mx-auto flex items-center justify-center font-display text-4xl text-green-600"
            />
        </div>
    );
}

export default ContributionCount