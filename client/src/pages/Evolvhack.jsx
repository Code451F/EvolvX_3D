import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";

const Evolvhack = () => {
  return (
    <div>
      <div className={'bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto'}>
        <div  className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-center content-center items-center mb-20`}>
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              Evolv<span className='text-[#fe8e00]'>Hack</span>
            </h1>
          </div>
        </div>
      </div> 

      <div className={`xl:mt-0 flex xl:flex-col flex-col items-center overflow-hidden bg-primary relative w-full h-screen relative z-0`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className='flex-col text-center mb-20 mt-10 w-3/4 bg-transparent p-8 rounded-2xl border-4 border-[#ff8f00]'
        >
          <p className={styles.sectionSubText}>Guidelines and Regulation</p>
          <h3 className={styles.sectionHeadText}>What is <span className='text-[#ffffff]'>Evolv</span>Hack 2023?</h3>
        </motion.div>
        <StarsCanvas/>
      </div>
    </div> 
  );
};

export default Evolvhack;

{/* <button
type='submit'
className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
>
{loading ? "Sending..." : "Send"}
</button> */}

{/* <div className='relative z-0'>
<Contact />
<StarsCanvas />
</div> */}

// xl:bg-transparent
// className={'flex flex-col bg-transparent p-8 rounded-2xl border-4 border-[#ff8f00] text-center mb-20 mt-10 w-3/4'}
