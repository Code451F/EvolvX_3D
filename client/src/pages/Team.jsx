import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";

import { main, main_coords, coords, web_team, event_teams } from "../constants";

import { StarsCanvas } from "../components";
import { logo, logo_nbg, menu, close, csea } from "../assets";
import azure from '../assets/azurelogo.png'

const ServiceCard = ({ name, image, designation, area, index }) => (
  <Tilt className="xs:w-[290px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full orange-yellow-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}

        className="bg-primary rounded-[20px] py-5 px-12 min-h-[320px] flex justify-evenly items-center flex-col"
      >
        <img
          src={image}
          alt="web-development"
          className="w-32 h-32 object-contain rounded-[100px]"
        />

        <h3 className="text-white text-[22.3px] font-bold text-center">{name}</h3>

        <h4 className="text-white text-[20px] text-center">
          {designation}
          
        </h4>
        <h4 className="text-white text-[20px] text-center">
          {area}
          
        </h4>
      </div>
    </motion.div>
  </Tilt>
);

const ServiceCardTeam = ({ names, event, index }) => (
  <Tilt className="xs:w-[320px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full orange-yellow-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-primary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col cursor-pointer"
      >
        <h3 className={`${styles.descriptionHeadText}text-white text-[24px] font-bold text-center`}>{event}</h3>

        <h4 className="text-white text-[20px] text-center mt-5">
        {names.map((person) => (
            <ul>{person}</ul>
          ))}
        </h4>
      </div>
    </motion.div>
  </Tilt>
);

const Team = () => {
  return (
    <div>
      <div
        className={
          "bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto"
        }
      >
        <div
          className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5 justify-center content-center items-center mb-20`}
        >
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              CSE <span className="text-[#fe8e00]"> Association</span>
            </h1>
          </div>
        </div>
      </div>

      <div
        className={`xl:mt-0 flex xl:flex-col flex-col items-center overflow-hidden bg-primary relative w-full h-full z-0`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex-col text-center mb-10 mt-10 xs:w-10/12 bg-transparent p-8 rounded-2xl xs:border-4 xs:border-[#ff8f00] xxs:border-transparent"
        >
          <h3 className={styles.sectionHeadText}>
            Core <span className="text-[#ffffff]">Team</span>
          </h3>

          <div className="mt-20 flex flex-wrap justify-center gap-20">
            {main.map((sponsor, index) => (
              <ServiceCard key={sponsor.title} index={index} {...sponsor} />
            ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-20">
            {main_coords.map((sponsor, index) => (
              <ServiceCard key={sponsor.title} index={index} {...sponsor} />
            ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-20">
            {coords.map((sponsor, index) => (
              <ServiceCard key={sponsor.title} index={index} {...sponsor} />
            ))}
          </div>

          <div className={`${styles.sectionHeadText} mt-20`}>
            Web <span className="text-[#ffffff]">Team</span>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-20">
            {web_team.map((sponsor, index) => (
              <ServiceCard key={sponsor.title} index={index} {...sponsor} />
            ))}
          </div>

          <div className={`${styles.sectionHeadText} mt-20`}>
            Event <span className="text-[#ffffff]">Coordinators</span>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-20">
            {event_teams.map((sponsor, index) => (
              <ServiceCardTeam key={sponsor.title} index={index} {...sponsor} />
            ))}
          </div>
        </motion.div>
        <div className={'bg-transparent bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto'}>
        <div  className={`relative  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-20 justify-center`}>
          <div className={" flex-row justify-center align-center w-[180px] h-[180px]"}>
           <img src={csea} alt='logo' className='object-contain mt-6'/>
          </div>
          <div className={" flex-row justify-center align-center w-[300px] h-[200px]"}>
           <img src={logo} alt='logo' className='object-contain xl:mt-16 xl:ml-4 xxs:mt-8 '/>
          </div>          
          <div className={" flex-row justify-center align-center w-[200px] h-[100px] mb-5 "}>
           <img src={azure} alt='logo' className='object-contain mt-12 xxs:mt-8'/>
          </div>
        </div>
      </div> 
      <StarsCanvas/>
      </div>

</div> 
  );
};

export default Team;
