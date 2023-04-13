import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Computer from "./Computer";

import useWindowDimensions from "./CheckWidth";

const Hero = () => {
  const { height, width } = useWindowDimensions();
  const breakpoint = 700;

  if (width > breakpoint) {
    return (
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#fe8e00]" />
            <div className="w-1 sm:h-80 h-40 orange-line-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              AZURE<span className="text-[#fe8e00]">'23</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              The Tech Fest of the Century <br className="sm:block hidden" />
              Come join us @Amal Jyothi
            </p>
          </div>
        </div>

        <ComputersCanvas />

        {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div> */}
      </section>
    );
  }
  else{
    return (
      <section className={`relative w-full h-full mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#fe8e00]" />
            <div className="w-1 sm:h-80 h-40 orange-line-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Azure<span className="text-[#fe8e00]">'23</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              The Tech Fest of the Century. <br className="sm:block hidden" />
              Come join us @Amal Jyothi
            </p>
          </div>
        </div>

        {/* <ComputersCanvas /> */}
        <div className="pt-[300px]">
          <Computer />
        </div>

        {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href='#about'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div> */}
      </section>
    );
  }
};

export default Hero;
