import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Globe from "./Globe";
import useWindowDimensions from "./CheckWidth";

import { logo, logo_nbg, menu, close, csea } from "../assets";
import azure from '../assets/azurelogo.png'

const Contact = () => {
  const { height, width } = useWindowDimensions();
  const breakpoint = 700;

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      // const response = await fetch("http://localhost:3000/send/remark", {
        const response = await fetch("https://csea-ajce.in/send/remark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  if (width > breakpoint) {
    return (
      <div className="flex-col">
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-primary p-8 rounded-2xl border-4 border-[#ff8f00]"
        >
          <p className={styles.sectionSubText}>How may we help you ?</p>
          <h3 className={styles.sectionHeadText}>Contact Us</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-[#ff8f00] font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-[#ff8f00] font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-[#ff8f00] font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Message sent" : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
        </div>

        <div className={'bg-cover bg-no-repeat bg-center relative w-full h-[200px] mt-[35px]'}>
        <div  className={`relative  max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-20 justify-center`}>
          <div className={" flex-row justify-center align-center w-[180px] h-[180px]"}>
           <img src={csea} alt='logo' className='object-contain mt-6'/>
          </div>
          <div className={" flex-row justify-center align-center w-[300px] h-[200px]"}>
           <img src={logo} alt='logo' className='object-contain mt-16 ml-4'/>
          </div>          
          <div className={" flex-row justify-center align-center w-[200px] h-[100px]"}>
           <img src={azure} alt='logo' className='object-contain mt-12'/>
          </div>
        </div>
      </div> 
        <div className="flex text-gray-400 justify-center text-[16px] flex-row gap-5">
       
          <div className="flex flex-col  text-right ">
          <span>evolvx2023@gmail.com</span>
          <span>+91 81378 10073</span>
          <a href="http://www.instagram.com/cseaajce/" className="underline text-tertiary"> Instagram</a>

          </div>
          <div className="flex flex-col text-left">
          <span>Amal Jyothi College of Engineering</span>
          <span>Kanjirappally, P.O Kottayam</span>
          <a href="https://www.ajce.in/cse/index.html" className="underline text-tertiary">CSE AJCE</a>
        </div>
          
        </div>
        
      </div>

    );
  } else {
    return (
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
         <div className="flex text-gray-400 justify-center text-[12px] flex-row gap-10">
       
       <div className="flex flex-col  text-right ">
       <span>evolvx2023@gmail.com</span>
       <span>+91 81378 10073</span>
       <a href="http://www.instagram.com/cseaajce/" className="underline text-tertiary"> Instagram</a>

       </div>
       <div className="flex flex-col text-left">
       <span>Amal Jyothi College of Engineering</span>
       <span>Kanjirappally, P.O Kottayam</span>
     </div>
       
     </div>
     
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-primary p-8 rounded-2xl border-4 border-[#ff8f00]"
        >
          
          <p className={styles.sectionSubText}>How may we help you ?</p>
          <h3 className={styles.sectionHeadText}>Contact Us</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-[#ff8f00] font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-[#ff8f00] font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-[#ff8f00] font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Message sent" : "Send"}
            </button>
          </form>
          
        </motion.div>
        

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          
          {/* <EarthCanvas /> */}
          <Globe />
          
        </motion.div>

      </div>
    );
  }
};

export default SectionWrapper(Contact, "contact");
