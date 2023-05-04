import React from "react";

interface NavbarProps {
    sections: { id: string; title: string }[];
    onNavigate: (index: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ sections, onNavigate }) => {
	return (
		<nav className="bg-gray-800 py-2 px-4 fixed top-0 w-full z-20">
			<ul className="flex justify-center space-x-4">
				{sections.map((section, index) => (
					<li key={section.id} className="flex-grow text-center">
						<button
							onClick={() => onNavigate(index)}
							className="text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 active:shadow-lg transition-shadow duration-300"
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
