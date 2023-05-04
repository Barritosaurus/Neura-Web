import React, { useState, useEffect, useRef } from "react";
import EmployeeTable from "../components/EmployeeTable";
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
    {
        name: "3 Flute",
        position: "Gameplay Programmer",
        github: "https://github.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe/",
        roblox: "https://www.roblox.com/users/123456789/profile",
        imageUrl: IMAGES.ethanheadshot,
    },
    {
        name: "35",
        position: "Technical Lead",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://www.linkedin.com/in/johndoe/",
        roblox: "https://www.roblox.com/users/123456789/profile",
        imageUrl: IMAGES.juniperheadshot,
    },
    {
        name: "23",
        position: "Founder & CEO",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        roblox: "https://www.roblox.com/users/123456789/profile",
        imageUrl: IMAGES.genyaheadshot,
    },
    {
        name: "235",
        position: "Technical Lead",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        roblox: "https://www.roblox.com/users/123456789/profile",
        imageUrl: IMAGES.tanguyheadshot,
    },
    // Add more employee data as needed
];

interface AboutUsProps {
    activePage: string;
}

const AboutUs: React.FC<AboutUsProps> = () => {
    const [visible, setVisible] = useState(false);
    const aboutUsRef = useRef<HTMLDivElement>(null);

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
                { threshold: 0.5 },
            );

            observer.observe(aboutUsRef.current);

            return () => {
                if (aboutUsRef.current) {
                    observer.unobserve(aboutUsRef.current);
                }
            };
        }
    }, []);

    return (
        <div
            ref={aboutUsRef}
            className="flex flex-col items-center justify-start w-full h-full space-y-16 pt-20 z-10"
        >
            {/* <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center space-y-4">
                <h1 className="text-4xl font-bold mb-4">Company Values</h1>
                <p className="text-lg font-semibold italic text-center px-4 max-w-xl">
                    this is a test paragraph to see if the text is working properly this is a test
                    paragraph to see if the text is working properly this is a test paragraph to see
                    if the text is working properly this is a test paragraph to see if the text is
                    working properly
                </p>
            </div> */}
            <EmployeeTable employees={employees} visible={visible} />
        </div>
    );
};

export default AboutUs;

