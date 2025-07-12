import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion, useAnimation } from "framer-motion";
import { service1, service2 } from "@/atomic-componets/AnimationOrder";

const Services = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const b1 = useRef(null);
  const b2 = useRef(null);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= b1.current.offsetTop - 600) {
      controls1.start("visible");
    }
    if (scrollY >= b2.current.offsetTop - 600) {
      controls2.start("visible");
    }
  };
  useEffect(() => {
    const onScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const MyServices = [
    {
      title: "Web Development",
      description:
        "I build fast, modern interfaces using React and Next.js. Optimized for scalability, performance, and seamless experiences.",
      image: "/programming.svg",
    },
    {
      title: "Responsive Design",
      description:
        "I design clean, mobile-first layouts with Tailwind CSS—adaptable, visually consistent, and optimized for all screen sizes.",
      image: "/dev-environment.svg",
    },
    {
      title: "App Development",
      description:
        "I develop cross-platform mobile apps with React Native for iOS and Android—from a single codebase, with a native feel.",
      image: "/develope-app.svg",
    },
    {
      title: "Backend Development",
      description:
        "I craft secure and lightweight APIs using Flask and Python. Built for flexibility and seamless frontend integration.",
      image: "/code-review.svg",
    },
  ];

  return (
    <section className="w-full mt-[30px] md:mt-[50px] py-[20px]">
      <motion.h1
        variants={service1}
        initial="hidden"
        animate={controls1}
        ref={b1}
        className="text-[20px] md:text-[25px] text-center font-[500] mb-[30px] md:mb-[20px]"
      >
        Things I Love To Do
      </motion.h1>

      <motion.div
        variants={service2}
        initial="hidden"
        animate={controls2}
        ref={b2}
        className="w-full flexsm overflow-hidden"
      >
        <Marquee gradient={false} speed={50}>
          {[...MyServices, ...MyServices].map((service, index) => (
            <div
              key={index}
              className="cflexmm w-[280px] md:w-[320px] h-auto p-6 mx-[10px] md:mx-[30px] rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-default"
            >
              <div className="w-[100px] h-[100px] mb-5 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="w-full text-xl text-left font-semibold mb-3 group-hover:text-[#3f4a3c] transition-colors">
                {service.title}
              </h2>
              <p className="text-[#6E6E6E] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default Services;
