import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import LandingPage from "../pages/LandingPage";
import AboutUs from "../pages/AboutUs";
import { ThemeProvider } from "../ThemeContext";
import Careers from "../pages/Careers";

interface SectionProps {
    id: string;
    title: string;
    bgColor: string;
    blendColor: string;
}

const sections: SectionProps[] = [
	{
		id: "about-us",
		title: "About Us",
		bgColor: "bg-transparent",
		blendColor: "bg-yellow-600",
	},
	{
		id: "landing",
		title: "Home",
		bgColor: "bg-transparent",
		blendColor: "bg-blue-600",
	},
	{
		id: "careers",
		title: "Careers",
		bgColor: "bg-transparent",
		blendColor: "bg-green-600",
	},
	// Add more sections as needed
];

const HorizontalScroll: React.FC = () => {
	const [activePage, setActivePage] = useState("landing");
	const [currentSection, setCurrentSection] = useState(Math.floor(sections.length / 2));
	const containerRef = useRef<HTMLDivElement>(null);
	const currentSectionRef = useRef(currentSection);

	const scrollToSection = (index: number, smooth = true, resize = false) => {
		const target = document.getElementById(sections[index].id);

		if (target && containerRef.current) {
			containerRef.current.scrollTo({
				left: target.offsetLeft,
				behavior: smooth ? "smooth" : "auto",
			});
			setCurrentSection(index);
			currentSectionRef.current = index;
		}

		if (!resize) {
			setActivePage(sections[index].id);
		}
	};

	const handleResize = () => {
		scrollToSection(currentSectionRef.current, false, true);
	};

	useEffect(() => {
		scrollToSection(currentSection, false);
		window.addEventListener("resize", handleResize);

		// Cleanup function
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const renderSectionContent = (section: SectionProps) => {
		switch (section.id) {
		case "landing":
			return (
				<div className="h-full w-full">
					<div className="custom-scrollbar h-full w-full overflow-y-auto">
						<LandingPage activePage={activePage} />
					</div>
				</div>
			);
		case "about-us":
			return (
				<div className="h-full w-full">
					<div className="custom-scrollbar h-full w-full overflow-y-auto">
						<AboutUs activePage={activePage} />
					</div>
				</div>
			);
		case "careers":
			return (
				<div className="h-full w-full">
					<div className="custom-scrollbar h-full w-full overflow-y-auto">
						<Careers />
					</div>
				</div>
			);
		default:
			return null;
		}
	};

	return (
		<div className="h-full w-full relative flex flex-col">
			<ThemeProvider>
				<Navbar sections={sections} onNavigate={scrollToSection} />
			</ThemeProvider>
			<div ref={containerRef} className="horizontal-scroll flex overflow-x-hidden flex-grow">
				{sections.map((section) => (
					<div
						key={section.id}
						id={section.id}
						className={`w-full h-full flex-shrink-0 p-4 ${section.bgColor} flex items-center justify-center z-neg-1`}
					>
						{renderSectionContent(section)}
					</div>
				))}
			</div>
		</div>
	);
};

export default HorizontalScroll;

