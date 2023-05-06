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
        <div
            style={{
                borderRadius: "8px",
                backgroundColor: "white",
                padding: "20px",
                color: "black",
                marginBottom: "10px",
                height: "200px",
                opacity: "0.5",
            }}
        >
            <h2
                style={{
                    fontSize: "20px",
                    fontWeight: "700",
                }}
            >
                {job.title}
            </h2>
            <p
                style={{
                    paddingLeft: "10px",
                }}
            >
                {job.description}
            </p>
        </div>
    </div>
);

export default CareerCard;

