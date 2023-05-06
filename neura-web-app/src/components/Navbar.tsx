import React from "react";
import { useTheme } from "../ThemeContext";

interface NavbarProps {
    sections: { id: string; title: string }[];
    onNavigate: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ sections, onNavigate }) => {
    const theme = useTheme();

    return (
        <nav className="bg-gray-800 py-2 px-4 w-full z-30">
            <ul className="flex justify-center space-x-4">
                {sections.map((section, index) => (
                    <li key={section.id} className="flex-grow text-center">
                        <button
                            onClick={() => onNavigate(index)}
                            className={`text-white bg-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 active:shadow-lg transition-shadow duration-300 ${theme.headerFont}`}
                        >
                            {section.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

