import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";
import triathlon from "../assets/triathlon.jpg"



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
          className='flex-col text-center mb-5 mt-10 xs:w-3/4 bg-transparent p-8 rounded-2xl border-4 xs:border-[#ff8f00] xxs:border-transparent'
        >
          <p className={styles.sectionSubText}>Guidelines and Regulation</p>
          <h3 className={styles.sectionHeadText}>TRIAT<span className="text-[#ffffff]">HLON</span></h3>
          <div className="flex xl:flex-row pt-[35px] xxs:flex-col items-center">
            <div className="xl:w-[600px] xxs:w-[270px]">
                <img src={triathlon} className="border-4 border-[#ff8f00] rounded-xl mt-[15px] "></img>
                <button
            type='submit'
            className='bg-tertiary py-3 mt-[25px] px-4 rounded-xl outline-none w-[180px] h-[] text-[23px]  text-white font-bold shadow-md shadow-primary mb-5'
          > REGISTER
          </button>
          </div>
          <div className="xl:pl-[50px] mt-4 pr-2 xxs:pl-0 ">
          <h4 className={`${styles.descriptionHeadText} mt-2`}>OVERVIEW</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The Triple Challenge event features three coding challenges: code golfing, instant coding, and reverse engineering. Code golfing aims to write the shortest code, while instant coding tests problem-solving under time pressure. Reverse engineering requires analyzing encoded software.
              With 60-120 minute durations, it's an intense competition that challenges coding enthusiasts to excel in different dimensions.
            {/* </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>SUMMARY</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}>  */}
             
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>PRIZES</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The Prize pool is ₹20,000, where the first prize is worth ₹15,000 and the second prize is worth ₹5000.
            </p>
            </div>
            </div>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Team Registration</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
            Each team can have 2-3 members. Interested teams can register. The registration fee of the event is Rs 300 per team.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2 mb-2`}>Guidelines</h4>
          <ol className="text-left list-decimal pl-8 pr-4">
            <li><span className="font-bold text-[#ffba61]">Registration:</span> All the participants who are interested must register online before the deadline. A team should not exceed 2 members. You will be asked to provide details such as the team name, participant names, contact numbers, email id etc. The registration is set at ₹200 per team.</li>            
            <li><span className="font-bold text-[#ffba61]">Code of Conduct:</span> Participants are expected to follow a code of conduct which describes the expected behaviour from the participants. The code of conduct for the triple challenge event should emphasize respect, fair play, sportsmanship and safety. Any violation of the code of conduct would lead to consequences that might even include disqualification.</li>            
            <li><span className="font-bold text-[#ffba61]">Challenge format:</span> There would be three rounds as mentioned. After each round, teams failing to score above the cut-off would be eliminated and would not be allowed to move forward.</li>
            <li><span className="font-bold text-[#ffba61]">Equipment:</span> Participants are expected to bring their own laptops or any equipment they require. However, for the first two challenges, they will not be permitted to use their laptops and instead would have to use the computers provided by us.</li>
            <li><span className="font-bold text-[#ffba61]">Time limit:</span> The event will start on April 24th at 9:30 AM. Participants should arrive at least 30 minutes before the start time in order to avoid any delays.</li>
            <li><span className="font-bold text-[#ffba61]">Communication:</span> The team members are not expected to communicate with other teams during the challenge. They may communicate with the organizers if they face any difficulty.</li>
            <li><span className="font-bold text-[#ffba61]">Disqualification:</span> Participants who violate the rules or engage in any malpractice would be disqualified from the event.</li>
          </ol>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Code Golfing</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              In this challenge, participants have 60 minutes to solve 5-10 questions using Python or C only, with the shortest correct solution earning the highest score. Using the internet or external resources during the challenge and personal laptops are not allowed. Computers will be provided.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Instant Coding</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Participants have 60 minutes to solve 5-10 programming questions using a custom language provided on the spot, with reference documentation available. They are not allowed to use personal laptops, the internet or any advanced tools. Computers will be provided.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Reverse Engineering</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              This 3-round software reverse engineering challenge requires participants to analyze and modify provided software binaries using their own laptops, with 3-5 tasks per round, 120 minutes allotted, and the expected knowledge of reverse engineering frameworks, Python, and Linux commands.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Evaluation</h4>
          <ol className="text-left list-decimal pl-8 pr-4">
            <li><span className="font-bold text-[#ffba61]">Code Golfing:</span> Participants will be scored based on the shortest length of code that solves the problem statement correctly.</li>            
            <li><span className="font-bold text-[#ffba61]">Instant coding:</span> Participants will be scored based on the correctness of the solution.</li>            
            <li><span className="font-bold text-[#ffba61]">Reverse Engineering:</span> The winner will be determined based on the number of questions solved in the smallest time frame.</li>
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

export default Triathlon;
