"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    title: "Haggle",
    category: "Marketplace side project",
    description:
      "A side project exploring product and service discovery with negotiation at the center. The concept includes seller details, saved items, and reusable marketplace listing patterns.",
    image: null,
    link: null,
    technologies: [],
  },
  {
    title: "Alps",
    category: "Help and documentation platform",
    description:
      "Frontend work on a platform for organizing customer help content, including articles, guides, playlists, themes, and feedback interfaces.",
    image: "/alpsFrontPage.PNG",
    link: "/projects/alps",
    technologies: ["React", "Next.js", "TypeScript", "REST APIs"],
  },
  {
    title: "King David Elites",
    category: "Marketplace",
    description:
      "Built a responsive luxury marketplace with product listings, search, and dynamic filtering, including custom pagination and payment and inventory API integrations.",
    image: "/king-david-main.PNG",
    link: "/projects/king-david-elites",
    technologies: ["Next.js", "Redux", "Tailwind CSS"],
  },
  {
    title: "Curious Kids",
    category: "Education",
    description:
      "An education platform with school management dashboard interfaces for educators and administrators.",
    image: "/curiouzkidz.PNG",
    link: "/projects/curious-kids",
    technologies: ["Next.js", "Redux", "Tailwind CSS"],
  },
  {
    title: "Nifinspired",
    category: "E-commerce",
    description:
      "A skincare storefront with product and editorial imagery, built for a client project.",
    image: "/nifinspired.PNG",
    link: "/projects/nifinspired",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "Remap Link",
    category: "Automotive",
    description:
      "A responsive web experience for an automotive ECU tuning service.",
    image: "/remap-link.PNG",
    link: "/projects/remap-link",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "360 Shotitz Photography",
    category: "Photography",
    description: "A portfolio site presenting photography services and work.",
    image: "/360-shotitz.PNG",
    link: "/projects/360-shotitz-photography",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "African Made Items",
    category: "Marketplace concept",
    description:
      "A storefront concept for African-made fashion, art, home decor, and accessories.",
    image: "/portfolio-africa.PNG",
    link: "/projects/african-made-items",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Shinzoku",
    category: "Hackathon project",
    description:
      "A web project created in a hackathon, with a dedicated project page and existing visual assets.",
    image: "/shinzoku.PNG",
    link: "/projects/shinzoku",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

const additionalWork = [
  {
    title: "Gommerce · open-source collaboration",
    description:
      "Collaborative backend contribution to a multi-vendor commerce platform, working with Flask, PostgreSQL, and SQLAlchemy on API schemas and role-based routing.",
    technologies: "Flask · PostgreSQL · SQLAlchemy",
  },
];

function ProjectCard({ project, reduceMotion }) {
  const content = (
    <>
      {project.image ? (
        <Image src={project.image} alt={`${project.title} project screenshot`} width={900} height={560} className="h-52 w-full object-cover" />
      ) : (
        <div className="flex h-52 items-end bg-[#e9eee7] p-6">
          <span className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-[#3f4a3c]">Product concept</span>
        </div>
      )}
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#3f7d35]">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-gray-600">{project.description}</p>
        {project.technologies.length > 0 && (
          <ul aria-label={`${project.title} technologies`} className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => <li key={tech} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">{tech}</li>)}
          </ul>
        )}
        {project.link && <span className="mt-5 inline-block text-sm font-semibold text-gray-900 group-hover:underline">Project details <span aria-hidden="true">→</span></span>}
      </div>
    </>
  );

  return (
    <motion.article
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeOut" }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
    >
      {project.link ? (
        <Link href={project.link} className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f7d35]">{content}</Link>
      ) : <div>{content}</div>}
    </motion.article>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const reduceMotion = useReducedMotion();
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto mt-24 max-w-6xl scroll-mt-24"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3f7d35]">
        Selected work
      </p>
      <h2
        id="projects-title"
        className="mt-2 text-3xl font-semibold tracking-tight"
      >
        Product work and client projects
      </h2>
      <p className="mt-4 max-w-2xl leading-7 text-gray-600">
        Selected product work across mobile, marketplaces, education, and
        content platforms.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, showAll ? projects.length : 3).map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
      <button
        type="button"
        aria-expanded={showAll}
        onClick={() => setShowAll(!showAll)}
        className="mt-8 rounded-xl border border-gray-300 bg-white px-5 py-3 font-medium hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f7d35]"
      >
        {showAll ? "Show selected projects" : "Show all projects"}
      </button>
      {showAll && (
        <div className="mt-14">
          <h3 className="text-xl font-semibold">
            Additional product and collaborative work
          </h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {additionalWork.map((project) => (
              <motion.article
                key={project.title}
                className="rounded-2xl border border-gray-200 bg-white p-5"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: reduceMotion ? 0 : 0.35 }}
                whileHover={reduceMotion ? undefined : { y: -3 }}
              >
                <h4 className="font-semibold">{project.title}</h4>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>
                <p className="mt-4 text-xs font-medium text-gray-700">
                  {project.technologies}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
