import React from "react";

const workExperiences = [
  {
    title: "Sr Software Engineer (MERN STACK)",
    company: "Skylinx Technologies",
    duration: "Oct 2022 - Continue",
    responsibilities: [
      "Developed MERN stack applications, dedicating 40 hours weekly for on-time project delivery with code quality.",
      "Created responsive UIs using React, Next.js, ensuring pixel-perfect designs across devices.",
      "Reviewed code collaboratively, providing valuable feedback and promoting a teamwork environment.",
      "Translated design mockups into functional user interfaces in collaboration with UI/UX designers.",
      "Maintained scalable code architecture.",
      "Collaborated with frontend and backend engineers to create advanced, efficient systems.",
      "Conducted thorough testing, debugging, and adopted new technologies for continuous enhancement.",
    ],
  },
  {
    title: "Software Engineer (MERN STACK)",
    company: "TheHelpDesk",
    duration: "March 2022 - Oct 2022",
    responsibilities: [
      "Developed high-quality, reusable UI components to enhance application scalability and maintainability.",
      "Translated mockup designs into responsive web applications using HTML, CSS, ReactJS, and Svelte.",
      "Converted static websites into dynamic web applications, improving user engagement.",
      "Integrated RESTful APIs and third-party services for real-time data rendering.",
    ],
  },
  {
    title: "Sr Frontend Engineer",
    company: "ZonedWeb (Remote)",
    duration: "June 2020 - Continue",
    responsibilities: [
      "Designed flexible UIs.",
      "Converted designs to code.",
      "Maintained scalable code architecture.",
      "Collaborated with engineers and data specialists to build efficient systems.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "CodeFix",
    duration: "2019 - 2022",
    responsibilities: [
      "Designed and developed reusable UI components for scalable web applications.",
      "Converted UI/UX designs into fully functional, responsive code.",
      "Implemented dynamic functionalities for enhanced user interaction.",
      "Transformed static designs into interactive web experiences.",
      "Developed and integrated RESTful APIs to support dynamic operations.",
      "Collaborated cross-functionally to ensure seamless integration.",
    ],
  },
  {
    title: "Freelance Software Engineer",
    company: "Self-Employed via Fiverr",
    duration: "2019 – Present",
    responsibilities: [
      "Designed and developed flexible, scalable, responsive UIs for client projects.",
      "Converted complex designs into production-ready code using ReactJS and TailwindCSS.",
      "Built and integrated RESTful APIs for real-time applications.",
      "Developed full-stack MERN applications tailored to diverse business needs.",
      "Collaborated with clients and engineers to deliver efficient software systems.",
    ],
  },
];

function Work() {
  return (
    <section
      name="work"
      className="w-full px-4"
      style={{
        backgroundImage:
          "linear-gradient(-70deg, rgba(109, 40, 217, 0.9) 0%, rgba(109, 40, 217, 0.9) 30%, transparent 30%)",
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

        <section className="work-content-container">
          {workExperiences.map((work, idx) => (
            <article key={idx} className="work-content ml-6 mb-8">
              <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
                <span className="border-l-4 border-violet-700 pl-2 mb-1 block">
                  {work.title}
                </span>
                <span className="block text-sm pl-3">
                  ({work.company} - {work.duration})
                </span>
              </h3>
              <ul className="text-1xl list-disc ml-6 max-w-3xl">
                {work.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </section>
    </section>
  );
}

export default Work;
