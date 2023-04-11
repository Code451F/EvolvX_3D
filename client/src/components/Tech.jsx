import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { motion } from "framer-motion";
import { styles } from "../styles";
// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Those that helped make us a success
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Our Patrons
        </h2>
      </motion.div>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");