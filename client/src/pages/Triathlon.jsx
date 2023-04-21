import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";
import triathlon from "../assets/triathlon.jpg"
import { logo, logo_nbg, menu, close, csea } from "../assets";
import azure from '../assets/azurelogo.png'
import { waytonikah } from "../assets";


const Triathlon = () => {
  return (
    <div>
      <div className={'bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto'}>
        <div  className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5 justify-center content-center items-center mb-20`}>
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              <span className='text-[#fe8e00]'>ESCAPE </span> ROOM
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
          <h3 className={styles.sectionHeadText}>ESCAPE<span className="text-[#ffffff]">ROOM</span></h3>
          <div className="flex xl:flex-row pt-[35px] xxs:flex-col items-center">
            <div className="xl:w-[1000px] xxs:w-[270px] py-3">
                <img src={triathlon} className="border-4 border-[#ff8f00]  rounded-xl mt-[15px] mb-5"></img>

                <a href='https://forms.gle/m4rb8EmpxKWXQuUk8'>
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
            {/* Our escape room is a technology/hacker-themed environment where players must solve a series of computer programming puzzles using Python or C to escape before they are caught by the security team. The room is set up with multiple computer stations with pre-installed compilers, and players must work together to solve a variety of puzzles that test their coding, logic, and problem-solving skills. A system is in place to track players' progress, and a final programming challenge must be solved to unlock the door and escape the room. The escape room is designed to challenge players and promote teamwork, creativity, and quick thinking. */}
            Join us for a fun and exciting event - Escape Room! Put your problem-solving skills to the test as you solve puzzles, decipher clues, and unlock hidden secrets to escape from a series of rooms. This is a team-based activity that anyone can participate in, regardless of their tech expertise. So, gather your friends, family, or colleagues and join us for a memorable and entertaining adventure that will challenge your mind and keep you on the edge of your seat!
            </p>

            <div className="xl:flex xl:flex-row xl:items-center mb-8 xxs:flex-col">
          <h4 className={`${styles.descriptionHeadText} mt-2`}>SPONSORED BY</h4>
            
            <a href="https://www.waytonikah.com/googleads?religion=126&region=1&gclid=Cj0KCQjwlumhBhClARIsABO6p-zzBbwtwXmvrxKDjnmCj3xityeazrztqRvVY-g_WcCd4_au33be1OgaAo2NEALw_wcB">
            <img src={waytonikah} className="w-[300px] pl-8 pt-4"></img>
            </a>
            </div>

          <h4 className={`${styles.descriptionHeadText} mt-2`}>PRIZES</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The Prize pool is ₹10,000, where the first prize is worth ₹6,000 and the second prize is worth ₹4,000.
            </p>
            </div>
            </div>
            <span className="text-[#ffba61] font-bold uppercase">All participants will receive a participation certificate and KTU activity points upon attending the event.   </span>
          <h4 className={`${styles.descriptionHeadText} mt-2 mb-2`}>Guidelines</h4>
          <ol className="text-left list-decimal pl-8 pr-4">
          <li><span className="font-bold text-[#ffba61]">Registration:</span> Registrations for this event can be done on spot. Each team must consist of 2-3 members. The registration fee is set at <span className="text-[#ffba61]">₹50</span> per participant.  <span className="text-[#ffba61]">REGISTRATION IS OPEN TO BOTH AJCE & NON-AJCE STUDENTS. </span></li>            
            <li><span className="font-bold text-[#ffba61]">Code of Conduct:</span> Participants are expected to follow a code of conduct which describes the expected behaviour from the participants. The code of conduct for the triple challenge event should emphasize respect, fair play, sportsmanship and safety. Any violation of the code of conduct would lead to consequences that might even include disqualification.</li>            
            <li><span className="font-bold text-[#ffba61]">Challenge format:</span>  In this challenge, participants will be sent to a room 1 team at a time.
Participants have to complete tasks in order to escape the room.</li>
            <li><span className="font-bold text-[#ffba61]">Equipment:</span> Systems will be provided.</li>
            <li><span className="font-bold text-[#ffba61]">Time limit:</span> The event will be on April 24th . Participants will be given a time limit of maximum 45 minutes. Registration will be open from 9:00 am.</li>
            <li><span className="font-bold text-[#ffba61]">Communication:</span> The team members are not expected to communicate with other teams during the challenge. They may communicate with the organizers if they face any difficulty.</li>
            <li><span className="font-bold text-[#ffba61]">Disqualification:</span> Participants who violate the rules or engage in any malpractice would be disqualified from the event.</li>
          </ol>
          {/* <h4 className={`${styles.descriptionHeadText} mt-2`}>Code Golfing</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              In this challenge, participants have 60 minutes to solve 5-10 questions using Python or C only, with the shortest correct solution earning the highest score. Using the internet or external resources during the challenge and personal laptops are not allowed. Computers will be provided.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Instant Coding</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Participants have 60 minutes to solve 5-10 programming questions using a custom language provided on the spot, with reference documentation available. They are not allowed to use personal laptops, the internet or any advanced tools. Computers will be provided.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Reverse Engineering</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              This 3-round software reverse engineering challenge requires participants to analyze and modify provided software binaries with 3-5 tasks per round, 120 minutes allotted, and the expected knowledge of reverse engineering frameworks, Python, and Linux commands.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Evaluation</h4>
          <ol className="text-left list-decimal pl-8 pr-4">
            <li><span className="font-bold text-[#ffba61]">Code Golfing:</span> Participants will be scored based on the shortest length of code that solves the problem statement correctly.</li>            
            <li><span className="font-bold text-[#ffba61]">Instant coding:</span> Participants will be scored based on the correctness of the solution.</li>            
            <li><span className="font-bold text-[#ffba61]">Reverse Engineering:</span> The winner will be determined based on the number of questions solved in the smallest time frame.</li>
          </ol> */}
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

export default Triathlon;
