import React from "react";
import ProjectCard from "./ProjectCard";

import trillo from "../assets/trillo.png";
import natours from "../assets/natours.png";
import Louche from "../assets/Louche.png";
import nextor from "../assets/Nextor.png";
import Crypto from "../assets/Crypto.png";
import hostingPage from "../assets/hostingPage.png";
import space from "../assets/Space.png";
import hypepower from "../assets/Hypepower.png";
import airheads from "../assets/airheads.png";
import ninjaPoll from "../assets/ninja-poll.png";
import diceGame from "../assets/dice-game.png";
import budgety from "../assets/budgety.png";

const projectsData = [
    {
        projName: "Natours",
        projLink: "http://webdeveloper032.freecluster.eu/Natours/?i=1",
        projImg: natours,
    },
    {
        projName: "Booking Hotel Landing Page",
        projLink: "http://webdeveloper032.freecluster.eu/Trillo/?i=1",
        projImg: trillo,
    },
    {
        projName: "Real Estate Template",
        projLink: "http://webdeveloper032.freecluster.eu/Nextor/?i=1",
        projImg: nextor,
    },
    {
        projName: "Crypto Website",
        projLink: "https://cryptodesign.netlify.app/",
        projImg: Crypto,
    },
    {
        projName: "Louche Portfolio",
        projLink: "http://webdeveloper032.freecluster.eu/Portfolio-Louche/",
        projImg: Louche,
    },
    {
        projName: "Hosting Page",
        projLink: "http://webdeveloper032.freecluster.eu/Hosting-Page/",
        projImg: hostingPage,
    },
    {
        projName: "Dice Game",
        projLink: "https://dice-game-521db.web.app/",
        projImg: diceGame,
    },
    {
        projName: "Budgety App",
        projLink: "http://webdeveloper032.freecluster.eu/Budgety/",
        projImg: budgety,
    },
    {
        projName: "Space Project",
        projLink: "https://spaceproject-4c47d.web.app/",
        projImg: space,
    },
    {
        projName: "HypePower",
        projLink: "https://hypepower-8f5bc.web.app/",
        projImg: hypepower,
    },
    {
        projName: "AirHeads",
        projLink: "https://www.airheads.asia/",
        projImg: airheads,
    },

    {
        projName: "Ninja Poll",
        projLink: "https://ninja-poll-aa2a5.web.app",
        projImg: ninjaPoll,
    },
];

const Work = () => {
    return (
        <section
            name="work"
            className="w-full  px-4"
            style={{
                backgroundImage:
                    "linear-gradient( -70deg, rgba(109, 40, 217, 0.9) 0%, rgba(109, 40, 217, 0.9) 30%, transparent 30% )",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="max-w-[1000px] mx-auto  w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-violet-700">
                        Work
                    </p>
                    <p className="py-6">{"//"} Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projectsData.map((items, key) => (
                        <ProjectCard {...items} key={key} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
