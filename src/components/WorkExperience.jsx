import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { about1 } from "@/atomic-componets/AnimationOrder";
const WorkExperience = () => {
  const baseExperience = [
    {
      title: "Frontend Developer",
      company: "FreexIT Technologies",
      duration: "Jan 2024 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Connectin Skillz",
      duration: "Jul 2022 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Alps",
      duration: "Feb 2024 - Jun 2025",
    },
    {
      title: "Frontend Developer",
      company: "Creos Community",
      duration: "Jul 2023 - Jan 2024",
    },
  ];

  const experienceAnimations = baseExperience.map(() => useAnimation());
  const experienceRefs = baseExperience.map(() => useRef(null));

  const Experience = baseExperience.map((experience, i) => ({
    ...experience,
    control: experienceAnimations[i],
    ref: experienceRefs[i],
  }));

  const controls1 = useAnimation();
  const a1 = useRef(null);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= a1.current.offsetTop - 500) {
      controls1.start("visible");
    }
    for (let i = 0; i < Experience.length; i++) {
      const ref = Experience[i].ref;
      if (ref?.current && scrollY >= ref.current.offsetTop - 500) {
        Experience[i].control.start("visible");
      }
    }
  };

  useEffect(() => {
    const onScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div
        className="w-full cflexss gap-[30px] mt-[70px] py-[20px] md:border-l-[1px] md:border-r-[1px] rounded-[20px] md:px-[100px] lg:px-[150px]"
        id="work-experience"
      >
        <motion.h1
          variants={about1}
          initial="hidden"
          animate={controls1}
          ref={a1}
          className="w-full text-center md:text-left text-[20px] md:text-[25px] font-[500]"
        >
          Work Experience
        </motion.h1>
        <div className="w-full cflexss gap-[30px]">
          {/* Add your work experience items here */}
          {Experience.map((exp, index) => {
            return (
              <motion.div
                variants={about1}
                initial="hidden"
                animate={exp.control}
                ref={exp.ref}
                key={index}
                className="bg-white text-[16px] flexbm gap-[10px] p-6 rounded-lg shadow-md w-full flex-wrap"
              >
                <p className="text-[#6E6E6E]">{exp.duration}</p>
                <div className="text-[#6E6E6E] flexsm gap-[10px]  md:gap-[30px] flex-wrap">
                  <p className="font-[500]"> {exp.title} at</p>
                  <div className="px-[20px] flexmm gap-[10px] font-[600] text-[14px] rounded-[10px] bg-[#E1F9DC] text-[#3f4a3c] py-[10px] cursor-default">
                    <div className="w-[8px] h-[8px] bg-[#3f4a3c] rounded-full" />
                    {exp.company}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Repeat for more work experiences */}
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
