import React, { useRef } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion, useScroll, useSpring } from "framer-motion";

const projects = [
  { name: "DevDuels", year: "May 2025", align: "right", image: "/images/website-img-1.jpg", link: "https://github.com/Soham271/DevDuel.git" },
  { name: "Hire-Nest", year: "April 2025", align: "left", image: "/images/website-img-2.webp", link: "https://github.com/sahilforkshere/HireNest-Job_Portal.git" },
  { name: "Job Auto Filler Extension", year: "Jan 2025", align: "right", image: "/images/website-img-3.jpg", link: "https://github.com/sahilforkshere/Job_Application_Auto-filler.git" },
];

const ProjectsMain = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div id="projects" className="relative max-w-[1200px] mx-auto px-4 py-12">
      <ProjectsText />

      <div ref={containerRef} className="relative space-y-20">
        {/* Animated vertical line grows with scroll */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-1/2 top-0 transformed -translate-x-1/2 w-1 bg-blue-500 origin-top h-full"
        />

        {/* Project cards */}
        {projects.map((project, i) => (
          <div key={i} className="relative">
            <SingleProject {...project} />
            {/* Dot marker aligned to the line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full top-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
