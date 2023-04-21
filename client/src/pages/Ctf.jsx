import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";
import ctf from '../assets/ctf.jpg'
import { logo, logo_nbg, menu, close, csea } from "../assets";
import azure from '../assets/azurelogo.png'
import { mystiko } from "../assets";
import { jlb } from "../assets";

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
                
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSdNbmP9CvSmLVPjncrtzA-6gK3sxeee3Lfu-mnvI-LftzG8Jw/viewform'>
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
              Ready to hack your way into victory? Get ready for an adrenaline-fueled heart-pumping competiton that will put your hacking skills to the test. With a series of challenges ranging from  
               cryptography, steganography, and more. You will have the opportunity to flex your hacking muscles and show off your problem solving skills. So gather your team, sharpen your tools and get
              ready to prove your hacking prowess at ARCHON CTF '23.
           </p>
            <div className="xl:flex xl:flex-row xl:items-center mb-8 xxs:flex-col">
          <h4 className={`${styles.descriptionHeadText} mt-2`}>SPONSORED BY</h4>

            <a href="https://ctf-mystiko.com/">
            <img src={mystiko} className="w-[170px] pl-12 pt-4 "></img>
            </a>
            < a href="https://instagram.com/the_mallu_dev?igshid=YmMyMTA2M2Y=">
            <img src={jlb} className="xl:w-[350px] xl:pl-20 pt-4 xxs:w-[250px]"></img>
            </a>
            </div>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>PRIZES</h4>
            <p className={`${styles.descriptionText} mt-2 mb-5`}> 
              Total prize worth ₹20,000, cash prizes will be awarded to the top 2 performing teams, depending on the competition rules
            </p>
            </div>
            </div>
            <span className="text-[#ffba61] font-bold uppercase">All participants will receive a participation certificate and KTU activity points upon attending the event.   </span>
          <h4 className={`${styles.descriptionHeadText} mt-2 mb-2`}>Guidelines</h4>
          <ol className="list-decimal pl-8 pr-4 text-justify">
            <li><span className="font-bold text-[#ffba61]">Registration:</span> Participants must register as teams of 2-4 members for the event. Registration is <span className="text-[#ffba61]">free </span>for the event. <span className="text-[#ffba61]">REGISTRATION IS OPEN TO BOTH AJCE & NON-AJCE STUDENTS.</span> </li>
            <li><span className="font-bold text-[#ffba61]">Code of conduct:</span> Participants must conduct themselves in a professional and ethical manner at all times. Cheating, flag sharing or any other inappropriate behavior will result in disqualification.</li>
            <li><span className="font-bold text-[#ffba61]">Collaboration:</span> Collaboration with other teams is strictly prohibited. Make sure you understand the collaboration policy before starting the event.</li>
            <li><span className="font-bold text-[#ffba61]">Scoring:</span> Points are awarded for solving challenges and obtaining flags. </li>
            <li><span className="font-bold text-[#ffba61]">Resources:</span> Brute forcing or overloading the CTF platform will lead to disqualification of the entire team.</li>
            <li><span className="font-bold text-[#ffba61]">Disputes:</span> Any disputes , issues or  complaints must be raised in a  promptly manner and the organizer's decision is final.</li>
            <li><span className="font-bold text-[#ffba61]">Prizes:</span> Cash Prizes will be awarded to the top 2 performing teams, depending on the competition rules</li>
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

export default CTF;


