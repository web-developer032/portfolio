import React from "react";

function Work() {
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
            <section className="max-w-[1000px] mx-auto w-full mb-8">
                <div className="pb-2">
                    <h2 className="text-4xl font-bold inline border-b-4 text-gray-300 border-violet-700">
                        Work
                    </h2>
                    <p className="py-6">{"//"} Previous Work Experience</p>
                </div>

                <section className="work-content-container ">
                    <article className="work-content ml-6 mb-8">
                        <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
                            <span className="border-l-4 border-violet-700 pl-2 mb-1 block">
                                Sr Software Engineer
                            </span>
                            <span className="block text-sm pl-3">
                                ( Skylinx Technologies - (Oct 2022 - Continue) )
                            </span>
                        </h3>

                        <ul className="text-1xl list-disc ml-6 max-w-3xl">
                            <li>Team Lead</li>
                            <li>Design Flexible UI</li>
                            <li>Rest API Developer</li>
                            <li>API Integeration (Data Manager)</li>
                            <li>
                                Code architecture maintainer so that it can be scalable down the
                                road
                            </li>
                            <li>
                                Collaborate with (frontend, backend) engineers to design and create
                                advanced, elegant efficient systems
                            </li>
                        </ul>
                    </article>

                    <article className="work-content ml-6 mb-8">
                        <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
                            <span className="border-l-4 border-violet-700 pl-2 mb-1 block">
                                Software Engineer (MERN STACK)
                            </span>
                            <span className="block text-sm pl-3">
                                ( TheHelpDesk (Remote: March 2022 - Oct 2022 ) )
                            </span>
                        </h3>

                        <ul className="text-1xl list-disc ml-6 max-w-3xl">
                            <li>Design Flexible UI</li>
                            <li>Convert Design to Code</li>
                            <li>Rest API Developer</li>
                            <li>
                                Code architecture maintainer so that it can be scalable down the
                                road
                            </li>
                            <li>
                                Collaborate with engineers, and data implementation specialists to
                                design and create advanced, elegant efficient systems
                            </li>
                        </ul>
                    </article>

                    <article className="work-content ml-6 mb-8">
                        <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
                            <span className="border-l-4 border-violet-700 pl-2 mb-1 block">
                                Sr Frontend Engineer
                            </span>
                            <span className="block text-sm pl-3">
                                ( ZonedWeb (Remote: June 2020 - Continue ) )
                            </span>
                        </h3>

                        <ul className="text-1xl list-disc ml-6 max-w-3xl">
                            <li>Design Flexible UI</li>
                            <li>Convert Design to Code</li>
                            <li>
                                Code architecture maintainer so that it can be scalable down the
                                road
                            </li>
                            <li>
                                Collaborate with engineers, and data implementation specialists to
                                design and create advanced, elegant efficient systems
                            </li>
                        </ul>
                    </article>

                    <article className="work-content ml-6 mb-8">
                        <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
                            <span className="border-l-4 border-violet-700 pl-2 mb-1 block">
                                Frontend Developer
                            </span>
                            <span className="block text-sm pl-3">( CodeFix (2019-2022) )</span>
                        </h3>

                        <ul className="text-1xl list-disc ml-6 max-w-3xl">
                            <li>Design Flexible UI</li>
                            <li>Convert Design to Code</li>
                            <li>Implemented Dynamic functionalities</li>
                            <li>Conversion of static designs to interactive</li>
                            <li>REST APIs</li>
                        </ul>
                    </article>

                    <article className="work-content ml-6">
                        <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
                            <span className="border-l-4 border-violet-700 pl-2 mb-1 block">
                                Fiverr
                            </span>
                            <span className="block text-sm pl-3">
                                ( Freelancer (2019 - Continue) )
                            </span>
                        </h3>

                        <ul className="text-1xl list-disc ml-6 max-w-3xl">
                            <li>Design Flexible UI</li>
                            <li>Convert Design to Code</li>
                            <li>REST APIs</li>
                            <li>MERN STACK Apps</li>
                            <li>
                                Collaborate with engineers, and data implementation specialists to
                                design and create advanced, elegant efficient systems
                            </li>
                        </ul>
                    </article>
                </section>
            </section>
        </section>
    );
}

export default Work;
