"use client";
import { motion, useReducedMotion } from "framer-motion";

const roles = [
  {
    title: "Chief Mobile App Engineer",
    company: "InsureOnGo.com Ltd.",
    context: "Mar 2025–Present · On site",
    detail:
      "Led mobile delivery across Flutter and React Native for iOS and Android, including security architecture, an AI-powered chat feature, and release workflow improvements. Security work reduced vulnerabilities by 70%, while delivery improvements increased feature velocity by 80%.",
    technologies: "Flutter · React Native · GetX · Dio · Paystack · CI/CD",
  },
  {
    title: "Mobile App Engineer / Development Coordinator",
    company: "SchoolHouse",
    context: "Contract · Sep–Oct 2026",
    detail:
      "Contributed to a role-based school management app: authentication, school registration, profiles, dashboards, API data flows, and messaging with Socket.IO. Coordinated task priorities and feature integration with another developer.",
    technologies: "React Native · Expo · TypeScript · Axios · Socket.IO",
  },
  {
    title: "Frontend Engineer",
    company: "FreexiT Technologies",
    context: "Jan 2024–Jan 2026 · Remote",
    detail:
      "Built responsive interfaces and an admin dashboard with Next.js, TypeScript, and Tailwind CSS; worked with distributed teams on API integration, secure implementation, and CI/CD. Improved Lighthouse scores into the 90s, reduced critical bugs and security incidents by 70%, and raised delivery efficiency by 80% through workflow improvements.",
    technologies: "Next.js · TypeScript · Tailwind CSS · REST APIs",
  },
  {
    title: "Frontend Engineer",
    company: "Alps",
    context: "Feb 2024–Jun 2025 · Remote",
    detail:
      "Contributed to a feedback and documentation platform, including articles, playlists, guides, themes, domain verification, and feedback interfaces. Built reusable Next.js components and SEO improvements that increased search visibility by 90%.",
    technologies: "Next.js · Tailwind CSS · Redux · REST APIs",
  },
  {
    title: "Frontend Engineer",
    company: "Creos Community · Curious Kidz",
    context: "Jul 2023–Jan 2024 · Remote",
    detail:
      "Built responsive school management dashboard interfaces, translating designs into cross-device views and collaborating with backend engineers on workflows used by hundreds of educators. Contributed to code reviews and performance benchmarking.",
    technologies: "Next.js · Tailwind CSS",
  },
  {
    title: "Frontend Engineer / Mobile App Engineer",
    company: "Connectin Skillz · My Bridge International",
    context: "Frontend Engineer · Jul 2022–Present; Flutter app contributions · 2025–2026",
    detail:
      "Frontend work included a shared React component library, API contracts, and performance optimization that reduced initial bundles by 40%. Later Flutter work on the My Bridge International app covered professional connections, product listings, messaging, events, and article/journal submission; Tellimedicines was outside this feature scope.",
    technologies: "React · Flutter · Dart · REST APIs",
  },
];

export default function WorkExperience() {
  const reduceMotion = useReducedMotion();
  return (
    <section
      id="work-experience"
      aria-labelledby="experience-title"
      className="mx-auto mt-24 max-w-6xl scroll-mt-24"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3f7d35]">
        Career
      </p>
      <h2 id="experience-title" className="mt-2 text-3xl font-semibold tracking-tight">
        Experience across mobile and web
      </h2>
      <ol className="mt-8 space-y-4">
        {roles.map((role) => (
          <motion.li
            key={role.company}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
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
