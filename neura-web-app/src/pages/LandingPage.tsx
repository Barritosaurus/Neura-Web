import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiRoblox } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
// import TwitterFeed from "../components/TwitterFeed";
// import ImageTable from "../components/ImageTable";
// import { ImageCardProps } from "../components/ImageCard";
// import IMAGES from "../images/images";

interface LandingPageProps {
    activePage: string;
}

// const imageTableData: ImageCardProps[] = [
// 	{ id: "1", src: IMAGES.abandondedpreview },
// 	{ id: "2", src: IMAGES.bedroompreview },
// 	{ id: "3", src: IMAGES.citypreview1 },
// 	{ id: "4", src: IMAGES.citypreview2 },
// 	{ id: "5", src: IMAGES.citypreview3 },
// 	{ id: "6", src: IMAGES.diningroompreview },
// 	{ id: "7", src: IMAGES.kineticcodepreview },
// 	{ id: "8", src: IMAGES.livingroompreview },
// 	{ id: "9", src: IMAGES.livingroompreview2 },
// 	{ id: "10", src: IMAGES.prisonroyalpreview },
// 	{ id: "11", src: IMAGES.roverseogpreview },
// 	{ id: "12", src: IMAGES.squarepreview },
// 	{ id: "13", src: IMAGES.walkwaypreview },

// 	// ... more images as needed ...
// ];
const LandingPage: React.FC<LandingPageProps> = () => {
	return (
		<div className="flex items-center justify-center w-full h-full bg-transparent relative">
			<div className="absolute inset-0 flex flex-col items-center justify-center z-20">
				<h1 className="text-6xl font-bold text-white text-center mb-4">Neura Studios</h1>
				<div className="flex justify-center space-x-4 z-10">
					<a
						href="https://github.com/Neura-Studios"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiFillGithub className="text-white text-4xl" />
					</a>
					<a
						href="https://www.roblox.com/groups/14915384/Neura#!/about"
						target="_blank"
						rel="noopener noreferrer"
					>
						<SiRoblox className="text-white text-4xl" />
					</a>
					<a
						href="https://twitter.com/NeuraStudios"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiFillTwitterCircle className="text-white text-4xl" />
					</a>
				</div>
			</div>
			<div className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center">
				<div className="mt-8 z-10 flex w-full">
					{/* <div className="w-3/10">
						<TwitterFeed />
					</div>
					<div className="w-7/10">
						<ImageTable images={imageTableData} visible={_visible} />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
