import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";

import { main, main_coords, coords, web_team } from "../constants";

import { StarsCanvas } from "../components";

const ServiceCard = ({ name, image, designation, index }) => (
  <Tilt className="xs:w-[300px] w-full">
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
        className="bg-primary rounded-[20px] py-5 px-12 min-h-[320px] flex justify-evenly items-center flex-col cursor-pointer"
      >
        <img
          src={image}
          alt="web-development"
          className="w-100 h-100 object-contain rounded-[100px]"
        />

        <h3 className="text-white text-[24px] font-bold text-center">{name}</h3>

        <h4 className="text-white text-[20px] text-center">
          {designation}
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
          className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-center content-center items-center mb-20`}
        >
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              Evolv<span className="text-[#fe8e00]">Hack</span>
            </h1>
          </div>
        </div>
      </div>

      <div
        className={`xl:mt-0 flex xl:flex-col flex-col items-center overflow-hidden bg-primary relative w-full h-full relative z-0`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex-col text-center mb-20 mt-10 w-3/4 bg-transparent p-8 rounded-2xl border-4 border-[#ff8f00]"
        >
          <h3 className={styles.sectionHeadText}>
            The <span className="text-[#ffffff]">Team</span>
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
        </motion.div>
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Team;
