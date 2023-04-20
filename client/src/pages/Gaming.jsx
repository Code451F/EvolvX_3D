import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";
import csgo from "../assets/csgo.jpg"
import { logo, logo_nbg, menu, close, csea } from "../assets";
import azure from '../assets/azurelogo.png'
import tiara from '../assets/tiara.png'


const Gaming = () => {
  return (
    <div>
      <div className={'bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto'}>
        <div  className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5 justify-center content-center items-center mb-20`}>
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              CSGO<span className='text-[#fe8e00]'>23</span>
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

                <a href='https://docs.google.com/forms/d/e/1FAIpQLSeczl_w9bZckZ2UD1-Ec7U4uf9LfwQqrK-KY3SGxUpskbS8Ww/viewform?usp=sf_link'>
                  <button
                    type='submit'
                    className='bg-tertiary py-3 mt-[25px] px-4 rounded-xl outline-none w-[180px] h-[] text-[23px]  text-white font-bold shadow-md shadow-primary mb-5'
                  > REGISTER
                  </button>
                </a>

            </div>
            <div className="xl:pl-[50px] mt-4 pr-2 xxs:pl-0 ">
          <h4 className={`${styles.descriptionHeadText} mt-2`}>OVERVIEW</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Are you an avid first-person shooter enthusiast? Do you find yourself playing competitive shooters in your free time? Sign up today and join us for the most thrilling CSGO tournament of the year 
              where participants can prove their skills in a 5v5 match. Teams who are interested may register here. Every match is a knockout match, and each match will be approximately 20-30 minutes each.
            
          
           
            </p>
            <div className="xl:flex xl:flex-row xl:items-center mb-8 xxs:flex-col">
          <h4 className={`${styles.descriptionHeadText} mt-2`}>SPONSORED BY</h4>
            <a href="https://tiarabyninu.com/">
            <img src={tiara} className="w-[140px] pl-12 pt-4"></img>
            </a>
            </div>
          
          <h4 className={`${styles.descriptionHeadText} mt-2`}>PRIZES</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The winning team bags a cash price of 5000 rupees, which can be split among team members.
            </p>
            </div>
            </div>
            <span className="text-[#ffba61] font-bold uppercase">All participants will receive a participation certificate and KTU activity points upon attending the event.   </span>
          <h4 className={`${styles.descriptionHeadText} mt-2 mb-2`}>Guidelines</h4>
          <ol className="text-left list-decimal pl-8 pr-4"> 
          <li><span className="font-bold text-[#ffba61]">Registration:</span> Teams with 5 members can register. Entry fee is <span className="text-[#ffba61]">₹250 per team.</span>. Registration is based on a first come, first serve basis. <span className="text-[#ffba61]">REGISTRATION IS OPEN TO BOTH AJCE & NON-AJCE STUDENTS. A NUMBER OF SEATS WILL BE RESERVED FOR AJCE STUDENTS.</span></li>
          <li><span className="font-bold text-[#ffba61]">Venue:</span>The tournament will be conducted in <span className="text-[#ffba61]">offline mode</span> at the CSE Department </li>
            <li><span className="font-bold text-[#ffba61]">Rules:</span> General CS:GO fair play rules must be followed. The match format is casual (short match) and friendly fire is turned on. Players will not be allowed to access the console. Admission to the game room will only be granted to the team players. <span className="text-[#ffba61]">Laptops will be provided, but external keyboard, mouse, headset and any other accessories must be brought by the participants.</span>  Care must be taken in order to not damage the equipment provided by the college. Time will be allotted before each match for players to adjust their sensitivity and calibrate their settings.</li>
            <li><span className="font-bold text-[#ffba61]">Time Limit:</span> The time for each match can approximately be around 20 minutes</li>
            <li><span className="font-bold text-[#ffba61]">Disqualification:</span> Participants who violate any of the rules or engage in unfair practices will be disqualified and not allowed to compete. Communications between players must be civil and respectful.</li>
            <li><span className="font-bold text-[#ffba61]">ID Card:</span> <span className="text-[#ffba61]"> All participants are required to bring their college ID card to the event.</span></li>
            </ol>
          
           <span className="">In the case of the total number of event participants being less than 60 percent, the total cash prize will be reduced to half.</span>
        
          
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

export default Gaming;


