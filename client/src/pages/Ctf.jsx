import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";
import ctf from '../assets/ctf.jpg'

const CTF = () => {
  return (
    <div>
      <div className={'bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto'}>
        <div  className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5 justify-center content-center items-center mb-20`}>
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              ARCHON<span className='text-[#fe8e00]'>CTF</span> '23
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
          <h3 className={styles.sectionHeadText}>ARCHON<span className='text-[#ffffff]'>CTF</span></h3>
          <div className="flex xl:flex-row pt-[35px] xxs:flex-col items-center">
            <div className="xl:w-[600px] xxs:w-[270px]">
                <img src={ctf} className="border-4 border-[#ff8f00] rounded-xl mt-[15px] "></img>
                
                <button
            type='submit'
            className='bg-tertiary py-3 mt-[25px] px-4 rounded-xl outline-none w-[180px] h-[] text-[23px]  text-white font-bold shadow-md shadow-primary mb-5'
          > REGISTER
          </button>
          
          
          </div>
          <div className="xl:pl-[50px] mt-4 pr-2 xxs:pl-0 ">
          <h4 className={`${styles.descriptionHeadText} mt-2`}>OVERVIEW</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Ready to hack your way into victory? Get ready for an adrenaline-fueled heart-pumping competiton that will put your hacking skills to the test. With a series of challenges ranging from  
               cryptography, steganography, and more. You will have the opportunity to flex your hacking muscles and show off your problem solving skills. So gather your team, sharpen your tools and get
              ready to prove your hacking prowess at ARCHON CTF '23.
            
              {/* The CTF has two phases: an online 24-hour CTF as round one and a 7-hour offline CTF as the final round for teams of 2-4. Participants will solve cybersecurity challenges in areas like cryptography, steganography, and more. */}
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>SPONSORSHIP & COLLABORATION</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              The event will be conducted in collaboration with Security BSides Community and Mystiko for technical support and other amenities.
            </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>PRIZES</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Total prize worth Rs 20000, cash prizes will be awarded to the top 2 performing teams, depending on the competition rules
            </p>
            </div>
            </div>
          {/* <h4 className={`${styles.descriptionHeadText} mt-2`}>Team Registration</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Interested teams can register on our website by providing details such as team name, member names, and email addresses. We are expecting to get around 50-60 Team Registrations for this event and the registration fee would be Rs 200 per team.
            </p> */}
          <h4 className={`${styles.descriptionHeadText} mt-2 mb-2`}>Guidelines</h4>
          <ol className="list-decimal pl-8 pr-4 text-justify">
            <li><span className="font-bold text-[#ffba61]">Registration:</span> Participants must register as teams of 2-4 members for the event. The registration fee is Rs 200. </li>
            <li><span className="font-bold text-[#ffba61]">Code of conduct:</span> Participants must conduct themselves in a professional and ethical manner at all times. Cheating, flag sharing or any other inappropriate behavior will result in disqualification.</li>
            <li><span className="font-bold text-[#ffba61]">Collaboration:</span> Collaboration with other teams is strictly prohibited. Make sure you understand the collaboration policy before starting the event.</li>
            <li><span className="font-bold text-[#ffba61]">Scoring:</span> Points are awarded for solving challenges and obtaining flags. </li>
            <li><span className="font-bold text-[#ffba61]">Resources:</span> Brute forcing or overloading the CTF platform will lead to disqualification of the entire team.</li>
            <li><span className="font-bold text-[#ffba61]">Disputes:</span> Any disputes , issues or  complaints must be raised in a  promptly manner and the organizer's decision is final.</li>
            <li><span className="font-bold text-[#ffba61]">Prizes:</span> Cash Prizes will be awarded to the top 2 performing teams, depending on the competition rules</li>
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

export default CTF;


