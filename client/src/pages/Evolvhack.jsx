import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";
import { guidelines_EH } from "../constants";
import hackathon from '../assets/hackathon.jpg'
import { hack } from "../assets";
import digiora from '../assets/Digiora.png'
import { logo, logo_nbg, menu, close, csea } from "../assets";
import azure from '../assets/azurelogo.png'
import { jlb } from "../assets";

const Evolvhack = () => {
  return (
    <div>
      <div className={'bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto'}>
        <div  className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5 justify-center content-center items-center mb-20`}>
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              EVOLV<span className='text-[#fe8e00]'>HACK</span> '23
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
          <h3 className={styles.sectionHeadText}>EVOLV<span className='text-[#ffffff]'>HACK</span></h3>
          
          <div className="flex xl:flex-row pt-[35px] xxs:flex-col items-center">
            <div className="xl:w-[600px] xxs:w-[270px]">
                <img src={hackathon} className="border-4 border-[#ff8f00] rounded-xl mt-[15px] "></img>
                
                <a href='https://docs.google.com/forms/d/e/1FAIpQLScs-7cw578sJFMQvQhH2kriMZ72GckAB4U59OUHQuWccnMoig/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link'>
                  <button
                    type='submit'
                    className='bg-tertiary py-3 mt-[25px] px-4 rounded-xl outline-none w-[180px] h-[] text-[23px]  text-white font-bold shadow-md shadow-primary mb-5'
                  > REGISTER
                  </button>
                </a>

          <a href="https://drive.google.com/file/d/1x3XNMvrjpVoNcPFTxxMs3YipVhXqfNTW/view?usp=share_link" >
            
          <button
            type='submit'
            className='bg-blue-500 py-3 mt-[8px] px-2 rounded-xl outline-none w-[180px] h-[] text-[16px]  text-white font-bold shadow-md shadow-primary mb-5'
          > CODE OF CONDUCT
          </button>
          </a>


            </div>
          <div className="xl:pl-[50px] mt-4 pr-2 xxs:pl-0 ">
          <h4 className={`${styles.descriptionHeadText} mt-2`}>OVERVIEW</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              EvolvHack'23 is a 24-hour hackathon from 10:00 AM, 24 April - 12:00 PM, 25 April where teams of 2-4 members can participate. This is an open hackathon where no problem statements are provided. The teams can choose any problem statement
              relevant to society and develop a practical solution for it. Teams can choose any technology or tool to develop their solution. Both hardware and software solutions are welcome.
            </p>
            <div className="xl:flex xl:flex-row xl:items-center xxs:flex-col">
          <h4 className={`${styles.descriptionHeadText} mt-2`}>SPONSORED BY</h4>
            {/* <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              We have partnered with Digiora Technologies to provide us with the prize money for the winners and JB Labs to sponsor the prize money for the runner-ups. */}
            {/* </p> */}
            <a href='https://www.digiora.com/'>
            <img src={digiora}  className="w-[300px] pl-8 pt-4"></img>
            </a>
            <a href="https://instagram.com/the_mallu_dev?igshid=YmMyMTA2M2Y=">
            <img src={jlb} className="w-[300px] pl-4  pt-4  mb-4"></img>
            </a>
            </div>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>PRIZES</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The total prize money is ₹ 45,000, with the first prize worth ₹30,000 and the second prize worth ₹15,000.
            </p>
            </div>
            </div>
            <span className="text-[#ffba61] font-bold uppercase">All participants will receive a participation certificate and KTU activity points upon attending the event.   </span>
          <h4 className={`${styles.descriptionHeadText} mt-2 mb-2`}>Guidelines</h4>
          <ol className="list-decimal pl-8 pr-4 text-justify">
            <li><span className="font-bold text-[#ffba61]">Registration:</span> All participants must register online before the event to confirm their participation. Participants are required to form a team of minimum two members and a maximum of four members. The registration fee will be <span className="text-[#ffba61]"> ₹250 </span>per participant. <span className="text-[#ffba61]">REGISTRATION IS OPEN ONLY TO NON-AJCE STUDENTS.</span></li>
            <li><span className="font-bold text-[#ffba61]">Code of conduct:</span> Participants must follow a code of conduct that outlines expected behavior during the event. This may include guidelines on respect, honesty, and fair play, as well as consequences for violating the code.</li>
            <li><span className="font-bold text-[#ffba61]">Problem Statement and Solution:</span> Teams are required to choose any relevant problem statement and come up with solutions to these problems. The problem should be a valid issue faced by the society and the solution must be realistic and practical. Both hardware and software solutions are welcome.</li>
            <li><span className="font-bold text-[#ffba61]">Mentors:</span> Mentors will be available to all teams for any assistance during the hackathon hours</li>
            <li><span className="font-bold text-[#ffba61]">Collaboration between Teams:</span> Participants are encouraged to collaborate with other teams during the event. However, they should not sabotage or plagiarize other teams' work. Any unethical behavior will result in disqualification.</li>
            <li><span className="font-bold text-[#ffba61]">Intellectual Property Rights:</span> All solutions presented at the hackathon must be original and not infringe any third-party intellectual property rights. Participants should not use any copyrighted material without the owner's consent. We also require all solutions to be open-source and be freely available to all.</li>
            <li><span className="font-bold text-[#ffba61]">Disqualification:</span> Participants who violate any of the rules or engage in unfair practices, such as sabotaging others' work, may be disqualified from the event.</li>
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

export default Evolvhack;





