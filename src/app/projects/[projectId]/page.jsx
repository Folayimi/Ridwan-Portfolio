"use client";
import React, { use, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Project = ({ params }) => {
  const { projectId } = use(params);
  const [selectedProject, setSelectedProject] = useState("");
  const [previousLink, setPreviousLink] = useState("");
  const [nextLink, setNextLink] = useState("");

  const MyProjects = [
    {
      title: "Alps",
      description:
        "A platform designed to simplify documentation Organize playlists and streamline feedback reviews, All while empowering your customers effortlessly.",
      images: ["/alpsFrontPage.PNG"],
      technologies: [
        "Next.js",
        "PayStack API",
        "Node.js",
        "Yoopter Editor",
        "Tailwind CSS",
        "Redux",
      ],
      link: "/projects/alps",
      year: "2024",
      type: "HelpCenter",
      client: "Alps Ltd.",
      website: "https://tryalps.com",
    },
    {
      title: "Nifinspired",
      description:
        "Our products harness the pure power of nature, utilizing organic ingredients that nurture your skin without harmful chemicals. ",
      images: ["/nifinspired.PNG"],
      technologies: ["React", "Node.js", "StripeAPI", "Tailwind CSS", "PHP"],
      link: "/projects/nifinspired",
      year: "2024",
      type: "E-Commerce",
      client: "Connectin Skillz",
      website: "https://nifinspired.com/",
    },
    {
      title: "King David Elites",
      description:
        "The King David Elites marketplace is where you find only the most exclusive and highest quality real estate, automobiles, luxury services, and collectibles.",
      images: ["/king-david-main.PNG"],
      technologies: [
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "PayStack API",
        "Node.js",
      ],
      link: "/projects/king-david-elites",
      year: "2022",
      type: "Real Estate",
      client: "KDE",
      website: "https://king-david-elite.vercel.app/",
    },
    {
      title: "Curious Kids",
      description:
        "A leading educational platform that sparks curiosity, fosters creativity, and inspires young minds to explore the wonders of the world.",
      images: ["/curiouzkidz.PNG"],
      technologies: ["Next.js", "Redux", "Tailwind CSS", "Node.js"],
      link: "/projects/curious-kids",
      year: "2023",
      type: "Education",
      client: "Creos Community",
      website: "https://curiouskidzng.com/",
    },
    {
      title: "Shinzoku",
      description:
        "In the days of old, the world thrived, life thrived and powerful creatures were born, then it happened, a great invasion the likes of which the world had never seen before, the world was thrown into chaos, and the creatures were forced to flee to a new world.",
      images: ["/shinzoku.PNG"],
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "/projects/shinzoku",
      year: "2025",
      type: "Hackathon",
      client: "Organizers",
      website: "https://shinzoku.vercel.app/",
    },
    {
      title: "360 Shotitz Photography",
      description:
        "Capturing life’s special moments that last a lifetime with professionalism and innovation since 2013, where every shutter click captures a narrative waiting to be unveiled.",
      images: ["/360-shotitz.PNG"],
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "PayStack API",
        "Node.js",
        "Redux",
        "TypeScript",
      ],
      link: "/projects/360-shotitz-photography",
      year: "2024",
      type: "Event",
      client: "FreeLance",
      website: "https://360-shotitz.vercel.app/",
    },
    {
      title: "Remap Link",
      description:
        "By meticulously fine-tuning a vehicle's Engine Control Unit (ECU), we have the capability to extract noteworthy enhancements in power, torque, and fuel efficiency.",
      images: ["/remap-link.PNG"],
      technologies: ["Next.js", "Tree.js", "Tailwind CSS"],
      link: "/projects/remap-link",
      year: "2024",
      type: "Vehicle Details",
      client: "FreeLance",
      website: "https://the-remap-link.vercel.app/",
    },
    {
      title: "Portfolio",
      description:
        "Developed responsive, user portfolio showcasing the projects and skills of the user, built with Next.js and Tailwind CSS.",
      images: ["/clarice-portfolio.PNG"],
      technologies: ["Next.js", "Tailwind CSS"],
      link: "/projects/portfolio",
      year: "2023",
      type: "Portfolio",
      client: "FreeLance",
      website: "https://clarice-portfolio.vercel.app/",
    },
    {
      title: "African Made Items",
      description:
        "Showcasing and selling of varieties of African made items that are durable and cost effective in areas such as Fashion, Arts, Home Decor, Accessories e.t.c",
      images: ["/portfolio-africa.PNG"],
      technologies: ["Next.js", "Tailwind CSS"],
      link: "/projects/african-made-items",
      year: "2023",
      type: "E-Commerce",
      client: "",
      website: "https://next-portfolio-africa-devfolas-projects.vercel.app/",
    },
  ];

  useEffect(() => {
    for (var i = 0; i < MyProjects.length; i++) {
      // console.log(
      //   MyProjects[i].title.replace(/ /g, "-").toLowerCase(),
      //   projectId
      // );
      if (MyProjects[i].title.replace(/ /g, "-").toLowerCase() === projectId) {
        setSelectedProject(MyProjects[i]);
        if (i > 0) {
          setPreviousLink(MyProjects[i - 1].link);
        }
        if (i < MyProjects.length - 1) {
          setNextLink(MyProjects[i + 1].link);
        }
      }
    }
  }, []);
  return (
    <>
      <div className="bg-[#F5F5F5] w-full py-[70px] md:px-[100px] lg:px-[200px] px-[20px] cflexsm gap-[30px]">
        <div className="cflexss w-full gap-[30px] text-[18px]">
          <h1 className="text-[35px] md:text-[40px] font-[600]">
            {selectedProject?.title}
          </h1>
          {selectedProject && (
            <div className="p-[10px] md:p-[20px] w-full flexmm rounded-[20px] bg-[#C7C7C7]">
              <Image
                src={selectedProject?.images[0]}
                alt={selectedProject?.images[0]}
                width={1000}
                height={1000}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-[10px]"
              />
            </div>
          )}
          <p>{selectedProject?.description}</p>
        </div>
        <div className="w-full bg-gray-200 p-[30px] text-[16px] cflexss gap-[20px] rounded-[15px]">
          <div className="w-full cflexss gap-[10px]">
            <p className="font-[600]">Description</p>
            <p>{selectedProject?.description}</p>
          </div>
          <hr className="w-full" />
          <div className="w-full cflexss gap-[10px]">
            <p className="font-[600]">Technologies</p>
            <div className="w-full flexsm gap-[20px] flex-wrap">
              {selectedProject &&
                selectedProject?.technologies.map((stack, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        className="px-[10px] py-[5px] bg-[#E1F9DC] text-[#57AF46] rounded-full text-[14px]"
                      >
                        {stack}
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
          <hr className="w-full" />
          <div className="w-full flexss flex-wrap gap-[50px] md:gap-[100px] lg:gap-[130px]">
            <div className="cflexss gap-[10px]">
              <p className="font-[600]">Year</p>
              <p>{selectedProject.year}</p>
            </div>
            <div className="cflexss gap-[10px]">
              <p className="font-[600]">Type</p>
              <p>{selectedProject.type}</p>
            </div>
            <div className="cflexss gap-[10px]">
              <p className="font-[600]">Client</p>
              <p>{selectedProject.client}</p>
            </div>
          </div>
        </div>

        <div className="w-full flexbm text-[14px] md:text-[16px] flex-wrap gap-[20px] mt-[20px]">
          <Link
            href={selectedProject ? selectedProject?.website : ""}
            target="_blank"
          >
            <div className="flexmm px-[20px] gap-[20px] py-[10px] rounded-[15px] bg-[#1B1B1B] text-white cursor-pointer hover:scale-105 transform transition-all druation-300">
              <p>View Project</p>
              <ArrowTopRightOnSquareIcon width={20} />
            </div>
          </Link>

          <div className="w-full md:w-fit flex md:justify-start justify-between items-center gap-[30px]">
            {previousLink && (
              <Link href={previousLink}>
                <button className="group md:text-[16px] flexmm gap-[10px] text-black px-[20px] py-[10px] rounded-[10px] bg-[#E1E1E1] transition-all duration-300 cursor-pointer">
                  <ChevronLeftIcon className="w-5 h-5 group-hover:mr-2 transition-all duration-300" />
                  Previous
                </button>
              </Link>
            )}

            {nextLink && (
              <Link href={nextLink}>
                <button className="group md:text-[16px] flexmm gap-[10px] text-black px-[20px] py-[10px] rounded-[10px] bg-[#E1E1E1] transition-all duration-300 cursor-pointer">
                  Next
                  <ChevronRightIcon className="w-5 h-5 group-hover:ml-2 transition-all duration-300" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
