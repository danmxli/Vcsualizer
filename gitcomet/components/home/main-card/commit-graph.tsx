'use client'
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface DataProps {
    data: any
    yearlyTotalCommits: number
}

const CommitGraph: React.FC<DataProps> = ({ data, yearlyTotalCommits }) => {

    // Flatten data
    const result = data.flatMap((item: { contributionDays: any[]; }) => item.contributionDays.filter(day => day.contributionCount > 0));

    return (
        <div className='mt-6 h-fit'>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={result} margin={{ top: 0, right: 60, bottom: 0, left: 0 }}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="contributionCount" fill="#525252" />
                </BarChart>
            </ResponsiveContainer>
            <h1 className='text-white text-xs sm:text-sm'>Accumulation of {yearlyTotalCommits} contributions in the last year, visualized.</h1>
        </div>
    );
}

export default CommitGraph;
