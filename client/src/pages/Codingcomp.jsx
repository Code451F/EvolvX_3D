import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";
import codequest from '../assets/treasurehunt.jpg';


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
              Looking to put your knowledge of Amal Jyothi campus to the ultimate test? Join us for CODE QUEST - EvolveX's very own scavenger hunt! This exhilarating event offers the perfect platform to showcase your intelligence and puzzle-solving skills.
              As a participant, you'll embark on a thrilling adventure through the campus, following a trail of clues and working closely with your team to tackle a variety of challenging puzzles that will put your mind to the test.
              But that's not all! The first team to solve all the puzzles and complete the trail will be awarded a grand prize of 15,000 rupees! So rally your friends and embrace your adventurous spirit at EvolveX. Let's see what you're made of!   
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>SUMMARY</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              CODE QUEST is an exciting and challenging treasure hunt competition that will put participants' skills to the test. The duration of the competition may range from 2 to 4 hours, depending on the participants' skill level. To participate, teams must assemble at the designated venue at the scheduled time.
              During the competition, teams will be tasked with solving a series of clues that are strategically placed around the campus. These clues will require a range of skills, including logical reasoning, problem-solving, and coding, making the competition both engaging and interactive. It's a great opportunity for teams to showcase their creativity, ingenuity, and teamwork while having fun exploring the campus.
            </p>
          {/* <h4 className={`${styles.descriptionHeadText} mt-2`}>SPONSORSHIP & COLLABORATION</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              We are expecting to conduct this event in collaboration with Security BSides Community and Mystiko as they have agreed to provide us with technical support throughout the event.
            </p> */}
          <h4 className={`${styles.descriptionHeadText} mt-2`}>PRIZES</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The first team to solve all the puzzles and complete the trail will be awarded a grand prize of 15,000 rupees! So rally your friends and embrace your adventurous spirit at EvolveX. Let's see what you're made of!
            </p>
            </div>
            </div>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Team Registration</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Interested teams can register through the event website. We're expecting around 10-15 teams to participate, each team to consist of 2-4 members. The registration fee is 200 rupees for each team. Registration is based on a first come, first serve basis. Registration may involve giving away personal details, such as name, mobile no, and email-address.
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

export default Codingcomp;