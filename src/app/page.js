"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Motivation from "@/components/Motivation";
import Certificates from "@/components/Certificates";
import ContactForm from "@/components/Contact";

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-[#0d0d0d] text-white" : "bg-[#f5f5f5] text-black"
      } cflexss px-[20px] md:px-[100px] py-[100px]`}
      id="home"
    >
      <HeroSection />
      <Services />
      <About />
      <Stack />
      <Projects />
      <WorkExperience />
      <Motivation />
      <Certificates />
      <ContactForm />
    </main>
  );
}
