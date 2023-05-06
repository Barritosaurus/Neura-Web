import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiRoblox } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export interface EmployeeCardProps {
    name: string;
    position: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
    roblox?: string;
    imageUrl: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({
	name,
	position,
	github,
	twitter,
	linkedin,
	roblox,
	imageUrl,
}) => {
	return (
		<div className="bg-white text-black rounded-lg shadow p-4 flex flex-col items-center space-y-4">
			<div className="w-24 h-24 relative">
				<img
					src={imageUrl}
					alt={name}
					className="absolute top-0 w-full h-full rounded-full object-cover"
				/>
			</div>
			<h3 className="text-xl font-semibold">{name}</h3>
			<p className="text-gray-500">{position}</p>
			<div className="flex space-x-2">
				{github && (
					<a href={github} target="_blank" rel="noopener noreferrer">
						<AiFillGithub className="text-gray-900 hover:text-blue-600" size={24} />
					</a>
				)}
				{twitter && (
					<a href={twitter} target="_blank" rel="noopener noreferrer">
						<AiFillTwitterCircle
							className="text-gray-900 hover:text-blue-600"
							size={24}
						/>
					</a>
				)}
				{linkedin && (
					<a href={linkedin} target="_blank" rel="noopener noreferrer">
						<FaLinkedin className="text-gray-900 hover:text-blue-600" size={24} />
					</a>
				)}
				{roblox && (
					<a href={roblox} target="_blank" rel="noopener noreferrer">
						<SiRoblox className="text-gray-900 hover:text-blue-600" size={24} />
					</a>
				)}
			</div>
		</div>
	);
};

export default EmployeeCard;

