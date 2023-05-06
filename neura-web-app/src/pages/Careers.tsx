import React from "react";
import { useState } from "react";
import CareerCard from "../components/CareerCard";
import "../App.css";
const jobs: Job[] = [
    {
        title: "Software Engineer",
        description: "test",
        details: `The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, nine Minor Outlying Islands,[i] and 326 Indian reservations. The United States is the world's third-largest country by both land and total area.[c] It shares land borders with Canada to its north and with Mexico to its south and has maritime borders with the Bahamas, Cuba, Russia, and other nations.[j] With a population of over 333 million,[k] it is the most populous country in the Americas and the third most populous in the world. The national capital of the United States is Washington, D.C., and its most populous city and principal financial center is New York City.

        Indigenous peoples have inhabited the Americas for thousands of years. Beginning in 1607, British colonization led to the establishment of the Thirteen Colonies in what is now the Eastern United States. They quarreled with the British Crown over taxation and political representation, leading to the American Revolution and proceeding Revolutionary War. The United States declared independence on July 4, 1776, becoming the first nation-state founded on Enlightenment principles of unalienable natural rights, consent of the governed, and liberal democracy. The country began expanding across North America, spanning the continent by 1848. Sectional division surrounding slavery in the Southern United States led to the secession of the Confederate States of America, which fought the remaining states of the Union during the American Civil War (1861–1865). With the Union's victory and preservation, slavery was abolished nationally by the Thirteenth Amendment.

        By 1900, the United States had established itself as a world power, becoming the world's largest economy. After Japan's attack on Pearl Harbor in 1941, the U.S. entered World War II on the Allied side. The aftermath of the war left the United States and the Soviet Union as the world's two superpowers and led to the Cold War. During the Cold War, both countries engaged in a struggle for ideological dominance but avoided direct military conflict. They also competed in the Space Race, which culminated in the 1969 landing of Apollo 11, making the U.S. the first and only nation to ever land humans on the Moon. With the Soviet Union's collapse and the subsequent end of the Cold War in 1991, the United States emerged as the world's sole superpower.

        The United States government is a federal republic and a representative democracy with three separate branches of government. It has a bicameral national legislature composed of the House of Representatives, a lower house; and the Senate, an upper house based on equal representation for each state. Many policy issues are decentralized, with widely differing laws by jurisdiction. The U.S. ranks very highly in international measures of quality of life, income and wealth, economic competitiveness, human rights, innovation, and education; it has low levels of perceived corruption and the highest median income per person of any polity in the world. It has high levels of incarceration and inequality and lacks universal health care. As a melting pot of cultures and ethnicities, the U.S. has been shaped by the world's largest immigrant population.

        A developed country, the American economy accounts for approximately a quarter of global GDP and is the world's largest by GDP at market exchange rates. The United States is the world's largest importer and second-largest exporter. The United States is a founding member of the United Nations, World Bank, International Monetary Fund, Organization of American States, NATO, and is a permanent member of the United Nations Security Council. The U.S. is the foremost military power in the world and a dominant political, cultural, and scientific force internationally.
        Etymology
        Further information: Names of the United States and Names for United States citizens

        The first documentary evidence of the phrase "United States of America" dates back to a letter from January 2, 1776, written by Stephen Moylan to Joseph Reed, George Washington's aide-de-camp. Moylan expressed his wish to go "with full and ample powers from the United States of America to Spain" to seek assistance in the revolutionary war effort.[27][28][29] The first known publication of the phrase "United States of America" was in an anonymous essay in The Virginia Gazette newspaper in Williamsburg, on April 6, 1776.[30]

        By June 1776, the name "United States of America" had appeared in drafts of the Articles of Confederation and Perpetual Union, prepared by John Dickinson[31][32] and of the Declaration of Independence, written by Thomas Jefferson.[31]

        The phrase "United States" was originally plural in American usage. It described a collection of states—e.g., "the United States are..." The singular form became popular after the end of the Civil War and is now standard usage. A citizen of the United States is called an "American". "United States", "American", and "U.S." refer to the country adjectivally ("American values", "U.S. forces"). In English, the word "American" rarely refers to topics or subjects not directly connected with the United States.[33] `,
    },
    {
        title: "Product Manager",
        description: "test",
        details: "details",
    },
    {
        title: "Data Scientist",
        description: "test",
        details: "details",
    },
    {
        title: "Data Scientist",
        description: "test",
        details: "details",
    },
    {
        title: "Data Scientist",
        description: "test",
        details: "details",
    },
    {
        title: "Data Scientist",
        description: "test",
        details: "details",
    },
    {
        title: "Data Scientist",
        description: "test",
        details: "details",
    },
    {
        title: "Data Scientist",
        description: "test",
        details: "details",
    },
    {
        title: "Data Scientist",
        description: "test",
        details: "details",
    },
];

type Job = {
    title: string;
    description: string;
    details: string;
};

const CareersPage = () => {
    const [selectedJobIndex, setSelectedJobIndex] = useState<number | null>(null);

    const handleJobClick = (index: number) => {
        setSelectedJobIndex(index);
    };

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleClick = () => {
        setIsButtonClicked(!isButtonClicked);
    };

    return (
        <div
            className="custom-scrollbar"
            style={{
                position: "relative",
                display: "flex",
                margin: "0",
                height: "100%",
                overflow: "hidden",
                overflowY: "auto",
            }}
        >
            <div className="left-column custom-scrollbar">
                {jobs.map((job, index) => (
                    <CareerCard
                        key={index}
                        job={job}
                        index={index}
                        selectedJobIndex={selectedJobIndex}
                        handleJobClick={handleJobClick}
                    />
                ))}
            </div>
            <div className="details-container" style={{ flex: 2, height: "100%" }}>
                <div
                    className="custom-scrollbar details-container"
                    style={{
                        flex: 2,
                        top: 0,
                        overflow: "auto",
                    }}
                >
                    {selectedJobIndex !== null && (
                        <div
                            className="details-container"
                            style={{
                                borderRadius: "20px",
                                backgroundColor: "white",
                                padding: "20px",
                                color: "black",
                                position: "relative",
                            }}
                        >
                            <h2>{jobs[selectedJobIndex].title}</h2>
                            <p>{jobs[selectedJobIndex].description}</p>
                            <p>{jobs[selectedJobIndex].details}</p>
                            <button
                                className={`apply-now-button ${isButtonClicked ? "clicked" : ""}`}
                                style={{
                                    position: "absolute",
                                    top: "10px",
                                    right: "10px",
                                    backgroundColor: "#3a86ff",
                                    color: "white",
                                    borderRadius: "50px",
                                    padding: "10px 15px",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                                onClick={handleClick}
                            >
                                {isButtonClicked ? "Applied!" : "Apply Now"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CareersPage;

