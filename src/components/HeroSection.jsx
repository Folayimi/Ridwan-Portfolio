"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const technologies = ["Flutter", "Dart", "React Native", "Expo", "TypeScript", "REST APIs"];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section
      id="home"
      aria-labelledby="hero-title"
      className="mx-auto grid min-h-[76vh] max-w-6xl items-center gap-12 py-24 md:grid-cols-[1.35fr_0.65fr] md:py-32"
      initial={reduceMotion ? "visible" : "hidden"}
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } }}
    >
      <motion.div variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 16 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduceMotion ? 0 : 0.45 }}>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#3f7d35]">Mobile App Engineer | Flutter, Dart &amp; React Native</p>
        <h1 id="hero-title" className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">Building Mobile Experiences That Solve Real Problems.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">I build practical, user-focused applications with Flutter, Dart, and React Native, combining clear interfaces, reliable API integrations, and thoughtful engineering. I also bring frontend web experience with React and Next.js.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#projects" className="rounded-xl bg-[#1b1b1b] px-6 py-3 font-medium text-white transition hover:bg-[#3f4a3c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f7d35]">Explore selected work</Link>
          <a href="/Ridwan_Ogunlade_Mobile_Engineer_CV.pdf" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f7d35]">View CV <span className="sr-only">(opens in a new tab)</span></a>
          <a href="mailto:ridwanfolayimi@gmail.com" className="rounded-xl px-4 py-3 font-medium text-gray-700 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f7d35]">Contact</a>
        </div>
        <ul aria-label="Core technologies" className="mt-8 flex flex-wrap gap-2">{technologies.map((tech) => <li key={tech} className="rounded-full bg-white px-3 py-1.5 text-sm text-gray-700 ring-1 ring-gray-200">{tech}</li>)}</ul>
      </motion.div>
      <motion.div
        className="mx-auto w-56 md:w-full md:max-w-sm"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.2 }}
      >
        <Image src="/Avatar.PNG" alt="Portrait of Ridwan Ogunlade" width={600} height={600} priority className="aspect-square w-full rounded-[2rem] object-cover shadow-xl" />
      </motion.div>
    </motion.section>
  );
}
