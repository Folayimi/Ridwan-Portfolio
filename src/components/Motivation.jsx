import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { about1, about2, about3 } from "@/atomic-componets/AnimationOrder";

const Motivation = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const a1 = useRef(null);
  const a2 = useRef(null);
  const a3 = useRef(null);
  const a4 = useRef(null);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= a1.current.offsetTop - 500) {
      controls1.start("visible");
    }
    if (scrollY >= a2.current.offsetTop - 500) {
      controls2.start("visible");
    }
    if (scrollY >= a3.current.offsetTop - 500) {
      controls3.start("visible");
    }
    if (scrollY >= a4.current.offsetTop - 500) {
      controls4.start("visible");
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
      <div className="cflexsm gap-[30px] w-full mt-[50px] md:border-r-[1px] md:border-l-[1px] rounded-[20px] md:px-[100px] lg:px-[200px] py-[50px]">
        <div className="w-full lg:w-[700px] flexbs gap-[30px] text-[25px] md:text-[30px] font-[600]">
          <motion.div
            variants={about2}
            initial="hidden"
            animate={controls1}
            ref={a1}
          >
            <div className="flex flex-col md:gap-[10px] md:flex-row items-start justify-start md:flex-wrap">
              <span> Your Vision, </span> <p> My Creation.</p>
            </div>
            <span className="block">Let's Bring It To Life</span>
          </motion.div>
          <motion.div
            variants={about3}
            initial="hidden"
            animate={controls3}
            ref={a3}
            className="flexmm mt-[10px]"
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
        </div>
        <motion.p
          variants={about1}
          initial="hidden"
          animate={controls2}
          ref={a2}
          className="lg:w-[700px] text-[16px] text-[#6E6E6E] font-[500] leading-[2.0] md:leading-relaxed capitalize text-justify"
        >
          Let’s be real, your brand deserves better than a slow, outdated
          interface. With the right frontend approach, a clean, modern redesign
          can completely change how users experience your product, making it
          faster, smoother, and more engaging. I’m here to help you bring that
          transformation to life. Let’s level it up.
        </motion.p>
        <motion.div
          variants={about1}
          initial="hidden"
          animate={controls2}
          ref={a2}
          className="lg:w-[700px] w-full cflexss text-[20px] md:text-[25px] font-[600]"
        >
          <p>
            Looking For Someting{" "}
            <span className="italic font-[500]">Unique?</span>
          </p>
          <p>
            Feel Free To Share{" "}
            <span className="italic font-[500]">Your Ideas!</span>
          </p>
        </motion.div>
        <motion.div
          variants={about2}
          initial="hidden"
          animate={controls4}
          ref={a4}
          className="w-full lg:w-[700px] cflexss text-center md:text-left text-[14px] font-[500] text-[#6E6E6E] leading-relaxed gap-[10px]"
        >
          <p>Got a great idea? Let’s create something amazing together!.</p>
          <Link href="mailto:ridwanfolayimi@gmail.com">
            <button className="flexsm gap-[20px] bg-[#1B1B1B] text-left text-white px-[30px] md:px-[50px] py-[10px] rounded-[20px] md:rounded-full hover:scale-102 transition-transform duration-300 cursor-pointer">
              <p>Drop an email at ridwanfolayimi@gmail.com</p>
              <MdEmail className="w-10 h-10 md:w-6 md:h-6 text-white" />
            </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Motivation;
