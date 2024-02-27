import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Tailwind from "../assets/tailwind.png";
import JavaScript from "../assets/javascript.png";
import ReactIcon from "../assets/react.png";
import Redux from "../assets/redux.svg";
import Svelte from "../assets/svelte-icon.svg";
import NextJS from "../assets/next-js.svg";
import Axios from "../assets/axios.svg";
import Node from "../assets/node.png";
import GraphQL from "../assets/GraphQL.svg";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Mongo from "../assets/mongo.png";
import SQL from "../assets/sql.png";
import { borderColor, theme } from "../utils/colors";

let skills = [
  {
    img: HTML,
    text: "HTML",
  },
  {
    img: CSS,
    text: "CSS",
  },
  {
    img: Tailwind,
    text: "Tailwind",
  },
  {
    img: JavaScript,
    text: "JavaScript",
  },
  {
    img: ReactIcon,
    text: "ReactJS",
  },
  {
    img: Redux,
    text: "Redux",
  },
  {
    img: Svelte,
    text: "Svelte",
  },
  {
    img: NextJS,
    text: "NextJS",
  },
  {
    img: Axios,
    text: "Axios",
  },
  {
    img: Node,
    text: "NodeJS",
  },
  {
    img: GraphQL,
    text: "GraphQL",
  },
  {
    img: Mongo,
    text: "MongoDB",
  },
  {
    img: SQL,
    text: "SQL",
  },
  {
    img: FireBase,
    text: "Firebase",
  },
  {
    img: GitHub,
    text: "GitHub",
  },
];

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <article ref={tilt} {...rest}>
      {props.children}
    </article>
  );
}

function Skill({ img, text }) {
  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30,
  };

  return (
    <Tilt className="box" options={options}>
      <div
        className="pt-6 shadow-md skill-box"
        style={{
          cursor: "pointer ",
        }}
      >
        <img className="w-20 h-20 mx-auto" src={img} alt={`${text} icon`} />
        <h3 className="my-4 font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-white to-blue-600">
          {text}
        </h3>
      </div>
    </Tilt>
  );
}

const Skills = () => {
  return (
    <section
      name="skills"
      className="w-full px-4"
      style={{
        backgroundImage: `linear-gradient( -70deg, ${theme.colorTertiary} 0%, ${theme.colorTertiary} 30%, transparent 30% )`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Container */}
      <section className="max-w-[1000px] mx-auto w-full">
        <div>
          <h2 className={`text-4xl font-bold inline border-b-4 border-${borderColor}-700 `}>
            Skills
          </h2>
          <p className="py-4">{"//"} These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill) => (
            <Skill {...skill} key={skill.text} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Skills;
