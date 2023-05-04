import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiRoblox } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import TwitterFeed from "./TwitterFeed";

const LandingPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-transparent">
            <h1 className="text-6xl font-bold text-white text-center relative mb-4">
                Neura Studios
            </h1>
            <div className="flex space-x-4">
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
            <div className="mt-8">
                <TwitterFeed />
            </div>
        </div>
    );
};

export default LandingPage;

