import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Computer from "./Computer";
import azure from "../assets/azurelogo.png";
import azure_black from "../assets/azurelogo_black.png";
import { Link } from "react-router-dom";
// import button from "../button"


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

          <div className="flex object-fill w-[300px]  ">
            {/* <h1 className={`${styles.heroHeadText} text-white`}>
              AZURE<span className="text-[#fe8e00]">'23</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              The Tech Fest of the Century <br className="sm:block hidden" />
              Come join us @Amal Jyothi
            </p> */}
            <img src={azure_black}></img>
            
          </div>

        {/* <div className="relative items-center justify-center left-[200px] top-[50px]  text-[20px] border-4 rounded-[12px] px-4 py-4 border-[#ff6f00] font-bold text-[#fd9d3c]">
        PRIZES WORTH 1.2 LAKHS!
        </div> */}
      
          {/* <Link  to='#about'> */}
            {/* <button className="relative text-xl">
              <div className="absolute inset-x-0 h-full -bottom-2 bg-[#ff6f00] border border-black rounded-lg"></div>
              <div className="relative rounded-lg bg-[#fd9d3c] py-4 px-10 transition transform duration-200 hover:translate-y-2 outline-none text-white font-bold border border-black">Register Now!</div>
            </button> */}
          {/* </Link> */}
          
          
          
      </div>

            

        <ComputersCanvas />
        {/* <button className="relative items-center justify-center left-[580px]  w-[250px] h-[100px] px-4 text-[22px] font-bold border-2 rounded-[200px] border-[#fd9d3c] hover:bg-tertiary hover:cursor-pointer">See All Events</button> */}
        

        <div className='absolute xs:bottom-10 left-[1050px] top-[-320px] text-[23px]   flex justify-center items-center'>
          <a href='#about'>
            
            <button className="relative text-xl">
            <div className="absolute inset-x-0 h-[50px] -bottom-2  border-2 border-white rounded-lg border-t-0 rounded-t-none"></div>
            <div className="relative rounded-lg py-4 px-10 transition transform duration-200 hover:translate-y-2 outline-none text-white font-bold border-2 border-white hover:bg-[#fd9d3c]  ">Register Now!</div>
            </button>
          </a>
        </div>
      </section>
    );
  }
  else{
    return (
      <section className={`relative w-full h-full mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start justify-center gap-5`}
        >
          {/* <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#fe8e00]" />
            <div className="w-1 sm:h-80 h-40 orange-line-gradient" />
          </div> */}

          <div className="flex flex-col gap-5 object-fill items-center justify-center w-[180px] pb-[300px]">
          <img src={azure}></img>
            {/* <h1 className={`${styles.heroHeadText} text-white`}>
              Azure<span className="text-[#fe8e00]">'23</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              The Tech Fest of the Century. <br className="sm:block hidden" />
              Come join us @Amal Jyothi
            </p> */}
             <div className=' text-[23px]   flex justify-center items-center'>
          <a href='#about'>
            
            <button className="relative text-xl">
            <div className="absolute inset-x-0 h-full -bottom-2 bg-[#ff6f00] border border-black rounded-lg"></div>
            <div className="relative rounded-lg bg-[#fd9d3c] py-4 px-6 transition transform duration-200 transition:translate-y-2 outline-none text-white font-bold border border-black  ">Register </div>
            </button>
          </a>
        </div>
          </div>
          {/* <div className="items-center justify-center text-center w-[150px]   text-[18px] border-4 rounded-[12px] px-2 py-2 border-[#ff6f00] font-bold text-[#fd9d3c]">
        PRIZES WORTH 1.2 LAKHS!
        </div> */}
        </div>
        {/* left-[280px]  */}
        {/* relative  */}
        
        <div className="pt-[370px]"> 
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
