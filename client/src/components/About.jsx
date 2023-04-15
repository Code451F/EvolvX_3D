import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import useWindowDimensions from "./CheckWidth";

import { FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const { height, width } = useWindowDimensions();
  const breakpoint = 500;
  if (width > breakpoint) {
    return (
      <motion.div variants={fadeIn("", "", index * 0.5, 0.75)}
      onClick={() => window.open(source_code_link, "_self")}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-primary p-5 rounded-2xl sm:w-[360px] w-full border-2 border-[#ff8f00] shadow-card cursor-pointer"
          
        >
          <div 
            
          className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              {/* <div
                
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-[#ff8f00]"
              > */}
                {/* <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                /> */}
                {/* <p className="object-cover rounded-2xl text-[#ff8f00] text-[22px]">
                  <FiArrowUpRight />
                </p>
              </div> */}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  } else {
    return (
      <div>
        <div 
        onClick={() => window.open(source_code_link, "_self")}
        className="bg-primary p-5 rounded-2xl sm:w-[360px] w-full border-2 border-[#ff8f00] shadow-card">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              {/* <div
                
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-[#ff8f00]"
              > */}
                {/* <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                /> */}
                {/* <p className="object-cover rounded-2xl text-[#ff8f00] text-[22px]">
                  <FiArrowUpRight />
                </p>
              </div> */}
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

const About = () => {
  const { height, width } = useWindowDimensions();
  const breakpoint = 500;
  if (width > breakpoint) {
    return (
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>What is EvolvX'23 ?</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <p>
          EvolvX '23 is a highly anticipated technical fest organized by the Computer Science and Engineering Association of Amal Jyothi College of Engineering. This event is specially curated for technology enthusiasts, students, and professionals to come together and showcase their innovative ideas, technical skills, and creativity. 
         </p>
         <p>
          This year, EvolvX '23 is scheduled to take place on the 24th of April 2023, and promises to be an exciting and engaging event.
          The fest will feature a plethora of competitions covering a wide range of topics related to computer science and engineering.
          </p>
        </motion.p>

        <motion.p variants={fadeIn("", "", 0.1, 1)}>
          <div className="mt-20 flex flex-wrap gap-7 justify-center items-center">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </motion.p>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>What is EvolvX'23 ?</h2>
        </div>

        <div className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        <p>
          EvolvX '23 is a highly anticipated technical fest organized by the Computer Science and Engineering Association of Amal Jyothi College of Engineering. This event is specially curated for technology enthusiasts, students, and professionals to come together and showcase their innovative ideas, technical skills, and creativity. 
         </p>
         <p>
          This year, EvolvX '23 is scheduled to take place on the 24th of April 2023, and promises to be an exciting and engaging event.
          The fest will feature a plethora of competitions covering a wide range of topics related to computer science and engineering.
          </p>
        </div>

        <div>
          <div className="mt-20 flex flex-wrap gap-7 justify-center items-center">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default SectionWrapper(About, "about");
