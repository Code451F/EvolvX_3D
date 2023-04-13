import React, {useState} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ff8e01",
        color: "#ffff",
      }}
      contentArrowStyle={{ borderRight: "10px solid #ff8e01" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold px-2 pt-1'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-2 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// const PopUp = () => {
//   return(
//     <div>
//       hello
//     </div>
//   )
// }

const Experience = () => {
  // const [Showpopup, setShowpopup] = useState("");
  // const handleClick = () => {
  //   setShowpopup(true);
  // }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What we have planned for you
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Events Timeline
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              // onClick = {handleClick}
              
            />
              
          ))}
          {/* {Showpopup && <PopUp />} */}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "");