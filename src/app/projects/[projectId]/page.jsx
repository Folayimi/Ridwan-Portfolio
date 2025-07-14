"use client";
import React, { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ params }) => {
  const { projectId } = use(params);
  const [selectedProject, setSelectedProject] = useState("");

  const MyProjects = [
    {
      title: "Alps",
      description:
        "A platform designed to simplify documentation Organize playlists and streamline feedback reviews, All while empowering your customers effortlessly.",
      images: ["/alpsFrontPage.PNG"],
      stacks: [],
      link: "/projects/alps",
    },
    {
      title: "Nifinspired",
      description:
        "Our products harness the pure power of nature, utilizing organic ingredients that nurture your skin without harmful chemicals. ",
      images: ["/nifinspired.PNG"],
      stacks: [],
      link: "/projects/nifinspired",
    },
    {
      title: "King David Elites",
      description:
        "The King David Elites marketplace is where you find only the most exclusive and highest quality real estate, automobiles, luxury services, and collectibles.",
      images: ["/king-david-main.PNG"],
      stacks: [],
      link: "/projects/king-david-elites",
    },
    {
      title: "Curious Kids",
      description:
        "A leading educational platform that sparks curiosity, fosters creativity, and inspires young minds to explore the wonders of the world.",
      images: ["/curiouzkidz.PNG"],
      stacks: [],
      link: "/projects/curious-kids",
    },
    {
      title: "Shinzoku",
      description:
        "In the days of old, the world thrived, life thrived and powerful creatures were born, then it happened, a great invasion the likes of which the world had never seen before, the world was thrown into chaos, and the creatures were forced to flee to a new world.",
      images: ["/shinzoku.PNG"],
      stacks: [],
      link: "/projects/shinzoku",
    },
    {
      title: "360 Shotitz Photography",
      description:
        "Capturing life’s special moments that last a lifetime with professionalism and innovation since 2013, where every shutter click captures a narrative waiting to be unveiled.",
      images: ["/360-shotitz.PNG"],
      stacks: [],
      link: "/projects/360-shotitz-photography",
    },
    {
      title: "Remap Link",
      description:
        "By meticulously fine-tuning a vehicle's Engine Control Unit (ECU), we have the capability to extract noteworthy enhancements in power, torque, and fuel efficiency.",
      images: ["/remap-link.PNG"],
      stacks: [],
      link: "/projects/remap-link",
    },
    {
      title: "Portfolio",
      description:
        "Developed responsive, user portfolio showcasing the projects and skills of the user, built with Next.js and Tailwind CSS.",
      images: ["/clarice-portfolio.PNG"],
      stacks: [],
      link: "/projects/portfolio",
    },
    {
      title: "African Made Items",
      description:
        "Showcasing and selling of varieties of African made items that are durable and cost effective in areas such as Fashion, Arts, Home Decor, Accessories e.t.c",
      images: ["/portfolio-africa.PNG"],
      stacks: [],
      link: "/projects/african-made-items",
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
      }
    }
  }, []);
  return (
    <>
      <div className="bg-[#F5F5F5] w-full py-[70px] md:px-[200px] px-[20px] cflexss gap-[30px]">
        <div className="cflexss w-full gap-[20px] text-[18px]">
          <h1 className="text-[35px] md:text-[40px] font-[600]">{selectedProject?.title}</h1>
          {selectedProject && (
            <Image
              src={selectedProject?.images[0]}
              alt={selectedProject?.images[0]}
              width={1000}
              height={1000}
              className="w-full h-[400px] object-cover rounded-[15px]"
            />
          )}

          <p>{selectedProject?.description}</p>
        </div>
      </div>
    </>
  );
};

export default Project;
