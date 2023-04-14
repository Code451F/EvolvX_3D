import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";
import csgo from "../assets/csgo.jpg"
const Gaming = () => {
  return (
    <div>
      <div className={'bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto'}>
        <div  className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5 justify-center content-center items-center mb-20`}>
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              CS<span className='text-[#fe8e00]'>GO</span> '23
            </h1>
          </div>
        </div>
      </div> 

      <div className={`xl:mt-0 flex xl:flex-col flex-col items-center overflow-hidden bg-primary w-full h-full relative z-0`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className='flex-col text-center mb-5 mt-10 xs:w-3/4 bg-transparent p-8 rounded-2xl border-4 xs:border-[#ff8f00] xxs:border-transparent'
        >
          <p className={styles.sectionSubText}>Guidelines and Regulation</p>
          <h3 className={styles.sectionHeadText}>CSGO <span className='text-[#ffffff]'>TOURNAMENT</span></h3>
          
          <div className="flex xl:flex-row pt-[35px] xxs:flex-col items-center">
            <div className="xl:w-[600px] xxs:w-[270px]">
                <img src={csgo} className="border-4 border-[#ff8f00] rounded-xl mt-[15px] "></img>
                <button
            type='submit'
            className='bg-tertiary py-3 mt-[25px] px-4 rounded-xl outline-none w-[180px] h-[] text-[23px]  text-white font-bold shadow-md shadow-primary mb-5'
          > REGISTER
          </button>
            </div>
            <div className="xl:pl-[50px] mt-4 pr-2 xxs:pl-0 ">
          <h4 className={`${styles.descriptionHeadText} mt-2`}>OVERVIEW</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Are you an avid first-person shooter enthusiast? Do you find yourself playing competitive shooters in your free time? Sign up today and join us for the most thrilling CSGO tournament of the year 
              where participants can prove their skills in a 5v5 match. Teams who are interested may register here. Every match is a knockout match, and each match will be approximately 20-30 minutes each.
            {/* </p> */}
          
           
            </p>
          
          <h4 className={`${styles.descriptionHeadText} mt-2`}>PRIZES</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The winning team bags a cash price of 5000 rupees, which can be split among team members.
            </p>
            </div>
            </div>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Registration</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
               Teams with 5 members can register. Entry fee is 500 per team. Registration is based on a first come, first serve basis. Registration may involve giving away personal details, such as name, mobile no, and email-address.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2 mb-2`}>Guidelines</h4>
          <ol className="text-left list-decimal pl-8 pr-4"> 
            <li><span className="font-bold text-[#ffba61]">Rules:</span> General CS:GO fair play rules must be followed. The match format is casual (short match) and friendly fire is turned on. Players will not be allowed to access the console. Admission to the game room will only be granted to the team players. <span className="text-[#ffba61]">Laptops will be provided, but external keyboards and mouse must be brought by the participants.</span>  Care must be taken in order to not damage the equipment provided by the college. Time will be allotted before each match for players to adjust their sensitivity and calibrate their settings.</li>
            <li><span className="font-bold text-[#ffba61]">Time Limit:</span> The time for each match can approximately be around 20 minutes</li>
            <li><span className="font-bold text-[#ffba61]">Disqualification:</span> Participants who violate any of the rules or engage in unfair practices will be disqualified and not allowed to compete. Communications between players must be civil and respectful.</li>
          </ol>
        </motion.div>
        <StarsCanvas/>
      </div>
      <div className={'bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto'}>
        <div  className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5 justify-center content-center items-center mb-20`}>
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              EVOLV<span className='text-[#fe8e00]'>X</span>
            </h1>
          </div>
        </div>
      </div> 

    </div> 
  );
};

export default Gaming;


