import React from 'react'
import { Link } from 'react-scroll'

const AboutMeText = () => {
    return (
        <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
            <h2 className="text-6xl text-cyan mb-10">About Me</h2>
            <p>
                I’m Sahil Pal, a skilled full-stack MERN developer with a reputation for strong problem-solving and hands-on expertise in deployment and containerization. I’ve built and deployed multiple real-world applications using MongoDB, Express, React, Node.js, and Docker, ensuring scalable and maintainable solutions. My passion lies in architecting end-to-end web applications, optimizing performance, and crafting seamless user experiences through clean, well-tested code. Outside of coding, I’m a dedicated football enthusiast who loves using every creative opportunity to build unique projects that contribute meaningfully to the world.
            </p>
            <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
                <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-120}
                    to="projects"
                    className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
                >
                    My Projects
                </Link>
            </button>
        </div>
    )
}

export default AboutMeText
