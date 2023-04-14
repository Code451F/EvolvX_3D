import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, source_code_link }) => (
  <Tilt className='xs:w-[350px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full orange-yellow-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        onClick={() => window.open(source_code_link, "_self")}
        className='bg-primary rounded-[20px] py-5 px-12 min-h-[320px] flex justify-evenly items-center flex-col cursor-pointer'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-48 h-48 object-contain'
        />

        <h3 className='text-white text-[30px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Individuals who have provided us with their support</p>
        <h2 className={`${styles.sectionHeadText}`}>Team and Sponsors</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          
        </motion.p>
      </div>

      <div className='mt-10 flex flex-wrap justify-center gap-20'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");