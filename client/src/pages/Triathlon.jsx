import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";
import { guidelines_EH } from "../constants";


const Triathlon = () => {
  return (
    <div>
      <div className={'bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto'}>
        <div  className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5 justify-center content-center items-center mb-20`}>
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              <span className='text-[#fe8e00]'>TRIATHLON</span> '23
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
          className='flex-col text-center mb-5 mt-10 w-3/4 bg-transparent p-8 rounded-2xl border-4 border-[#ff8f00]'
        >
          <p className={styles.sectionSubText}>Guidelines and Regulation</p>
          <h3 className={styles.sectionHeadText}>TRIAT<span className='text-[#ffffff]'>HLON</span></h3>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>OVERVIEW</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The Triple Challenge event is a multi-faceted coding competition that encompasses three distinct challenges: code golfing, instant coding, and reverse engineering. In code golfing, participants strive to write the shortest possible code to solve a given problem. The instant coding challenge tests participants' ability to quickly solve coding problems within a tight timeframe using a custom programming language. Lastly, the reverse engineering challenge requires participants to analyze compiled or encoded software to understand its inner workings. 
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>SUMMARY</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The Triple Challenge event offers a diverse range of coding challenges that assess participants' coding skills, creativity, problem-solving abilities, and ability to perform under pressure.  The event is an offline coding competition that consists of three levels: code golfing,  instant coding and reverse engineering. Both the code golfing and the instant coding levels have 60 minutes duration. The reverse engineering level, on the other hand, spans 120 minutes. It's an exciting and intense competition that challenges coding enthusiasts and professionals to excel in different coding dimensions.
            </p>
          {/* <h4 className={`${styles.descriptionHeadText} mt-2`}>SPONSORSHIP & COLLABORATION</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              We are expecting to conduct this event in collaboration with Security BSides Community and Mystiko as they have agreed to provide us with technical support throughout the event.
            </p> */}
          <h4 className={`${styles.descriptionHeadText} mt-2`}>PRIZES</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Prize pool is of  ₹20,000
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Team Registration</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Interested teams can register on our website by providing details such as team name, member names, and email addresses. We are expecting to get around 15-20 Team Registrations for this event and the registration fee would be Rs 300 per team.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2 mb-2`}>Guidelines</h4>
          <ol className="text-left list-decimal pl-8 pr-4">
            <li><span className="font-bold text-[#ffba61]">Registration:</span> Interested teams can register through the event website. We're expecting around 10-15 teams to participate, each team to consist of 2-4 members. The registration fee is 200 rupees for each team. Registration is based on a first come, first serve basis. Registration may involve giving away personal details, such as name, mobile no, and email-address.</li>            
            <li><span className="font-bold text-[#ffba61]">Code of Conduct:</span> Participants must follow a code of conduct that outlines expected behaviour during the event. This may include guidelines on respect, honesty, and fair play, as well as consequences for violating the code.</li>            
            <li><span className="font-bold text-[#ffba61]">Challenge format:</span> The challenges may be presented in a specific format, such as a list of questions, puzzles, or tasks that need to be completed in a specific order.</li>
            <li><span className="font-bold text-[#ffba61]">Time limit:</span> The event may have a specific start and end time, and the event is an all day event.</li>
            <li><span className="font-bold text-[#ffba61]">Communication:</span> Participants may be allowed to communicate with organizers and other participants through specific channels, such as a chat platform or email. However, communication related to the challenges should not be shared with anyone outside of the team.</li>
            <li><span className="font-bold text-[#ffba61]">Disqualification:</span> Participants who violate any of the rules or engage in unfair practices, such as hacking the competition platform or plagiarizing answers, may be disqualified from the event.</li>
          </ol>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Initial Screening</h4>
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
            </p>
        </motion.div>
        <StarsCanvas/>
        <div>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mb-5'
          > Registerations Will Open Soon...
          </button>
        </div>
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

export default Triathlon;
