import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const Projects = () => {
  const [seeMore, setSeeMore] = useState(false);
  const MyProjects = [
    {
      title: "Alps",
      description:
        "A platform designed to simplify documentation Organize playlists and streamline feedback reviews, All while empowering your customers effortlessly.",
      image: "/alpsFrontPage.png",
      link: "",
    },
    {
      title: "Nifinspired",
      description:
        "Our products harness the pure power of nature, utilizing organic ingredients that nurture your skin without harmful chemicals. ",
      image: "/nifinspired.png",
      link: "",
    },
    {
      title: "King David Elite",
      description:
        "The King David Elites marketplace is where you find only the most exclusive and highest quality real estate, automobiles, luxury services, and collectibles.",
      image: "/king-david-main.png",
      link: "",
    },
    {
      title: "Curious Kids",
      description:
        "A leading educational platform that sparks curiosity, fosters creativity, and inspires young minds to explore the wonders of the world.",
      image: "/curiouzkidz.png",
      link: "",
    },
    {
      title: "360 Shotitz Photography",
      description:
        "Capturing life’s special moments that last a lifetime with professionalism and innovation since 2013, where every shutter click captures a narrative waiting to be unveiled.",
      image: "/360-shotitz.png",
      link: "",
    },
    {
      title: "Remap Link",
      description:
        "By meticulously fine-tuning a vehicle's Engine Control Unit (ECU), we have the capability to extract noteworthy enhancements in power, torque, and fuel efficiency.",
      image: "/remap-link.png",
      link: "",
    },
    {
      title: "Portfolio",
      description:
        "Developed responsive, user portfolio showcasing the projects and skills of the user, built with Next.js and Tailwind CSS.",
      image: "/clarice-portfolio.png",
      link: "",
    },
    {
      title: "African Made Items",
      description:
        "Showcasing and selling of varieties of African made items that are durable and cost effective in areas such as Fashion, Arts, Home Decor, Accessories e.t.c",
      image: "/portfolio-africa.png",
      link: "",
    },
  ];
  return (
    <>
      <div
        className="w-full cflexss gap-[30px] mt-[70px] py-[20px] border-l-[1px] border-r-[1px] rounded-[20px] px-[150px]"
        id="projects"
      >
        <h1 className="w-full text-[25px] text-center font-[500] mb-[20px]">
          Stuffs I've Been Building
        </h1>
        <div className="w-full flexsm flex-wrap gap-[20px]">
          {MyProjects.map((project, index) => {
            return (
              <>
                {!seeMore && index < 4 && (
                  <Link
                    href={`${project.link}`}
                    key={index}
                    className="p-[25px] rounded-[20px] cflexss gap-[20px] w-[380px] bg-white border-[1px] cursor-pointer flex-shrink"
                  >
                    <div className="p-[10px] w-full flexmm rounded-[20px] bg-[#C7C7C7]">
                      <Image
                        src={`${project.image}`}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="w-full h-[170px] rounded-[10px] object-cover"
                      />
                    </div>
                    <h1 className="font-[500] text-[25px]">{project.title}</h1>
                    <p className="text-[16px] text-[#6E6E6E] line-clamp-2">
                      {project.description}
                    </p>

                    <button className="group bg-[#F2F2F2] flexmm gap-[10px] text-black px-[25px] py-[15px] rounded-[10px] hover:bg-[#E1E1E1] transition-all duration-300 cursor-pointer">
                      View Project
                      <ChevronRightIcon className="w-5 h-5 group-hover:ml-2 transition-all duration-300" />
                    </button>
                  </Link>
                )}
                {seeMore && (
                  <Link
                    href={`${project.link}`}
                    key={index}
                    className="p-[25px] rounded-[20px] cflexss gap-[20px] w-[380px] bg-white border-[1px] cursor-pointer flex-shrink"
                  >
                    <div className="p-[10px] w-full flexmm rounded-[20px] bg-[#C7C7C7]">
                      <Image
                        src={`${project.image}`}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="w-full h-[170px] rounded-[10px] object-cover"
                      />
                    </div>
                    <h1 className="font-[500] text-[25px]">{project.title}</h1>
                    <p className="text-[16px] text-[#6E6E6E] line-clamp-2">
                      {project.description}
                    </p>

                    <button className="group bg-[#F2F2F2] flexmm gap-[10px] text-black px-[25px] py-[15px] rounded-[10px] hover:bg-[#E1E1E1] transition-all duration-300 cursor-pointer">
                      View Project
                      <ChevronRightIcon className="w-5 h-5 group-hover:ml-2 transition-all duration-300" />
                    </button>
                  </Link>
                )}
              </>
            );
          })}
        </div>
        <div className="flexmm w-full">
          <button
            className="group text-center flexmm gap-[10px] mt-[20px] cursor-pointer rounded-[10px] bg-[#1B1B1B] text-white px-[20px] py-[10px]"
            onClick={() => setSeeMore(!seeMore)}
          >
            {seeMore ? "View Less" : "View All"}
            <ChevronRightIcon className="w-5 h-5 group-hover:ml-2 transition-all duration-300" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
