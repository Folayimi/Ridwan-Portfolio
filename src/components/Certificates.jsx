"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { about1 } from "@/atomic-componets/AnimationOrder";

const Certificates = () => {
  const baseCertificates = [
    {
      src: "/udacity-certificate.PNG",
      alt: "Udacity Certificate",
      title: "Full Stack Developer Nanodegree · Udacity (May–Aug 2022)",
    },
    {
      src: "/hackathon-certificate.PNG",
      alt: "Hackathon Certificate",
      title: "Hackathon Certificate · Hacklab (2022)",
    },
    {
      src: "/nuesa-certificate.jpeg",
      alt: "Nuessa Certificate",
      title: "Certificate Of Appreciation  – NUESA",
    },
    {
      src: "/jobberman-certificate.jpeg",
      alt: "Jobberman Certificate",
      title: "Soft-Skills Training – JOBBERMAN",
    },
    {
      src: "/cctv-participation.jpeg",
      alt: "CCTV Certificate",
      title: "Certificate Of Participation – MARET Comm. Ltd.",
    },
    {
      src: "/cctv-training.jpeg",
      alt: "CCTV Certificate",
      title: "Certificate Of Training – MARET Comm. Ltd.",
    },    
  ];

  const certificateAnimations = baseCertificates.map(() => useAnimation());
  const certificateRefs = baseCertificates.map(() => useRef(null));

  const MyCertificates = baseCertificates.map((certificate, i) => ({
    ...certificate,
    control: certificateAnimations[i],
    ref: certificateRefs[i],
  }));

  const controls1 = useAnimation();
  const a1 = useRef(null);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= a1.current.offsetTop - 600) {
      controls1.start("visible");
    }
    for (let i = 0; i < MyCertificates.length; i++) {
      const ref = MyCertificates[i].ref;
      if (ref?.current && scrollY >= ref.current.offsetTop - 600) {
        MyCertificates[i].control.start("visible");
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
    <section id="certificates" className="py-20 px-[5%] text-black">
      <motion.h2
        variants={about1}
        initial="hidden"
        animate={controls1}
        ref={a1}
        className="text-[25px] font-[500] mb-10 text-center"
      >
        Certifications
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-[50px]">
        {MyCertificates.map((cert, i) => (
          <motion.div
            variants={about1}
            initial="hidden"
            animate={cert.control}
            ref={cert.ref}
            key={i}
            className="rounded-xl cflexbs overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white cursor-pointer"
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
            <div className="p-4 text-sm text-center font-medium">
              {cert.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
