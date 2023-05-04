import React from "react";
import EmployeeTable from "./EmployeeTable";
import IMAGES from "../images/images";

const employees = [
	{
		name: "Ethan Flute",
		position: "Gameplay Programmer",
		github: "https://github.com/johndoe",
		linkedin: "https://www.linkedin.com/in/johndoe/",
		roblox: "https://www.roblox.com/users/123456789/profile",
		imageUrl: IMAGES.ethanheadshot,
	},
	{
		name: "Juniper",
		position: "Technical Lead",
		github: "https://github.com/johndoe",
		twitter: "https://twitter.com/johndoe",
		linkedin: "https://www.linkedin.com/in/johndoe/",
		roblox: "https://www.roblox.com/users/123456789/profile",
		imageUrl: IMAGES.juniperheadshot,
	},
	{
		name: "Genya",
		position: "Founder & CEO",
		github: "https://github.com/johndoe",
		twitter: "https://twitter.com/johndoe",
		roblox: "https://www.roblox.com/users/123456789/profile",
		imageUrl: IMAGES.genyaheadshot,
	},
	{
		name: "Tanguy",
		position: "Technical Lead",
		github: "https://github.com/johndoe",
		twitter: "https://twitter.com/johndoe",
		roblox: "https://www.roblox.com/users/123456789/profile",
		imageUrl: IMAGES.tanguyheadshot,
	},
	// Add more employee data as needed
];

const AboutUs: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-start w-full h-full space-y-16 pt-20">
			<h1 className="text-4xl text-white font-bold mb-4">Company Values</h1>
			<p className="text-lg text-white font-semibold text-center px-4">
                Our company is committed to providing exceptional products and services while
                maintaining our core values of integrity, innovation, and collaboration. We strive
                to create a positive impact on our customers, employees, and communities by
                fostering a culture of inclusivity, growth, and sustainability.
			</p>
			<h3 className="text-2xl font-bold mb-4">Our Team</h3>
			<EmployeeTable employees={employees} />
		</div>
	);
};

export default AboutUs;
