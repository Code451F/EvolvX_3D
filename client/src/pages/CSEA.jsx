import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";

import { sponsors, other_sponsors } from "../constants";

import { StarsCanvas } from "../components";

const ServiceCard = ({ index, title, icon, people, batch }) => (
  <Tilt className="xs:w-[270px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full orange-yellow-gradient p-[1px] rounded-[20px] shadow-card"
    >
      {/* <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // onClick={() => window.open(source_code_link, "_self")}
        className="bg-primary rounded-[20px] py-5 px-12 min-h-[320px] flex justify-evenly items-center flex-col cursor-pointer"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-100 h-100 object-contain"
        />

        <h3 className="text-white text-[24px] font-bold text-center">
          {title}
        </h3>

        <h5 className="text-white text-[18px] text-center">
          {people.map((person) => (
            <ul>{person}</ul>
          ))}
        </h5>

        <h4 className="text-white text-[20px] font-bold text-center">
          {batch}
        </h4>
      </div> */}
    </motion.div>
  </Tilt>
);

const CSEA = () => {
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
            Computer Science <span className="text-[#ffffff]">Department</span>
          </h3>

          <div className="mt-20 flex flex-wrap justify-center gap-20">
            {/* {sponsors.map((sponsor, index) => (
              <ServiceCard key={sponsor.title} index={index} {...sponsor} />
            ))} */}
            <div>
              <li>
              <span>The Department moulds young outstanding engineers who are academically strong in both theory and practicals. It organizes supplementary programs, which include Paper Presentations, Technical seminars and Mock Interviews to prepare the student for a career in the computing field or for graduate study. Special orientation is provided to the staff periodically for updating their acumen and to imbibe the latest technological changes. The staff and students are members of the Computer Society of India.</span>
              </li>
            </div>
          </div>
        </motion.div>
        <StarsCanvas />
      </div>
    </div>
  );
};

export default CSEA;
