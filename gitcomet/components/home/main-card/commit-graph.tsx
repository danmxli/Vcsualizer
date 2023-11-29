'use client'
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface DataProps {
    data: any
}

const CommitGraph: React.FC<DataProps> = ({ data }) => {

    // Flatten data
    const result = data.flatMap((item: { contributionDays: any[]; }) => item.contributionDays.filter(day => day.contributionCount > 0));

    return (
        <div className='mt-6 h-fit'>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={result} margin={{ top: 0, right: 60, bottom: 0, left: 0 }}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="contributionCount" fill="#262626" />
                </BarChart>
            </ResponsiveContainer>
            <h1 className='text-white text-sm'>Accumulative commit history by year, visualized.</h1>
        </div>
    );
}

export default CommitGraph;
