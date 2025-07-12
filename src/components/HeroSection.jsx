import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
} from "@/atomic-componets/AnimationOrder";
const HeroSection = () => {
  return (
    <>
      <div className="w-full flexbm text-black md:border-l-[1px] md:border-r-[1px] rounded-[20px] mt-[-80px] md:mt-[-40px] md:p-[20px] lg:p-[50px]">
        <div className="w-full lg:w-[60%] flex flex-col items-center md:items-start justify-center pb-[20px] gap-[20px]">
          <div className="hidden md:block">
            <motion.div
              variants={hero1}
              initial="hidden"
              animate="visible"
              className="p-[5px] flexmm gap-[5px] bg-[#57AF46] rounded-[10px] cursor-default"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#3f4a3c] animate-pulse"
              >
                <path d="M12 2.25l2.765 6.577 7.235.602-5.5 4.825 1.618 7.096L12 17.77l-6.118 3.58 1.618-7.096-5.5-4.825 7.235-.602L12 2.25z" />
              </svg>
              <div className="text-[12px] font-semibold text-white tracking-wide uppercase">
                Welcome to my portfolio
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#3f4a3c] animate-pulse"
              >
                <path d="M12 2.25l2.765 6.577 7.235.602-5.5 4.825 1.618 7.096L12 17.77l-6.118 3.58 1.618-7.096-5.5-4.825 7.235-.602L12 2.25z" />
              </svg>
            </motion.div>
          </div>

          <motion.div
            variants={hero2}
            initial="hidden"
            animate="visible"
            className="w-full flexsm mt-[10px]"
          >
            <div className="relative w-[65px] h-[65px]">
              {/* Animated background behind */}
              <div className="absolute inset-0 rounded-full bg-[#57AF46] shadow-lg animate-[softPulse_3s_ease-in-out_infinite] z-0" />

              {/* Static image above */}
              <Image
                src="/Avatar.PNG"
                alt="Profile Picture"
                width={1000}
                height={1000}
                className="absolute top-0 left-0 z-10 rounded-full object-cover w-[65px] h-[65px] hover:scale-108 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.h1
            variants={hero3}
            initial="hidden"
            animate="visible"
            className="w-full text-[25px] md:text-[30px] lg:text-[35px] font-bold"
          >
            <span className="block">Hey, I'm Ridwan Ogunlade.</span>
            <span className="block">
              Software Engineer and Creative Technologist
            </span>
          </motion.h1>

          <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between gap-[20px] text-[18px] text-[#6E6E6E] leading-relaxed">
            <div className="w-full cflexss gap-[20px]">
              <motion.p
                variants={hero4}
                initial="hidden"
                animate="visible"
                className="w-full"
              >
                Bringing an interdisciplinary edge to development, where
                creative design meets structured logic and analysis.
              </motion.p>
              <motion.div
                variants={hero6}
                initial="hidden"
                animate="visible"
                className="hidden md:block lg:hidden"
              >
                <div className="flexsm gap-[25px] text-[16px] font-[500]">
                  <button className="bg-[#1B1B1B] text-white px-[20px] py-[8px] rounded-[10px] hover:scale-105 transition-transform duration-300 cursor-pointer">
                    Hire Me!
                  </button>
                  <div className="bg-[#E1F9DC] flexsm gap-[10px] text-black px-[20px] py-[10px] rounded-full cursor-default">
                    <div className="w-[10px] h-[10px] bg-[#3f4a3c] rounded-full" />
                    Let’s build something together
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={hero5}
              initial="hidden"
              animate="visible"
              className="w-[60%] md:w-[25%] lg:w-0 flexmm"
            >
              <Image
                src="/buildingW1.svg"
                alt="Profile Picture"
                width={1000}
                height={1000}
                className="block lg:hidden object-cover w-full hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          <div className="w-full block md:hidden lg:block mt-[20px]">
            <motion.div
              variants={hero6}
              initial="hidden"
              animate="visible"
              className="w-full flex justify-start items-start flex-wrap gap-[20px] lg:gap-[10px] text-[16px] font-[500]"
            >
              <button className="hidden lg:block bg-[#1B1B1B] text-white px-[20px] py-[8px] rounded-[10px] hover:scale-105 transition-transform duration-300 cursor-pointer">
                Hire Me!
              </button>
              <div className="bg-[#E1F9DC] flexsm gap-[10px] text-black px-[20px] py-[10px] rounded-full cursor-default">
                <div className="w-[10px] h-[10px] bg-[#3f4a3c] rounded-full" />
                Let’s build something together
              </div>
              <button className="lg:hidden bg-[#1B1B1B] text-white px-[20px] py-[8px] rounded-[10px] hover:scale-105 transition-transform duration-300 cursor-pointer">
                Hire Me!
              </button>
            </motion.div>
          </div>
        </div>

        <div className="hidden lg:block w-[40%] h-full">
          <motion.div
            variants={hero5}
            initial="hidden"
            animate="visible"
            className="h-full flexmm"
          >
            <Image
              src="/buildingW1.svg"
              alt="Profile Picture"
              width={1000}
              height={1000}
              className="object-cover w-[80%] hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
