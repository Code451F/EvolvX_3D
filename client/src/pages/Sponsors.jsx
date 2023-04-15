import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";

import { sponsors, other_sponsors } from "../constants";

import { StarsCanvas } from "../components";
import { logo, logo_nbg, menu, close, csea } from "../assets";
import azure from '../assets/azurelogo.png'

const ServiceCard = ({ index, title, icon,tagline,link, people, batch}) => (
  
  <Tilt className="xs:w-[300px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full orange-yellow-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <a href={link}>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // onClick={() => window.open(source_code_link, "_self")}
        className="bg-primary rounded-[20px] py-5 px-5 min-h-[320px] flex justify-evenly items-center flex-col "
      >
        <img
          src={icon}
          alt="web-development"
          className="w-90 h-[120px] object-contain pb-4"
        />

        <h3 className="text-white text-[24px] font-bold text-center">
          {title}
        </h3>
        <span className="text-[12px] mb-2">{tagline}</span>

        <h5 className="text-white text-[18px] text-center">
          {people.map((person) => (
            <ul>{person}</ul>
          ))}
        </h5>

        <h4 className="text-white text-[20px] font-bold text-center">
          {batch}
        </h4>
      </div>
      </a>
    </motion.div>
  </Tilt>
);

const ServiceCardOther = ({ index, name, batch }) => (
  <Tilt className="xs:w-[270px] w-full">
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
        // onClick={() => window.open(source_code_link, "_self")}
        className="bg-primary rounded-[20px] py-5 px-5 min-h-[180px] flex justify-evenly items-center flex-col"
      >
        <h3 className="text-white text-[20px] text-center">{name.map((person) => (
            <ul>{person}</ul>
          ))}</h3>

        <h4 className="text-white text-[20px] font-bold text-center">
          {batch}
        </h4>
      </div>
      
    </motion.div>
  </Tilt>
);

const Sponsors = () => {
  return (
    <div>
      <div
        className={
          "bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto"
        }
      >
        <div
          className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row  gap-5 justify-center content-center items-center mb-20`}
        >
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              Evolv<span className="text-[#fe8e00]">X '23</span>
            </h1>
          </div>
        </div>
      </div>

      <div
        className={`xl:mt-0 flex xl:flex-col flex-col items-center overflow-hidden bg-primary w-full h-full relative z-0`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex-col text-center mb-10 mt-10 xs:w-10/12 bg-transparent p-8 rounded-2xl xs:border-4 xs:border-[#ff8f00] xxs:border-transparent"
        >
          <h3 className={styles.sectionHeadText}>
            Our <span className="text-[#ffffff]">Sponsors</span>
          </h3>

          <div className="mt-20 flex flex-wrap justify-center gap-20">
            {sponsors.map((sponsor, index) => (
              <ServiceCard key={sponsor.title} index={index} {...sponsor} />
            ))}
          </div>
          <div className="mt-20 flex flex-wrap justify-center gap-20">
            {other_sponsors.map((sponsor, index) => (
              <ServiceCardOther
                key={sponsor.title}
                index={index}
                {...sponsor}
              />
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

export default Sponsors;
