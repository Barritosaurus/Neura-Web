// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { useState } from "react";
import CareerCard from "../components/CareerCard";
import "../App.css";
import callApi from "../api";
import ApplicationPopUp from "../components/ApplicationPopUp";

let jobs: Job[] = [
	{
		title: "Game Developer",
		description: "Join our game development team!",
		details: `
            <details>
                <summary>Job Requirements</summary>
                <ul>
                    <li>Strong knowledge of game development engines (e.g., Unity, Unreal Engine)</li>
                    <li>Experience with programming languages (e.g., C++, C#, Python)</li>
                    <li>Understanding of game design principles and mechanics</li>
                    <li>Ability to work collaboratively with artists, designers, and other developers</li>
                    <li>Passion for creating engaging and enjoyable gaming experiences</li>
                </ul>
            </details>
            <details>
                <summary>Job Benefits</summary>
                <ul>
                    <li>Competitive salary and performance-based bonuses</li>
                    <li>Health, dental, and vision insurance</li>
                    <li>Flexible work hours and remote work options</li>
                    <li>Opportunities for career growth and skill development</li>
                    <li>Collaborative and creative work environment</li>
                    <li>Access to the latest game development tools and technologies</li>
                </ul>
            </details>
        `,
		salary: "Negotiable",
	},
	{
		title: "Product Manager",
		description: "test",
		details: "details",
	},
	{
		title: "Data Scientist",
		description: "test",
		details: "details",
	},
	{
		title: "Data Scientist",
		description: "test",
		details: "details",
	},
	{
		title: "Data Scientist",
		description: "test",
		details: "details",
	},
	{
		title: "Data Scientist",
		description: "test",
		details: "details",
	},
	{
		title: "Data Scientist",
		description: "test",
		details: "details",
	},
	{
		title: "Data Scientist",
		description: "test",
		details: "details",
	},
	{
		title: "Data Scientist",
		description: "test",
		details: "details",
	},
];

type Job = {
    title: string;
    salary?: string;
    description: string;
    details: string;
};

const CareersPage = () => {
	const [allCareers, setAllCareers] = useState<Job[]>([]);
	const [selectedJobIndex, setSelectedJobIndex] = useState<number | null>(null);

	const handleJobClick = (index: number) => {
		setSelectedJobIndex(index);
	};

	// const [isButtonClicked, setIsButtonClicked] = useState(false);

	// const handleClick = () => {
	// 	setIsButtonClicked(!isButtonClicked);
	// };

	const fetchJobs = async () => {
		try {
			const careers: Job[] = await callApi("GET", "/careers/getall");
			const newCareers: Job[] = [];
			if (careers.length > 0) {
				careers.map((job: Job) => {
					const newJob: Job = {
						title: "",
						description: "",
						details: "",
					};
					console.log(job);
	

	
					newJob.title = job.title;
					newJob.description = job.description;
					newJob.details = job.details;
					newJob.salary = job.salary;

	
					newCareers.push(newJob);
				});
			}
			setAllCareers(newCareers);
		} catch (error) {
			console.error("Error fetching jobs:", error);
		}
	};
	fetchJobs();

	jobs = allCareers.length > 0 ? allCareers : jobs;
	

	return (
		<div className="custom-scrollbar relative flex m-0 h-full overflow-hidden overflow-y-auto">
			<div className="flex-1 p-5 rounded-lg overflow-y-auto custom-scrollbar">
				{jobs.map((job, index) => (
					<CareerCard
						key={index}
						job={job}
						index={index}
						selectedJobIndex={selectedJobIndex}
						handleJobClick={handleJobClick}
					/>
				))}
			</div>
			<div className="details-container" style={{ flex: 2, height: "100%" }}>
				<div className="custom-scrollbar p-5 details-container flex-2 top-0 overflow-auto">
					{selectedJobIndex !== null && (
						<div className="shadow-sm p-5 text-black relative bg-white rounded-xl">
							<div className="shadow-sm p-5 text-black relative bg-white rounded-xl">
								<ApplicationPopUp />
							</div>
							<div className="space-y-4">
								<h2 className="text-center text-2xl font-semibold">
									{jobs[selectedJobIndex].title}
								</h2>
								{jobs[selectedJobIndex].salary ? (
									<div className="mx-4">
										<p className="text-lg flex items-center">
											<BsFillBriefcaseFill className="mr-2" />
											{jobs[selectedJobIndex].salary}
										</p>
										<p>{jobs[selectedJobIndex].description}</p>
									</div>
								) : null}
								<p
									dangerouslySetInnerHTML={{
										__html: jobs[selectedJobIndex].details,
									}}
								></p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CareersPage;

