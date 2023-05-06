import React, { useState } from "react";
import { SiRoblox } from "react-icons/si";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import DevBlog from "./DevBlog";

export interface GameCardProps {
    name: string;
    imageUrl: string;
    link: string;
}

const GameCard: React.FC<GameCardProps> = ({ name, imageUrl, link }) => {
    const [showDevBlog, setShowDevBlog] = useState(false);

    const toggleBlog = () => {
        setShowDevBlog(!showDevBlog);
    };

    return (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center space-y-4">
            <div className="w-48 h-48 relative">
                <img
                    src={imageUrl}
                    alt={name}
                    className="absolute top-0 w-full h-full rounded-lg object-cover"
                />
            </div>
            <h3 className="text-2xl font-semibold">{name}</h3>
            <div className="flex space-x-2 items-center">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <SiRoblox className="text-gray-900 hover:text-blue-600" size={24} />
                </a>
                <button className="bg-white" onClick={toggleBlog}>
                    <BsFillChatSquareDotsFill
                        className={`text-black hover:text-blue-600 transition-transform duration-300 ${
                            showDevBlog ? "transform scale-125" : ""
                        }`}
                        size={24}
                    />
                </button>
            </div>
            {showDevBlog && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={toggleBlog}
                >
                    <div
                        className="bg-white p-6 rounded-lg max-w-3xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <DevBlog />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GameCard;

