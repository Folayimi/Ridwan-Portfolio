import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "alps",
    title: "Alps",
    category: "Help and documentation platform",
    summary:
      "A web-based help and documentation platform for publishing and organizing articles, videos, playlists, and guides.",
    role: "Frontend Developer · Contract",
    client: "Alps",
    period: "Feb 2024 – Jun 2025",
    cover: "/alpsFrontPage.PNG",
    gallery: ["/alps-createArticle.PNG", "/alps-folders.PNG", "/alps-design.PNG", "/alps-domain.PNG", "/alps-reports.PNG"],
    overview:
      "Alps provides a customer-facing help center and content management experience. I contributed to frontend features across content creation and organization, design customization, domain setup, and feedback.",
    contributions: [
      "Built interfaces for articles, videos, playlists, and guides.",
      "Implemented configurable themes, domain verification, and feedback and activity views.",
      "Integrated REST APIs and created reusable UI components for content management workflows.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "REST APIs"],
    website: "https://tryalps.com",
  },
  {
    slug: "king-david-elites",
    title: "King David Elites",
    category: "Luxury marketplace",
    summary:
      "A marketplace experience for discovering real estate, vehicles, luxury services, and collectibles.",
    role: "Frontend Engineer",
    client: "King David Elites",
    cover: "/king-david-main.PNG",
    gallery: ["/king-david-categ.PNG"],
    overview:
      "The product brings multiple premium listing categories into one responsive marketplace. The interface supports browsing and product discovery across the catalog.",
    contributions: [
      "Developed responsive marketplace pages and listing interfaces.",
      "Implemented search, filtering, and custom pagination for catalog discovery.",
      "Integrated payment and inventory related APIs into the frontend experience.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "REST APIs"],
    website: "https://king-david-elite.vercel.app/",
  },
  {
    slug: "curious-kids",
    title: "Curious Kids",
    category: "Education",
    summary:
      "A school and learning platform designed to make educational content accessible to young learners and educators.",
    role: "Frontend Engineer",
    client: "Creos Community",
    period: "Jul 2023 – Jan 2024",
    cover: "/curiouzkidz.PNG",
    gallery: [],
    overview:
      "I contributed to responsive web experiences for the Curious Kidz education product, including school management dashboard interfaces.",
    contributions: [
      "Translated product designs into responsive interfaces for desktop and mobile.",
      "Built frontend dashboard views for school administration workflows.",
      "Collaborated with backend engineers on product features and data integration.",
    ],
    technologies: ["Next.js", "Redux", "Tailwind CSS"],
    website: "https://curiouskidzng.com/",
  },
  {
    slug: "nifinspired",
    title: "Nifinspired",
    category: "E-commerce",
    summary: "A skincare storefront presenting products and editorial content.",
    role: "Frontend Engineer",
    client: "Connectin Skillz",
    cover: "/nifinspired.PNG",
    gallery: ["/nifinspired-blog1.PNG"],
    overview:
      "A consumer skincare web experience for browsing products and brand content.",
    contributions: [
      "Built storefront and editorial interfaces for desktop and mobile.",
      "Connected product experiences with the existing commerce workflow.",
    ],
    technologies: ["React", "Tailwind CSS", "Stripe integration"],
    website: "https://nifinspired.com/",
  },
  {
    slug: "shinzoku",
    title: "Shinzoku",
    category: "Hackathon project",
    summary: "A visual web experience created for a hackathon project.",
    role: "Frontend contributor",
    client: "Hackathon team",
    cover: "/shinzoku.PNG",
    gallery: ["/shinzoku-path.PNG"],
    overview: "A story-led project site presenting the Shinzoku concept and world.",
    contributions: ["Built responsive pages and visual presentation for the project."],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    website: "https://shinzoku.vercel.app/",
  },
  {
    slug: "360-shotitz-photography",
    title: "360 Shotitz Photography",
    category: "Photography portfolio",
    summary: "A portfolio site presenting photography services and selected work.",
    role: "Frontend Engineer",
    client: "Freelance",
    cover: "/360-shotitz.PNG",
    gallery: [],
    overview: "A responsive web portfolio designed to showcase photography and services.",
    contributions: ["Built responsive portfolio and service pages."],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    website: "https://360-shotitz.vercel.app/",
  },
  {
    slug: "remap-link",
    title: "Remap Link",
    category: "Automotive services",
    summary: "A web experience for an automotive ECU tuning service.",
    role: "Frontend Engineer",
    client: "Freelance",
    cover: "/remap-link.PNG",
    gallery: ["/remap-buildPlates.PNG"],
    overview: "A responsive service website presenting ECU tuning information and vehicle-related content.",
    contributions: ["Built service information and responsive vehicle detail interfaces."],
    technologies: ["Next.js", "Tailwind CSS"],
    website: "https://the-remap-link.vercel.app/",
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    category: "Portfolio",
    summary: "A responsive portfolio website built to present a client’s work and profile.",
    role: "Frontend Engineer",
    client: "Freelance",
    cover: "/clarice-portfolio.PNG",
    gallery: [],
    overview: "A compact personal portfolio with project and professional information.",
    contributions: ["Implemented responsive portfolio sections and project presentation."],
    technologies: ["Next.js", "Tailwind CSS"],
    website: "https://clarice-portfolio.vercel.app/",
  },
  {
    slug: "african-made-items",
    title: "African Made Items",
    category: "Marketplace concept",
    summary: "A storefront concept for African-made fashion, art, home decor, and accessories.",
    role: "Frontend Engineer",
    cover: "/portfolio-africa.PNG",
    gallery: [],
    overview: "A catalog experience highlighting locally made products across several categories.",
    contributions: ["Built responsive storefront and category presentation."],
    technologies: ["Next.js", "Tailwind CSS"],
    website: "https://next-portfolio-africa-devfolas-projects.vercel.app/",
  },
];

function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({ params }) {
  const { projectId } = await params;
  const project = getProject(projectId);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: `${project.title} | Ogunlade Ridwan`, description: project.summary, images: [project.cover] },
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { projectId } = await params;
  const project = getProject(projectId);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <main id="main-content" className="min-h-screen bg-[#f5f5f5] px-4 pb-20 pt-8 text-gray-950 sm:px-6 sm:pt-12 lg:px-8">
      <article className="mx-auto max-w-6xl">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-gray-600">
          <Link href="/#projects" className="rounded underline-offset-4 hover:text-black hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f7d35]">Projects</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="truncate text-gray-950">{project.title}</span>
        </nav>

        <header className="grid gap-8 pb-9 md:grid-cols-[minmax(0,1fr)_18rem] md:items-end md:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#3f7d35]">{project.category}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">{project.summary}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#1b1b1b] px-5 font-medium text-white transition-colors hover:bg-[#3f4a3c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f7d35]">
              Visit live project <span className="ml-2" aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </header>

        <figure className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 shadow-sm sm:p-3">
          <Image src={project.cover} alt={`${project.title} interface`} width={1600} height={1000} priority className="aspect-[16/10] w-full rounded-2xl object-cover sm:aspect-[16/8]" />
          <figcaption className="px-3 py-3 text-sm text-gray-500">Project interface</figcaption>
        </figure>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <div className="space-y-10">
            <section aria-labelledby="overview-title">
              <h2 id="overview-title" className="text-2xl font-semibold tracking-tight">Overview</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600">{project.overview}</p>
            </section>
            <section aria-labelledby="contribution-title">
              <h2 id="contribution-title" className="text-2xl font-semibold tracking-tight">My contribution</h2>
              <ul className="mt-4 space-y-3">
                {project.contributions.map((item) => <li key={item} className="flex gap-3 leading-7 text-gray-600"><span aria-hidden="true" className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3f7d35]" />{item}</li>)}
              </ul>
            </section>

            {project.gallery.length > 0 && (
              <section aria-labelledby="gallery-title">
                <h2 id="gallery-title" className="text-2xl font-semibold tracking-tight">More screens</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((image) => (
                    <figure key={image} className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-2">
                      <Image src={image} alt={`${project.title} screen`} width={1000} height={700} className="aspect-[4/3] w-full rounded-xl object-cover" />
                    </figure>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold">Project details</h2>
            <dl className="mt-5 space-y-5">
              <div><dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">My role</dt><dd className="mt-1 font-medium">{project.role}</dd></div>
              {project.client && <div><dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Organization</dt><dd className="mt-1 font-medium">{project.client}</dd></div>}
              {project.period && <div><dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Period</dt><dd className="mt-1 font-medium">{project.period}</dd></div>}
            </dl>
            <div className="mt-6 border-t border-gray-200 pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">Technology</h3>
              <ul className="mt-3 flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="rounded-full bg-[#f2f4f1] px-3 py-1.5 text-sm text-gray-700">{technology}</li>)}</ul>
            </div>
          </aside>
        </div>

        <nav aria-label="More projects" className="mt-16 grid gap-3 border-t border-gray-200 pt-6 sm:grid-cols-2">
          {previous ? <Link href={`/projects/${previous.slug}`} className="rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f7d35]"><span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Previous project</span><span className="mt-1 block font-semibold">← {previous.title}</span></Link> : <span />}
          {next ? <Link href={`/projects/${next.slug}`} className="rounded-2xl border border-gray-200 bg-white p-5 text-left transition hover:border-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f7d35] sm:text-right"><span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Next project</span><span className="mt-1 block font-semibold">{next.title} →</span></Link> : <Link href="/#projects" className="rounded-2xl border border-gray-200 bg-white p-5 text-left font-semibold transition hover:border-gray-400 sm:text-right">Back to all projects →</Link>}
        </nav>
      </article>
    </main>
  );
}
