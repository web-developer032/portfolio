import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Tailwind from "../assets/tailwind.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import Svelte from "../assets/svelte-icon.svg";
import GitHub from "../assets/github.png";
import Mongo from "../assets/mongo.png";

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
        img: JavaScript,
        text: "JavaScript",
    },
    {
        img: Tailwind,
        text: "Tailwind",
    },
    {
        img: ReactImg,
        text: "ReactJS",
    },
    {
        img: Svelte,
        text: "Svelte",
    },
    {
        img: Node,
        text: "NodeJS",
    },
    {
        img: Mongo,
        text: "MongoDB",
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
        <div ref={tilt} {...rest}>
            {props.children}
        </div>
    );
}

function Skill({ img, text }) {
    const options = {
        scale: 1.2,
        speed: 1000,
        max: 30,
    };

    return (
        <>
            <Tilt className="box" options={options}>
                <div
                    className="pt-6 shadow-md skill-box"
                    style={{
                        cursor: "pointer ",
                    }}
                >
                    <img className="w-20 h-20 mx-auto" src={img} alt="HTML icon" />
                    <p className="my-4 text-blue-700">{text}</p>
                </div>
            </Tilt>
        </>
    );
}

const Skills = () => {
    return (
        <section
            name="skills"
            className="w-full px-4"
            style={{
                backgroundImage:
                    "linear-gradient( -70deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 30%, transparent 30% )",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto w-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-violet-700 ">
                        Skills
                    </p>
                    <p className="py-4">{"//"} These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    {/* {console.log(skills[0].img)}
                    {skills.map((skill, i) => (
                        <Skill img={skill.img.toString()} text={skill.text} key={i} />
                    ))} */}

                    {skills.map((skill) => (
                        <Skill {...skill} key={skill.text} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
