import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import AboutUs from "./AboutUs";

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
		bgColor: "bg-gradient-to-b from-blue-400 via-blue-600 to-purple-800",
		blendColor: "bg-yellow-600",
	},
	{
		id: "home",
		title: "Home",
		bgColor: "bg-gradient-to-b from-blue-400 via-blue-600 to-purple-800",
		blendColor: "bg-blue-600",
	},
	{
		id: "careers",
		title: "Careers",
		bgColor: "bg-gradient-to-b from-blue-400 via-blue-600 to-purple-800",
		blendColor: "bg-green-600",
	},
	// Add more sections as needed
];

const HorizontalScroll: React.FC = () => {
	const [currentSection, setCurrentSection] = useState(Math.floor(sections.length / 2));
	const containerRef = useRef<HTMLDivElement>(null);

	const scrollToSection = (index: number, smooth = true) => {
		const target = document.getElementById(sections[index].id);

		if (target && containerRef.current) {
			containerRef.current.scrollTo({
				left: target.offsetLeft,
				behavior: smooth ? "smooth" : "auto",
			});
			setCurrentSection(index);
		}
	};

	useEffect(() => {
		scrollToSection(currentSection, false);
	}, []);

	const renderSectionContent = (section: SectionProps) => {
		switch (section.id) {
		case "home":
			return <LandingPage />;
		case "about-us":
			return <AboutUs />;
		case "careers":
			return (
				<div
					key={section.id}
					id={section.id}
					className={`w-full h-full flex-shrink-0 p-4 ${section.bgColor} blended-background flex items-center justify-center`}
				>
					<div>
						<h2 className="text-3xl font-bold mb-4">{section.title}</h2>
					</div>
				</div>
			);
		default:
			return null;
		}
	};

	return (
		<div className="h-full w-full relative">
			<Navbar sections={sections} onNavigate={scrollToSection} />
			<div ref={containerRef} className="horizontal-scroll flex overflow-x-hidden">
				{sections.map((section, index) => (
					<div
						key={section.id}
						id={section.id}
						className={`w-full h-full flex-shrink-0 p-4 ${section.bgColor} blended-background flex items-center justify-center`}
					>
						{renderSectionContent(section)}
						{index < sections.length - 1 && (
							<div
								className={`absolute top-0 right-0 w-1/2 h-full ${
									sections[index + 1].blendColor
								} blended-background pointer-events-none`}
								style={{ zIndex: -1 }}
							></div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default HorizontalScroll;
