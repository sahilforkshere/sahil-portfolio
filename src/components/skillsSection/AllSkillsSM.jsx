import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaAndroid,
  FaApple,
  FaLinux,
  FaNpm
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiGo,
  SiC
} from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "NextJS", icon: SiNextdotjs },
  { skill: "TailwindCSS", icon: SiTailwindcss },
  { skill: "Docker", icon: FaDocker },
  { skill: "Golang", icon: SiGo },
  { skill: "Python", icon: SiPython },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "C++", icon: CgCPlusPlus },
  { skill: "Git", icon: FaGitAlt },
  { skill: "Android", icon: FaAndroid },
  { skill: "iOS", icon: FaApple },
  { skill: "Linux", icon: FaLinux },
  { skill: "npm", icon: FaNpm },
  { skill: "C / Clang", icon: SiC },
];


const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
