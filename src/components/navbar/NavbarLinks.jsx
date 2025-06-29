import React from 'react';
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Resume", section: "resume" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((item, index) => (
        <li key={index} className="group">
          {item.link === "Resume" ? (
            <a
              href="/sahil_resume.pdf"
              download
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {item.link}
              <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
            </a>
          ) : (
            <Link
              to={item.section}
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {item.link}
              <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
