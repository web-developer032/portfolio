import React from "react";
import ProjectCard from "./ProjectCard";

import Crypto from "../assets/Crypto.png";
import hypepower from "../assets/Hypepower.png";
import Louche from "../assets/Louche.png";
import nextor from "../assets/Nextor.png";
import space from "../assets/Space.png";
import airheads from "../assets/airheads.png";
import budgety from "../assets/budgety.png";
import dexordi from "../assets/dexordi.png";
import dexordiLanding from "../assets/dexordiLanding.png";
import diceGame from "../assets/dice-game.png";
import hostingPage from "../assets/hostingPage.png";
import natours from "../assets/natours.png";
import ninjaPoll from "../assets/ninja-poll.png";
import policat from "../assets/policat.png";
import trillo from "../assets/trillo.png";

import canvasCircular from "../assets/canvas-circular.jpeg";
import canvasCollision from "../assets/canvasCollision.jpeg";
import canvasExpandable from "../assets/canvasExpandableCircles.jpeg";
import canvasFirework from "../assets/canvasFirework.png";
import canvasGalacticLight from "../assets/canvasGalacticLight.png";
import canvasGame from "../assets/canvasGame.png";
import canvasGravity from "../assets/canvasGravity.jpeg";
import canvasTrons from "../assets/canvasTrons.png";

const projectsData = [
  {
    projName: "Natours",
    projLink: "http://webdeveloper032.freecluster.eu/Natours/?i=1",
    projImg: natours,
  },
  // {
  //   projName: "XoomMaps",
  //   projLink: "https://v3.xoommaps.com/",
  //   projImg: xoommaps,
  // },
  // {
  //   projName: "ZeroDocs",
  //   projLink: "https://zerodocs.com/",
  //   projImg: zerodocs,
  // },
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
    projName: "PoliCat",
    projLink: "https://policat-13417.web.app/",
    projImg: policat,
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
    projName: "DexOrdi Landing Page",
    projLink: "https://dexordi-landing.web.app/",
    projImg: dexordiLanding,
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

  {
    projName: "DexOrdi",
    projLink: "https://dexordi-75bef.web.app/",
    projImg: dexordi,
  },
];

const canvasProjectsData = [
  {
    projName: "Canvas Circular Motion",
    projLink: "https://canvas-animation-63dbd.web.app/",
    projImg: canvasCircular,
  },
  {
    projName: "Canvas Firework",
    projLink: "https://canvasfireworks.web.app/",
    projImg: canvasFirework,
  },
  {
    projName: "Canvas Galactic Light",
    projLink: "https://canvasgalacticlight.web.app",
    projImg: canvasGalacticLight,
  },
  {
    projName: "Canvas Game",
    projLink: "https://canvasgame.web.app/",
    projImg: canvasGame,
  },
  {
    projName: "Canvas Gravity",
    projLink: "https://canvasgravity.web.app/",
    projImg: canvasGravity,
  },
  {
    projName: "Canvas Collision",
    projLink: "https://canvasparticlecollision.web.app/",
    projImg: canvasCollision,
  },
  {
    projName: "Canvas Expandables",
    projLink: "https://canvasrandomcircles.web.app/",
    projImg: canvasExpandable,
  },
  {
    projName: "Canvas Trons Show",
    projLink: "https://canvastroncircles.web.app",
    projImg: canvasTrons,
  },
];

const Projects = () => {
  return (
    <section
      name="projects"
      className="w-full  px-4"
      style={{
        backgroundImage: `linear-gradient( -70deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 30%, transparent 30% )`,
        backgroundAttachment: "fixed",
      }}
    >
      <section className="max-w-[1000px] mx-auto w-full mb-8">
        <div className="pb-8">
          <h2 className={`text-4xl font-bold inline border-b-4 text-gray-300 border-violet-700`}>
            Projects
          </h2>
          <p className="py-6">{"//"} Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectsData.map((items, key) => (
            <ProjectCard {...items} key={key} />
          ))}
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto  w-full ">
        <p className="py-6">{"//"} Check out some of my canvas work</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {canvasProjectsData.map((items, key) => (
            <ProjectCard {...items} key={key} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Projects;
