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

const styles = {
  transformStyle: "preserve-3d",
  transform: "perspective(1000px)",
  cursor: "pointer ",
};

const options = {
  scale: 1.1,
  speed: 1000,
  max: 10,

  glare: true,
  "max-glare": 0.7,
  // "glare-prerender": false,
};

function Tilt(props) {
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, []);

  return (
    <article ref={tilt} style={styles} className="box pt-6 shadow-md skill-box">
      {props.children}
    </article>
  );
}

function Skill({ img, text }) {
  return (
    <Tilt>
      <img
        className="w-20 h-20 mx-auto"
        src={img}
        alt={`${text} icon`}
        style={{
          transform: "translateZ(20px)",
        }}
      />
      <h3
        className="my-4 font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-white to-blue-600"
        style={{
          transform: "translateZ(20px)",
        }}
      >
        {text}
      </h3>
    </Tilt>
  );
}

const Skills = () => {
  return (
    <section
      name="skills"
      className="w-full px-4"
      style={{
        backgroundImage: `linear-gradient( -70deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 30%, transparent 30% )`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Container */}
      <section className="max-w-[1000px] mx-auto w-full">
        <div>
          <h2
            className={`text-4xl font-bold inline border-b-4 border-violet-700 `}
          >
            Skills
          </h2>
          <p className="py-4">
            {"//"} These are the technologies I've worked with
          </p>
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
