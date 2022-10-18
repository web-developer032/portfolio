import React from "react";

const About = () => {
    return (
        <section
            name="about"
            className="w-full h-screen"
            // #6d28d9
            style={{
                backgroundImage:
                    "linear-gradient( -70deg, rgba(109, 40, 217, 0.9) 0%, rgba(109, 40, 217, 0.9) 30%, transparent 30% )",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-violet-700 ">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <article className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
                    <div className="text-left text-4xl font-bold  bg-violet-700 p-4 px-8 text-white skew-x-12">
                        <p className="-skew-x-2">
                            Hi. I'm Mubasher, nice to meet you. Please take a look around.
                        </p>
                    </div>
                    <div className="bg-white p-4 px-8 text-gray-900 text-left skew-x-12">
                        <p className="-skew-x-2">
                            I am passionate about building excellent websites & web applications
                            according to clients requirements. Which are ranging from individuals
                            and small-businesses all the way to large enterprise corporations. What
                            would you do if you had a expert web developer available at your
                            fingertips?
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default About;
