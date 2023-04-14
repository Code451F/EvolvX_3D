import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";
import codequest from '../assets/treasurehunt.jpg';
import { logo, logo_nbg, menu, close, csea } from "../assets";
import azure from '../assets/azurelogo.png'


const Codingcomp = () => {
  return (
    <div>
      <div className={'bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto'}>
        <div  className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5 justify-center content-center items-center mb-20`}>
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              CODE<span className='text-[#fe8e00]'>QUEST</span> '23
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
          <h3 className={styles.sectionHeadText}>CODE<span className='text-[#ffffff]'>QUEST</span></h3>
          <div className="flex xl:flex-row pt-[35px] xxs:flex-col items-center">
            <div className="xl:w-[600px] xxs:w-[270px]">
                <img src={codequest} className="border-4 border-[#ff8f00] rounded-xl mt-[15px] "></img>
                <button
            type='submit'
            className='bg-tertiary py-3 mt-[25px] px-4 rounded-xl outline-none w-[180px] h-[] text-[23px]  text-white font-bold shadow-md shadow-primary mb-5'
          > REGISTER
          </button>
            </div>
          <div className="xl:pl-[50px] mt-4 pr-2 xxs:pl-0 ">
          <h4 className={`${styles.descriptionHeadText} mt-2`}>OVERVIEW</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Join EvolveX's CODE QUEST, a thrilling campus scavenger hunt that will challenge your puzzle-solving skills. Follow clues and solve puzzles with friends for an unforgettable adventure! 
              This exciting and challenging CODE QUEST treasure hunt competition is to test your skills! Teams must assemble at the designated venue and solve a series of clues strategically placed around the campus, requiring skills in logical reasoning, problem-solving, and coding. The competition lasts 2-4 hours and is a great opportunity to showcase creativity, ingenuity, and teamwork while having fun exploring the campus.
            {/* </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>SUMMARY</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}>  */}
             
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>PRIZES</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The total prize money is ₹ 15,000, with the first prize worth ₹ 10,000 and the second prize worth ₹ 5,000.
            </p>
            </div>
            </div>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Team Registration</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
             Each team to consist of 2-4 members. The registration fee is 200 rupees for each team. Registration is based on a first come, first serve basis.
             <span className="text-[#ffba61]"> REGISTRATION IS OPEN ONLY TO AJCE STUDENTS.</span>
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2 mb-2`}>Guidelines</h4>
          <ol className="text-left list-decimal pl-8 pr-4">
            <li><span className="font-bold text-[#ffba61]">Registration:</span> Interested teams can register through the event website, Each team to consist of 2-4 members. The registration fee is 200 rupees for each team. Registration is based on a first come, first serve basis.</li>            
            <li><span className="font-bold text-[#ffba61]">Prerequisite:</span> To participate, each team must bring at least one smartphone with Telegram installed and have a valid account. Participants must arrive at the venue at the designated time.</li>            
            <li><span className="font-bold text-[#ffba61]">Code of Conduct:</span> Participants must follow a code of conduct that outlines expected behaviour during the event. This may include guidelines on respect, honesty, and fair play, as well as consequences for violating the code.</li>            
            <li><span className="font-bold text-[#ffba61]">Challenge format:</span> The challenges may be presented in a specific format, such as a list of questions, puzzles, or tasks that need to be completed in a specific order.</li>
            <li><span className="font-bold text-[#ffba61]">Time limit:</span>  The event may have a specific start and end time, and the event is an all day event.</li>
            <li><span className="font-bold text-[#ffba61]">Communication:</span> Participants may be allowed to communicate with organizers and other participants through specific channels, such as a chat platform or email. However, communication related to the challenges should not be shared with anyone outside of the team.</li>
            <li><span className="font-bold text-[#ffba61]">Disqualification:</span> Participants who violate any of the rules or engage in unfair practices, such as hacking the competition platform or plagiarizing answers, may be disqualified from the event.</li>
          </ol>
          {/* <h4 className={`${styles.descriptionHeadText} mt-2`}>Initial Screening</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Once the registration process is complete, we will be conducting a 24-hour online CTF prior to Tech Fest with a series of challenges that they have to solve within a given time. The top 10 teams will be shortlisted based on their performance in these challenges, and the top-performing teams will be selected for the main event.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Main Event</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The main event will be held offline as a 7-hour CTF from 9 am to 4 pm at the college, where the selected teams will compete against each other to solve a series of challenges. The challenges are designed to test their skills in various domains such as cryptography, steganography, web application security, network security, digital forensics, and other related fields.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Evaluation</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The winners are required to provide the writeup for the challenges. The teams will be evaluated based on the number of challenges they solve, the scores achieved, and the quality of their solutions.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Post-CTF</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The winners are announced and the winning teams will be provided with certificates, swags and the prize money. 
            </p> */}
        </motion.div>
        <StarsCanvas/>
        
      </div>

      <div className={'bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto'}>
        <div  className={`relative  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-20 justify-center`}>
          <div className={" flex-row justify-center align-center w-[180px] h-[180px]"}>
           <img src={csea} alt='logo' className='object-contain mt-6'/>
          </div>
          <div className={" flex-row justify-center align-center w-[300px] h-[200px]"}>
           <img src={logo} alt='logo' className='object-contain mt-16 ml-4'/>
          </div>          
          <div className={" flex-row justify-center align-center w-[200px] h-[100px] mb-5"}>
           <img src={azure} alt='logo' className='object-contain mt-12'/>
          </div>
        </div>
      </div> 

    </div> 
  );
};

export default Codingcomp;

//Join the exciting and challenging CODE QUEST treasure hunt competition to test your skills! Teams must assemble at the designated venue and solve a series of clues strategically placed around the campus, requiring skills in logical reasoning, problem-solving, and coding. The competition lasts 2-4 hours and is a great opportunity to showcase creativity, ingenuity, and teamwork while having fun exploring the campus.
