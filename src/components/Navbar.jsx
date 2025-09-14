import React, { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import Resume from "../assets/Sr. Software Engineer - Mubasher - CV.pdf";
import Logo from "../assets/logo.svg";

const LINKS = [
  {
    link: "home",
    label: "Home",
  },
  {
    link: "about",
    label: "About",
  },
  {
    link: "skills",
    label: "Skills",
  },
  {
    link: "work",
    label: "Work",
    id: "has-work-link",
  },
  {
    link: "projects",
    label: "Projects",
  },
  {
    link: "contact",
    label: "Contact",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <section className="z-50 fixed w-full  flex justify-between items-center px-4 py-2 bg-[#0a192fdc] text-gray-300">
      <div style={{ borderRadius: "50%" }}>
        <img src={Logo} alt="Logo_Image" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {LINKS.map((link) => {
          return (
            <li
              key={link.link}
              id={link.id}
              className={`hover:text-violet-700 hover:border-b-2 hover:border-violet-700 border-b-2 border-transparent`}
            >
              <Link to={link.link} smooth={true} duration={500}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : `absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center`
        }
      >
        {LINKS.map((link) => {
          return (
            <li
              key={link.link}
              className={`py-6 text-2xl md:text-4xl hover:text-violet-700 hover:border-b-2 hover:border-violet-700 border-b-2 border-transparent`}
            >
              <Link
                onClick={handleClick}
                to={link.link}
                smooth={true}
                duration={500}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Social icons */}
      <div className=" lg:flex fixed flex-col top-[35%] right-0">
        <ul>
          <li className=" h-[40px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#2651a4]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://pk.linkedin.com/in/expert-mernstack-developer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li className=" h-[40px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/web-developer032"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li className=" h-[40px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#ed143d]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:mubasherali0331@gmail.com"
            >
              <HiOutlineMail size={20} />
            </a>
          </li>
          <li className=" h-[40px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
            >
              <BsFillPersonLinesFill size={20} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
