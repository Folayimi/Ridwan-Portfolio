"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const focusAreas = [
  {
    title: "Cross-platform mobile",
    description:
      "Flutter, Dart, React Native, Expo, and TypeScript for reusable cross-platform application features.",
  },
  {
    title: "Connected product workflows",
    description:
      "REST APIs, authentication and OTP verification, local persistence, messaging, payments, uploads, and Socket.IO integrations.",
  },
  {
    title: "Team delivery",
    description:
      "I turn product requirements into application workflows, collaborate with backend and mobile developers, and support debugging and feature integration.",
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto mt-20 max-w-6xl scroll-mt-24"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className="grid gap-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:p-12">
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.1 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3f7d35]">
            About me
          </p>
          <h2
            id="about-title"
            className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            Mobile App Engineer focused on useful, dependable products.
          </h2>
          <p className="mt-5 leading-7 text-gray-600">
            I’m Ogunlade Ridwan Folayimi, a Mobile App Engineer experienced in
            cross-platform development with Flutter, Dart, React Native, and
            Expo. My work spans insurance, education, healthcare-focused
            networking, and marketplace products.
          </p>
          <p className="mt-4 leading-7 text-gray-600">
            I enjoy turning product requirements into functional mobile
            experiences, integrating backend services, and collaborating with
            developers to deliver reliable features. I also work with React and
            Next.js, bringing a broader frontend perspective to application
            development.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3" aria-label="Photos of Ridwan Ogunlade">
            <motion.div whileHover={reduceMotion ? undefined : { y: -5, rotate: -1 }} transition={{ duration: 0.2 }}>
              <Image src="/abt1.jpeg" alt="Ridwan Ogunlade wearing a patterned shirt" width={500} height={700} className="h-52 w-full rounded-2xl object-cover object-center shadow-sm sm:h-64" />
            </motion.div>
            <motion.div whileHover={reduceMotion ? undefined : { y: -5, rotate: 1 }} transition={{ duration: 0.2 }}>
              <Image src="/abt2.jpeg" alt="Portrait of Ridwan Ogunlade" width={700} height={700} className="h-52 w-full rounded-2xl object-cover object-center shadow-sm sm:h-64" />
            </motion.div>
          </div>
          <p className="mt-4 text-sm text-gray-600">Based in Lagos, Nigeria</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <a className="underline underline-offset-4" href="mailto:ridwanfolayimi@gmail.com">Email</a>
            <a className="underline underline-offset-4" href="tel:+2348074442379">+234 807 444 2379</a>
            <a className="underline underline-offset-4" href="tel:+2348124086854">+234 812 408 6854</a>
            <a className="underline underline-offset-4" href="https://github.com/Folayimi" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="underline underline-offset-4" href="https://www.linkedin.com/in/ridwan-ogunlade-1a9610369" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <Link
            href="/Ridwan_Ogunlade_Mobile_Engineer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-xl bg-[#1b1b1b] px-5 py-3 font-medium text-white transition hover:bg-[#3f4a3c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f7d35]"
          >
            View CV <span className="sr-only">(opens in a new tab)</span>
          </Link>
        </motion.div>

        <motion.div initial={reduceMotion ? false : { opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.18 }}>
          <h3 className="text-lg font-semibold">How I contribute</h3>
          <ul className="mt-4 divide-y divide-gray-200">
            {focusAreas.map((area) => (
              <li key={area.title} className="py-5 first:pt-0 last:pb-0">
                <h4 className="font-semibold text-gray-900">{area.title}</h4>
                <p className="mt-2 leading-7 text-gray-600">
                  {area.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-7 rounded-2xl bg-[#f5f7f3] p-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#3f7d35]">
              Product domains
            </p>
            <p className="mt-2 leading-7 text-gray-700">
              Healthcare · Insurance · Education · Marketplaces
            </p>
          </div>
          <div className="mt-5 rounded-2xl border border-gray-200 p-5">
            <h4 className="font-semibold">Education &amp; community</h4>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              B.Eng. Mechatronics Engineering, FUNAAB (Oct 2019–Jul 2025), CGPA 4.11 ·
              Udacity Full Stack Developer Nanodegree (May–Aug
              2022) · GDSC volunteer tutor,
              supporting learners with frontend fundamentals.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
