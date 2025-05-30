import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import MubasherPic from "../assets/Mubasher.png";

const Home = () => {
  return (
    <section
      name="home"
      className="w-full h-screen px-8"
      style={{
        backgroundImage: `linear-gradient( -70deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 30%, transparent 30% )`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
        <p className={`text-violet-800`}>Hi, myself</p>
        <h1 className={`text-4xl sm:text-7xl font-bold text-[#ccd6f6] mb-2`}>
          Mubasher Mukhtar
        </h1>
        <h2 className={`text-3xl sm:text-4xl font-bold text-[#8892b0]`}>
          &lang; MERN STACK DEVELOPER / &rang;
        </h2>
        <p className={`text-[#8892b0] py-4 max-w-[700px]`}>
          Specialized in building exceptional, digital experienced MERN-STACK
          Web Applications.
        </p>

        <button
          onClick={() => {
            document.querySelector("#has-work-link a").click();
          }}
          className={`text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-900 hover:border-violet-900 w-max group`}
        >
          View Work
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3 " />
          </span>
        </button>

        <figure className="hidden lg:block">
          <img
            src={MubasherPic}
            alt="Mubasher"
            className="border-b-4 border-r-4 border-purple-600 rounded-full absolute right-0 -translate-x-1/2 top-1/2 -translate-y-1/2 w-1/4"
          />
        </figure>
      </div>
    </section>
  );
};

export default Home;
