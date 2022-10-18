import React from "react";

export default function ProjectCard({ projName, projLink, projImg }) {
    return (
        <div
            style={{
                backgroundImage: `url(${projImg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div border-2 border-violet-700"
        >
            {/* Hover Effects */}
            <div className="bg-grey opacity-0 group-hover:opacity-100 text-center mb-0">
                <span className="text-xl text-white tracking-wider">{projName}</span>
                <div className="pt-2 text-center">
                    <a href={projLink} target="_new">
                        <button className="text-center rounded-lg px-6 py-2 bg-white text-gray-700 text-sm">
                            Live Demo
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
