"use client";
import { motion, useReducedMotion } from "framer-motion";

const roles = [
  {
    title: "Mobile App Engineer",
    company: "InsureOnGo",
    context: "2025–Present",
    detail: "Develop and maintain a Flutter insurance app. Integrate REST services with Dio; implement phone sign-in and email OTP; build product discovery, listing, quotation, and cart flows; integrate Paystack where applicable; support claims image uploads, file selection, profile, notifications, customer support, WebView, local persistence, debugging, and Android release workflows.",
    technologies: "Flutter · Dart · GetX · Dio · REST APIs · GetStorage · Paystack",
  },
  {
    title: "Mobile App Engineer / Development Coordinator",
    company: "SchoolHouse",
    context: "Contract · September 2026–October 2026",
    detail: "Contributed role-based experiences for Super Admins, School Admins, Teachers, and Parents. Worked on school registration and supporting documents, profile retrieval, school information, dashboard statistics, API integration, conversation retrieval, and Socket.IO messaging alongside REST message operations. Coordinated implementation with another developer.",
    technologies: "React Native · Expo · TypeScript · Expo Router · Axios · REST APIs · Socket.IO",
  },
  {
    title: "Frontend Developer",
    company: "Alps",
    context: "Contract · February 2024–June 2025",
    detail: "Developed frontend features for a web help and documentation platform. Built interfaces for articles, videos, playlists, and guides; worked on configurable themes, domain verification, feedback and activity interfaces; integrated APIs and reusable UI components for content management workflows.",
    technologies: "React · Next.js · TypeScript · REST APIs",
  },
  {
    title: "Mobile App Engineer",
    company: "Connectin Skillz · My Bridge International (MBI)",
    context: "October 2022–October 2026",
    detail: "Developed mobile features for a healthcare-focused networking and knowledge-sharing platform, including professional connections, product listings, messaging, events, and article and journal upload and submission workflows. Integrated APIs and reusable Flutter components.",
    technologies: "Flutter · Dart · REST APIs",
  },
  {
    title: "Frontend Engineer",
    company: "FreexiT Technologies",
    context: "January 2024–January 2026 · Remote",
    detail: "Built responsive interfaces and an internal administration dashboard with Next.js, TypeScript, and Tailwind CSS. Collaborated across distributed teams on API integration, code reviews, and release workflows.",
    technologies: "Next.js · TypeScript · Tailwind CSS",
  },
  {
    title: "Frontend Engineer",
    company: "Creos Community · Curious Kidz",
    context: "July 2023–January 2024 · Remote",
    detail: "Built responsive school management dashboard interfaces, translated designs for multiple screen sizes, and collaborated with backend engineers on school workflows.",
    technologies: "Next.js · Tailwind CSS",
  },
];

export default function WorkExperience() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="work-experience" aria-labelledby="experience-title" className="mx-auto mt-24 max-w-6xl scroll-mt-24">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3f7d35]">Career</p>
      <h2 id="experience-title" className="mt-2 text-3xl font-semibold tracking-tight">Experience across mobile and web</h2>
      <ol className="mt-8 space-y-4">
        {roles.map((role) => (
          <motion.li
            key={role.company}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeOut" }}
            whileHover={reduceMotion ? undefined : { y: -3 }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">{role.title} <span className="text-gray-500">·</span> {role.company}</h3>
              <p className="text-sm text-gray-600">{role.context}</p>
            </div>
            <p className="mt-3 max-w-4xl leading-7 text-gray-600">{role.detail}</p>
            <p className="mt-3 text-sm font-medium text-gray-700">{role.technologies}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
