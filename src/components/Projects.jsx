import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { about1, about2 } from "@/atomic-componets/AnimationOrder";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  const [seeMore, setSeeMore] = useState(false);
  const controls1 = useAnimation();
  const controls3 = useAnimation();
  const a1 = useRef(null);
  const a2 = useRef(null);
  const a3 = useRef(null);

  const baseProjects = [
    {
      title: "Alps",
      description:
        "A platform designed to simplify documentation Organize playlists and streamline feedback reviews, All while empowering your customers effortlessly.",
      image: "/alpsFrontPage.PNG",
      link: "/projects/alps",
    },
    {
      title: "Nifinspired",
      description:
        "Our products harness the pure power of nature, utilizing organic ingredients that nurture your skin without harmful chemicals. ",
      image: "/nifinspired.PNG",
      link: "/projects/nifinspired",
    },
    {
      title: "King David Elites",
      description:
        "The King David Elites marketplace is where you find only the most exclusive and highest quality real estate, automobiles, luxury services, and collectibles.",
      image: "/king-david-main.PNG",
      link: "/projects/king-david-elites",
    },
    {
      title: "Curious Kids",
      description:
        "A leading educational platform that sparks curiosity, fosters creativity, and inspires young minds to explore the wonders of the world.",
      image: "/curiouzkidz.PNG",
      link: "/projects/curious-kids",
    },
    {
      title: "Shinzoku",
      description:
        "In the days of old, the world thrived, life thrived and powerful creatures were born, then it happened, a great invasion the likes of which the world had never seen before, the world was thrown into chaos, and the creatures were forced to flee to a new world.",
      image: "/shinzoku.PNG",
      link: "/projects/shinzoku",
    },
    {
      title: "360 Shotitz Photography",
      description:
        "Capturing life’s special moments that last a lifetime with professionalism and innovation since 2013, where every shutter click captures a narrative waiting to be unveiled.",
      image: "/360-shotitz.PNG",      
      link: "/projects/360-shotitz-photography",
    },
    {
      title: "Remap Link",
      description:
        "By meticulously fine-tuning a vehicle's Engine Control Unit (ECU), we have the capability to extract noteworthy enhancements in power, torque, and fuel efficiency.",
      image: "/remap-link.PNG",      
      link: "/projects/remap-link",
    },
    {
      title: "Portfolio",
      description:
        "Developed responsive, user portfolio showcasing the projects and skills of the user, built with Next.js and Tailwind CSS.",
      image: "/clarice-portfolio.PNG",      
      link: "/projects/portfolio",
    },
    {
      title: "African Made Items",
      description:
        "Showcasing and selling of varieties of African made items that are durable and cost effective in areas such as Fashion, Arts, Home Decor, Accessories e.t.c",
      image: "/portfolio-africa.PNG",      
      link: "/projects/african-made-items",
    },
  ];

  const projectAnimations = baseProjects.map(() => useAnimation());
  const projectRefs = baseProjects.map(() => useRef(null));

  const MyProjects = baseProjects.map((project, i) => ({
    ...project,
    control: projectAnimations[i],
    ref: projectRefs[i],
  }));
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= a1.current.offsetTop - 600) {
      controls1.start("visible");
    }
    if (scrollY >= a3.current.offsetTop - 600) {
      controls3.start("visible");
    }
    for (let i = 0; i < MyProjects.length; i++) {
      const ref = MyProjects[i].ref;
      if (ref?.current && scrollY >= ref.current.offsetTop - 600) {
        MyProjects[i].control.start("visible");
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
        className="w-full cflexss justify-start gap-[30px] mt-[150px] md:p-[20px] md:px-[100px] lg:px-[150px] md:border-l-[1px] md:border-r-[1px] rounded-[20px]"
        id="projects"
      >
        <motion.h1
          variants={about1}
          initial="hidden"
          animate={controls1}
          ref={a1}
          className="w-full text-[20px] md:text-[25px] text-center font-[500] mb-[20px]"
        >
          Stuffs I've Been Building
        </motion.h1>
        {/* <div className="w-full flex justify-center md:justify-start items-center flex-wrap gap-[20px]">
          {MyProjects.map((project, index) => {
            return (
              <>
                {!seeMore && index < 4 && (
                  <Link href={`${project.link}`} key={project.link}>
                    <motion.div
                      variants={about1}
                      initial="hidden"
                      animate={project.control}
                      key={index}
                      ref={project.ref}
                      className="p-[25px] rounded-[20px] cflexss gap-[20px] w-full md:w-[380px] bg-white border-[1px] cursor-pointer flex-shrink"
                    >
                      <div className="p-[10px] w-full flexmm rounded-[20px] bg-[#C7C7C7]">
                        <Image
                          src={`${project.image}`}
                          alt={project.title}
                          width={500}
                          height={500}
                          className="w-full h-[170px] rounded-[10px] object-cover"
                        />
                      </div>
                      <h1 className="font-[500] text-[25px]">
                        {project.title}
                      </h1>
                      <p className="text-[16px] text-[#6E6E6E] line-clamp-2">
                        {project.description}
                      </p>

                      <button className="group text-[14px] md:text-[16px] bg-[#F2F2F2] flexmm gap-[10px] text-black px-[25px] py-[15px] rounded-[10px] hover:bg-[#E1E1E1] transition-all duration-300 cursor-pointer">
                        View Project
                        <ChevronRightIcon className="w-5 h-5 group-hover:ml-2 transition-all duration-300" />
                      </button>
                    </motion.div>
                  </Link>
                )}
                {seeMore && (
                  <Link href={`${project.link}`} key={project.link}>
                    <motion.div
                      variants={about1}
                      initial="hidden"
                      animate={project.control}
                      ref={project.ref}
                      className="p-[25px] rounded-[20px] cflexss gap-[20px] w-[380px] bg-white border-[1px] cursor-pointer flex-shrink"
                    >
                      <div className="p-[10px] w-full flexmm rounded-[20px] bg-[#C7C7C7]">
                        <Image
                          src={`${project.image}`}
                          alt={project.title}
                          width={500}
                          height={500}
                          className="w-full h-[170px] rounded-[10px] object-cover"
                        />
                      </div>
                      <h1 className="font-[500] text-[25px]">
                        {project.title}
                      </h1>
                      <p className="text-[16px] text-[#6E6E6E] line-clamp-2">
                        {project.description}
                      </p>

                      <button className="group text-[14px] md:text-[16px] bg-[#F2F2F2] flexmm gap-[10px] text-black px-[25px] py-[15px] rounded-[10px] hover:bg-[#E1E1E1] transition-all duration-300 cursor-pointer">
                        View Project
                        <ChevronRightIcon className="w-5 h-5 group-hover:ml-2 transition-all duration-300" />
                      </button>
                    </motion.div>
                  </Link>
                )}
              </>
            );
          })}
        </div> */}
        <motion.div
          variants={about2}
          initial="hidden"
          animate={controls3}
          ref={a3}
          className="flex items-center justify-start md:justify-center w-full"
        >
          <button
            className="group text-center text-[14px] md:text-[16px] flexmm gap-[10px] mt-[10px] md:mt-[20px] cursor-pointer rounded-[10px] bg-[#1B1B1B] text-white px-[20px] py-[10px]"
            onClick={() => setSeeMore(!seeMore)}
          >
            {seeMore ? "View Less" : "View All"}
            <ChevronRightIcon className="w-5 h-5 group-hover:ml-2 transition-all duration-300" />
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
