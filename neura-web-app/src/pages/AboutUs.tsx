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
const games = [
    {
        name: "Kinetic Code",
        imageUrl: IMAGES.kineticcodepreview,
        link: "https://www.roblox.com/games/394206297/Kinetic-Code-ALPHA",
    },
    {
        name: "Prison Royal",
        imageUrl: IMAGES.prisonroyalpreview,
        link: "https://www.roblox.com/games/915227766/Prison-Royale",
    },
    // Add more game data as needed
];

import React, { useState, useEffect, useRef } from "react";
import EmployeeTable from "../components/EmployeeTable";
import GameTable from "../components/GameTable";
import IMAGES from "../images/images";

interface AboutUsProps {
    activePage: string;
}

const AboutUs: React.FC<AboutUsProps> = () => {
    const [visible, setVisible] = useState(false);
    const aboutUsRef = useRef<HTMLDivElement>(null);
    const animationBreakpoint = 768; // Width breakpoint to disable animations (e.g., for phones)

    useEffect(() => {
        if (aboutUsRef.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisible(true);
                        } else {
                            setVisible(false);
                        }
                    });
                },
                { threshold: 0.1 },
            );

            observer.observe(aboutUsRef.current);

            return () => {
                if (aboutUsRef.current) {
                    observer.unobserve(aboutUsRef.current);
                }
            };
        }
    }, []);

    // Determine whether to enable animations based on viewport width
    const enableAnimations = window.innerWidth >= animationBreakpoint;

    // Determine whether to render content based on viewport width and visibility state
    const shouldRenderContent = enableAnimations ? visible : true;

    return (
        <div
            ref={aboutUsRef}
            className={`flex flex-col items-center justify-start w-full h-full space-y-16 pt-4 z-30 overflow-visible ${
                enableAnimations ? "animate-class" : ""
            }`}
        >
            <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0">
                <div className="w-full md:w-1/2 p-1">
                    {" "}
                    {/* Adjust width for larger screens */}
                    <div className="bg-white text-black rounded-lg shadow p-4 mb-4">
                        <h2 className="text-3xl font-semibold text-center text-black">Our Team</h2>
                    </div>
                    <EmployeeTable employees={employees} visible={shouldRenderContent} />
                </div>
                <div className="w-full md:w-1/2 p-1">
                    {" "}
                    {/* Adjust width for larger screens */}
                    <div className="bg-white text-black rounded-lg shadow p-4 mb-4">
                        <h2 className="text-3xl font-semibold text-center">Our Games</h2>
                    </div>
                    <div className="text-black">
                        <GameTable games={games} visible={shouldRenderContent} />
                    </div>
                </div>
            </div>
        </div>
    );
};

