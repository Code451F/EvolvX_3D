
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

import { StarsCanvas } from "../components";

const Triathlon = () => {
  return (
    <div>


      <div
        className={
          "bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto"
        }
      >
        <div
          className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-center content-center items-center mb-20`}
        >
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              <span className="text-[#fe8e00]">Triathlon</span>
            </h1>
          </div>
        </div>
      </div>

      <div
        className={`xl:mt-0 flex xl:flex-col flex-col items-center overflow-hidden bg-primary relative w-full h-full relative z-0`}
      >

        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}

          className="flex-col text-center mb-5 mt-10 w-3/4 bg-transparent p-8 rounded-2xl border-4 border-[#ff8f00]"
        >
          <p className={styles.sectionSubText}>Guidelines and Regulation</p>
          <h3 className={styles.sectionHeadText}>
            <span className="text-[#ffffff]">Triathlon</span>
          </h3>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>OVERVIEW</h4>
          <p className={`${styles.descriptionText} mt-2 mb-5`}>
            The Triple Challenge event is a multi-faceted coding competition
            that encompasses three distinct challenges: code golfing, instant
            coding, and reverse engineering. In code golfing, participants
            strive to write the shortest possible code to solve a given problem.
            The instant coding challenge tests participants' ability to quickly
            solve coding problems within a tight timeframe using a custom
            programming language. Lastly, the reverse engineering challenge
            requires participants to analyze compiled or encoded software to
            understand its inner workings.
          </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>SUMMARY</h4>
          <p className={`${styles.descriptionText} mt-2 mb-5`}>
            The Triple Challenge event offers a diverse range of coding
            challenges that assess participants' coding skills, creativity,
            problem-solving abilities, and ability to perform under pressure.
            The event is an offline coding competition that consists of three
            levels: code golfing, instant coding and reverse engineering. Both
            the code golfing and the instant coding levels have 60 minutes
            duration. The reverse engineering level, on the other hand, spans
            120 minutes. It's an exciting and intense competition that
            challenges coding enthusiasts and professionals to excel in
            different coding dimensions..
          </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>PRIZES</h4>
          <p className={`${styles.descriptionText} mt-2 mb-5`}>
            Total prize worth Rs 22000.
          </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>
            Team Registration
          </h4>
          <p className={`${styles.descriptionText} mt-2 mb-5`}>
            Interested teams can register on our website by providing details
            such as team name, member names, and email addresses. The
            registration fee would be Rs 300 per team.
          </p>
          <h2
            className={`${styles.descriptionBiggerHeadText} mt-2 mb-2 underline text-2xl`}
          >
            Rules:
          </h2>
          <h4 className={`${styles.descriptionHeadText} mt-2 mb-2`}>
            General Guidelines:
          </h4>
          <ol className="text-left list-disc pl-8 pr-4">
            <li>This is a team event.</li>
            <li>
              Each team must contain no more than{" "}
              <span className="font-bold text-[#ffba61]">2</span> members.
            </li>
            <li>
              The event will start on{" "}
              <span className="font-bold text-[#ffba61]">
                April 24th at 9:30 AM.
              </span>{" "}
              Participants should arrive at least 30 minutes before the start
              time to complete the registration process.
            </li>
            <li>
              The registration fee for participation in the event is{" "}
              <span className="font-bold text-[#ffba61]">₹300</span> per team.
            </li>
            <li>There will be three challenges in this event.</li>
            <li>
              <span className="font-bold text-[#ffba61]">
                Disqualification:
              </span>{" "}
              Participants who violate any of the rules or engage in unfair
              practices, such as hacking the competition platform or
              plagiarizing answers, may be disqualified from the event.
            </li>
          </ol>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>
            Initial Screening
          </h4>
          <p className={`${styles.descriptionText} mt-2 mb-5`}>
            Once the registration process is complete, we will be conducting a
            24-hour online CTF prior to Tech Fest with a series of challenges
            that they have to solve within a given time. The top 10 teams will
            be shortlisted based on their performance in these challenges, and
            the top-performing teams will be selected for the main event.
          </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Main Event</h4>
          <p className={`${styles.descriptionText} mt-2 mb-5`}>
            The main event will be held offline as a 7-hour CTF from 9 am to 4
            pm at the college, where the selected teams will compete against
            each other to solve a series of challenges. The challenges are
            designed to test their skills in various domains such as
            cryptography, steganography, web application security, network
            security, digital forensics, and other related fields.
          </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Evaluation</h4>
          <p className={`${styles.descriptionText} mt-2 mb-5`}>
            The winners are required to provide the writeup for the challenges.
            The teams will be evaluated based on the number of challenges they
            solve, the scores achieved, and the quality of their solutions.
          </p>
          <h4 className={`${styles.descriptionHeadText} mt-2`}>Post-CTF</h4>
          <p className={`${styles.descriptionText} mt-2 mb-5`}>
            The winners are announced and the winning teams will be provided
            with certificates, swags and the prize money.
          </p>
        </motion.div>
        <StarsCanvas />
        <div>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary mb-5"
          >
            {" "}
            Registerations Will Open Soon...
          </button>
        </div>
      </div>


      <div
        className={
          "bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-[200px] mx-auto"
        }
      >
        <div
          className={`relative top-[50px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-center content-center items-center mb-20`}
        >
          <div className="justify-center content-center items-center">
            <h1 className={`${styles.heroHeadText} text-white text-center`}>
              Archon<span className="text-[#fe8e00]">CTF</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Triathon;
