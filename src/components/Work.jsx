import React from "react";

function Work() {
  return (
    <section
      name="work"
      className="w-full  px-4"
      style={{
        backgroundImage: `linear-gradient( -70deg, rgba(109, 40, 217, 0.9) 0%, rgba(109, 40, 217, 0.9) 30%, transparent 30% )`,
        backgroundAttachment: "fixed",
      }}
    >
      <section className="max-w-[1000px] mx-auto w-full mb-8">
        <div className="pb-2">
          <h2
            className={`text-4xl font-bold inline border-b-4 text-gray-300 border-violet-700`}
          >
            Work
          </h2>
          <p className="py-6">{"//"} Previous Work Experience</p>
        </div>

        <section className="work-content-container ">
          <article className="work-content ml-6 mb-8">
            <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
              <span className={`border-l-4 border-violet-700 pl-2 mb-1 block`}>
                Sr Software Engineer (MERN STACK)
              </span>
              <span className="block text-sm pl-3">
                ( Skylinx Technologies - (Oct 2022 - Continue) )
              </span>
            </h3>

            <ul className="text-1xl list-disc ml-6 max-w-3xl">
              <li>
                Developed MERN stack applications, dedicating 40 hours weekly
                for on-time project delivery with code quality.
              </li>
              <li>
                Created responsive UIs using React, Next.js, and ensured
                pixel-perfect designs across devices.
              </li>
              <li>
                Reviewed code collaboratively, providing valuable feedback and
                promoting a teamwork environment.
              </li>
              <li>
                Translated design mockups into functional user interfaces in
                collaboration with UI/UX designers.
              </li>
              <li>
                Code architecture maintainer so that it can be scalable down the
                road
              </li>
              <li>
                Collaborate with (frontend, backend) engineers to design and
                create advanced, elegant efficient systems
              </li>
              <li>
                Conducted thorough testing, debugging, and adopted new
                technologies for continuous enhancement
              </li>
            </ul>
          </article>

          <article className="work-content ml-6 mb-8">
            <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
              <span className={`border-l-4 border-violet-700 pl-2 mb-1 block`}>
                Software Engineer (MERN STACK)
              </span>
              <span className="block text-sm pl-3">
                ( TheHelpDesk (March 2022 - Oct 2022 ) )
              </span>
            </h3>

            <ul className="text-1xl list-disc ml-6 max-w-3xl">
              <li>
                Developed high-quality, reusable UI components to enhance
                application scalability and maintainability.
              </li>
              <li>
                Translated mockup designs into responsive, pixel-perfect web
                applications using HTML, CSS, ReactJS, and Svelte
              </li>
              <li>
                Converted static websites into fully dynamic and interactive web
                applications, improving user engagement and functionality.
              </li>
              <li>
                Integrated RESTful APIs and third-party services to enable
                real-time data rendering and seamless user experiences.
              </li>
            </ul>
          </article>

          <article className="work-content ml-6 mb-8">
            <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
              <span className={`border-l-4 border-violet-700 pl-2 mb-1 block`}>
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
                Collaborate with engineers, and data implementation specialists
                to design and create advanced, elegant efficient systems
              </li>
            </ul>
          </article>

          <article className="work-content ml-6 mb-8">
            <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
              <span className={`border-l-4 border-violet-700 pl-2 mb-1 block`}>
                Frontend Developer
              </span>
              <span className="block text-sm pl-3">
                ( CodeFix (2019-2022) )
              </span>
            </h3>

            <ul className="text-1xl list-disc ml-6 max-w-3xl">
              <li>
                Designed and developed flexible, reusable UI components for
                scalable web applications.
              </li>
              <li>
                Converted UI/UX designs into fully functional, responsive code
                using modern frontend technologies.
              </li>
              <li>
                Implemented dynamic functionalities to enhance user interaction
                and application performance.
              </li>
              <li>
                Transformed static designs into fully interactive and engaging
                web experiences.
              </li>
              <li>
                Developed and integrated RESTful APIs to support dynamic data
                operations and improve application functionality. • Successfully
                implemented API endpoints and managed frontend-backend data
                communication.
              </li>
              <li>
                Collaborated closely with cross-functional teams to ensure
                seamless integration of design, development, and deployment
                processes.
              </li>
            </ul>
          </article>

          <article className="work-content ml-6">
            <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
              <span className="border-l-4 border-violet-700 pl-2 mb-1 block">
                Freelance Software Engineer
              </span>
              <span className="block text-sm pl-3">
                (Self-Employed via Fiverr | 2019 – Present)
              </span>
            </h3>

            <ul className="text-1xl list-disc ml-6 max-w-3xl">
              <li>
                Designed and developed flexible, scalable, and responsive UIs
                for various client projects.
              </li>
              <li>
                Converted complex design mockups into clean, production-ready
                code using ReactJS and TailwindCSS.
              </li>
              <li>
                Built and integrated RESTful APIs for dynamic data handling and
                real-time applications.
              </li>
              <li>
                Developed full-stack MERN applications tailored to diverse
                business needs and industries.
              </li>
              <li>
                Collaborated with clients, engineers, and data specialists to
                deliver efficient, elegant, and scalable software systems.
              </li>
            </ul>
          </article>
        </section>
      </section>
    </section>
  );
}

export default Work;
