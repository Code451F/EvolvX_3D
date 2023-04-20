import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";
import fifa from '../assets/fifa.jpg';
import { logo, logo_nbg, menu, close, csea } from "../assets";
import azure from '../assets/azurelogo.png'

const GamingFifa = () => {
  return (
    <div>
      <div className={'bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto'}>
        <div  className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5 justify-center content-center items-center mb-20`}>
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              FIFA<span className='text-[#fe8e00]'>23</span>
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
          className='flex-col text-center mb-5 mt-10 xs:w-3/4 bg-transparent p-8 rounded-2xl xs:border-4 xs:border-[#ff8f00] xxs:border-transparent'
        >
          <p className={styles.sectionSubText}>Guidelines and Regulation</p>
          <h3 className={styles.sectionHeadText}>FIFA23 <span className='text-[#ffffff]'>TOURNAMENT</span></h3>



          <div className="flex xl:flex-row pt-[35px] xxs:flex-col items-center">
            <div className="xl:w-[600px] xxs:w-[270px]">
                <img src={fifa} className="border-4 border-[#ff8f00] rounded-xl mt-[15px] "></img>

                <a href='https://docs.google.com/forms/d/e/1FAIpQLScyU_KqJ8r7TRflfknOWqtKgiKwNtknxOHs7OrCbXgPFH1gYw/viewform?usp=sf_link'>
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
            Confident in your FIFA skills? It's time to put your hours of practice and playtime to the test. Prove your mettle in a series of 1v1 matches and outplay your opponents. Join us and compete to win money while having fun, and meet other likeminded individuals!
            </p>
          
          
          <h4 className={`${styles.descriptionHeadText} mt-2`}>PRIZES</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
            The winner bags a cash prize of 3000 rupees, while the runner up bags 2000 rupees.  Every match is a knockout match, and each match will consist of 5 minutes per half. 
            </p>
            </div>
            </div>
            <span className="text-[#ffba61] font-bold uppercase">All participants will receive a participation certificate and KTU activity points upon attending the event.   </span>
          <h4 className={`${styles.descriptionHeadText} mt-2 mb-2`}>Guidelines</h4>
          <ol className="text-left list-decimal pl-8 pr-4">
          <li><span className="font-bold text-[#ffba61]">Registration: </span>Entry fee is <span className="text-[#ffba61]">₹40</span> per person. Registration is based on a first come, first serve basis. <span className="text-[#ffba61]">REGISTRATION IS OPEN TO BOTH AJCE & NON-AJCE STUDENTS. A NUMBER OF SEATS WILL BE RESERVED FOR AJCE STUDENTS.</span></li>
          <li><span className="font-bold text-[#ffba61]">Venue:</span>The tournament will be conducted in <span className="text-[#ffba61]">offline mode</span> at the CSE Department </li>
            <li><span className="font-bold text-[#ffba61]">Rules:</span>The AI difficulty is set to legendary. Participants may choose any team, excluding International and Custom teams. Game mode is Champions League Final format. Participants must finish the tournament with the team they started off with. All team ratings are default. The FIFA version used is FIFA 23. All rule settings are default (Handballs are off.) In case of a draw, match result will be decided by penalties. </li>
            <li><span className="font-bold text-[#ffba61]">Time Limit:</span> Each half consists of 5 minutes, and the participants are allowed a maximum of 3 pauses per match (only when the ball is out of bounds), in which 30 seconds are allowed for tactical changes. Time will be given for formation and configuration before the match and during half time.</li>
            <li><span className="font-bold text-[#ffba61]">Controllers:</span> Controllers will be provided by the college. Controller settings can be tweaked with the approval of the co-ordinators. </li>
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

export default GamingFifa;


