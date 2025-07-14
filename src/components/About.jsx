import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { motion, useAnimation } from "framer-motion";
import { about1, about2 } from "@/atomic-componets/AnimationOrder";

const About = () => {
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
    if (scrollY >= a1.current.offsetTop - 600) {
      controls1.start("visible");
    }
    if (scrollY >= a2.current.offsetTop - 600) {
      controls2.start("visible");
    }
    if (scrollY >= a3.current.offsetTop - 600) {
      controls3.start("visible");
    }
    if (scrollY >= a4.current.offsetTop - 600) {
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
      <div
        className="w-full md:border-l-[1px] md:border-r-[1px] rounded-[20px] pt-[50px] md:p-[20px] lg:p-[50px] cflexmm lg:py-[70px] mt-[20px]"
        id="about"
      >
        <div className="w-full lg:w-[800px] p-[20px] text-justify">
          <motion.h1
            variants={about1}
            initial="hidden"
            animate={controls1}
            ref={a1}
            className="text-center text-[20px] md:text-[25px] font-[500] mb-[20px]"
          >
            About
          </motion.h1>
          {/* <p className="mt-[-15px]">ridwanfolayimi@gmail.com</p> */}
          <motion.p
            variants={about1}
            initial="hidden"
            animate={controls2}
            ref={a2}
            className="text-[16px] md:text-[18px] text-[#6E6E6E] leading-[2.0] md:leading-[1.6]"
          >
            <span className="text-[#1B1B1B] font-[500]">
              I am a passionate Frontend Engineer with a love for building
              responsive, user-friendly web and mobile apps.
            </span>{" "}
            I work with tools like React.js, Next.js, Tailwind CSS, React
            Native, and a bit of backend magic using Flask and Python.
          </motion.p>
          <motion.p
            variants={about1}
            initial="hidden"
            animate={controls2}
            ref={a2}
            className="text-[16px] md:text-[18px] text-[#6E6E6E] leading-[2.0] md:leading-[1.6] mt-[30px]"
          >
            <span className="text-[#1B1B1B] font-[500]">
              {" "}
              With a background in Mechatronics Engineering, I bring a unique
              blend of creativity, logic, and system thinking into everything I
              build.
            </span>{" "}
            I care deeply about clean design, smooth user experiences, and
            writing code that just makes sense.
          </motion.p>
          <motion.div
            variants={about1}
            initial="hidden"
            animate={controls3}
            ref={a3}
            className="flexmm w-full mt-[50px]"
          >
            <div className="group w-fit flexmm">
              <div className="relative w-[200px] md:w-[250px] h-[300px] md:h-[350px] bg-white shadow-md md:pt-[50px] pt-[40px] p-[10px] flexmm group-hover:scale-105 hover:ml-[-20px] transform duration-300 z-[50] md:z-0 mr-[-50px] md:mr-[-10px] mb-[-100px] md:mt-[-30px] rotate-[-10deg]">
                <Image
                  src={"/abt2.jpeg"}
                  alt="About Image 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-[5px]"
                />
                <Image
                  src={"/pin.PNG"}
                  alt="Pin Icon"
                  width={100}
                  height={100}
                  className="absolute w-[30px] h-auto top-[10px] md:top-[5px] left-[calc(50% - 30px)] rounded-full"
                />
              </div>
              <div className="relative w-[200px] md:w-[250px] h-[300px] md:h-[350px] bg-white shadow-xl md:pt-[50px] pt-[40px] p-[10px] flexmm group-hover:scale-105 hover:mr-[-20px] transform duration-300 z-0 md:z-[50] ml-[-50px] md:ml-[-10px] md:mt-0 rotate-[10deg]">
                <Image
                  src={"/abt1.jpeg"}
                  alt="About Image 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-[5px]"
                />
                <Image
                  src={"/pin.PNG"}
                  alt="Pin Icon"
                  width={100}
                  height={100}
                  className="absolute w-[30px] h-auto top-[10px] md:top-[5px] left-[calc(50% - 30px)] rounded-full"
                />
              </div>
            </div>
          </motion.div>
          <p className="text-[16px] md:text-[18px] text-[#6E6E6E] leading-[2.0] md:leading-[1.6] mt-[80px]">
            I’m always excited to take on meaningful projects, collaborate with
            great people, and keep growing as a developer. Let’s build something
            awesome together!
          </p>
          <Link
            href="/folayimi-resume.pdf"
            // href=""
            target="_blank"
          >
            <motion.button
              variants={about2}
              initial="hidden"
              animate={controls4}
              ref={a4}
              className="mt-[30px] text-[14px] flexmm gap-[10px] bg-[#1B1B1B] px-[20px] py-[10px] rounded-full hover:scale-105 transform duration-300 cursor-pointer"
            >
              <span className="text-white font-[500]">View My Resume</span>
              <ClipboardDocumentIcon className="w-[20px] h-[20px] text-white" />
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
