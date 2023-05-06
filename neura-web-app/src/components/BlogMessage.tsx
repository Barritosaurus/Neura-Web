import React from "react";

interface BlogMessageProps {
    title: string;
    description: string;
    date: string;
}

const BlogMessage: React.FC<BlogMessageProps> = ({ title, description, date }) => {
	return (
		<div className="bg-white rounded-lg shadow p-4 flex flex-col items-start space-y-2 w-full">
			<h4 className="text-xl font-semibold">{title}</h4>
			<p className="text-gray-500">{description}</p>
			<p className="text-gray-400">{date}</p>
		</div>
	);
};

export default BlogMessage;
