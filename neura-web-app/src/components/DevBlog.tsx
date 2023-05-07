import React from "react";
import BlogMessage from "./BlogMessage";

const DevBlog: React.FC = () => {
	return (
		<div className="bg-white text-black rounded-lg shadow p-4 flex flex-col items-center space-y-4">
			<h3 className="text-2xl font-semibold">Dev Blog</h3>
			<BlogMessage
				title="Update 1"
				description="This is our first update."
				date="2023-05-05"
			/>
			<BlogMessage
				title="Update 2"
				description="This is our second update."
				date="2023-05-12"
			/>
		</div>
	);
};

export default DevBlog;
