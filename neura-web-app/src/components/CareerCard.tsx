// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React from "react";

type Job = {
    title: string;
    description: string;
    details: string;
};

type CareerCardProps = {
    job: Job;
    index: number;
    selectedJobIndex: number | null;
    handleJobClick: (index: number) => void;
};

const CareerCard = ({ job, index, selectedJobIndex, handleJobClick }: CareerCardProps) => (
    <div
        key={index}
        id={`job-${index}`}
        style={{
            cursor: "pointer",
            opacity: selectedJobIndex === index ? 1 : 0.7,
        }}
        onClick={() => handleJobClick(index)}
    >
        <div className="rounded-md bg-white p-5 text-black mb-2 h-48 opacity-50">
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p className="pl-2">{job.description}</p>
        </div>
    </div>
);

export default CareerCard;
