"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  const [routePath, setRoutePath] = useState("#home");
  const NavItems = [
    {
      icon: (
        <HomeIcon
          size={25}
          color="red"
          className={`w-6 h-6 text-black hover:text-[#57AF46] transition-colors duration-300`}
        />
      ),
      link: "#home",
      label: "Home",
    },
    {
      icon: (
        <UserIcon
          className={`w-6 h-6 text-black hover:text-[#57AF46] transition-colors duration-300`}
        />
      ),
      link: "#about",
      label: "About",
    },
    {
      icon: (
        <FaXTwitter
          className={`w-5 h-5 text-black hover:text-[#57AF46] transition-colors duration-300`}
        />
      ),
      link: "https://x.com/Fola_Dev",
      label: "Twitter",
    },
    {
      icon: (
        <FaGithub
          className={`w-5 h-5 text-black hover:text-[#57AF46] transition-colors duration-300`}
        />
      ),
      link: "https://github.com/folayimi",
      label: "Github",
    },
    {
      icon: (
        <FaLinkedin
          className={`w-5 h-5 text-black hover:text-[#57AF46] transition-colors duration-300`}
        />
      ),
      link: "https://www.linkedin.com/in/ridwan-ogunlade-1a9610369/",
      label: "LinkedIn",
    },
    {
      icon: (
        <WrenchScrewdriverIcon
          className={`w-6 h-6 text-black hover:text-[#57AF46] transition-colors duration-300`}
        />
      ),
      link: "#projects",
      label: "Projects",
    },
    {
      icon: (
        <DocumentTextIcon
          className={`w-6 h-6 text-black hover:text-[#57AF46] transition-colors duration-300`}
        />
      ),
      link: "#resume",
      label: "Resume",
    },
  ];

  const getPageRoute = () => {
    let route;
    const currentPath = window.location.href;
    console.log(currentPath);
    const parts = currentPath.split("/"); // Split the URL by "/"
    console.log(parts);
    route = parts[3];
    setRoutePath(route);
    console.log(route);
  };

  useEffect(() => {
    // getPageRoute();
  }, []);
  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-between md:justify-center items-center pt-[20px] md:pt-[30px] px-[20px] md:px-[50px] fixed top-0 left-0 z-[999]">
          <ul className="bg-white/10 border-[1px] text-[12px] flexsm md:px-[20px] md:py-[5px] rounded-full shadow-sm backdrop-blur-sm">
            {NavItems.map((item, index) => {
              return (
                <>
                  {item.link === "#about" ? (
                    <li key={index} className="relative flexmm px-[10px]">
                      <Link
                        href={item.link}
                        className="group flexmm px-[2px] md:px-[10px] hover:px-[15px] py-[10px] hover:bg-[#6E6E6E]/10 rounded-[12px] transition-all duration-200"
                      >
                        {item.icon}
                        <div
                          className="absolute top-[60px] left-0 bg-[#3f4a3c] text-white px-[18px] py-[6px] rounded-[8px]
               opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
               transition-all duration-200 pointer-events-none group-hover:pointer-events-auto"
                        >
                          {item.label}
                        </div>
                      </Link>
                      <div className="hidden md:block h-[20px] bg-[#6E6E6E]/40 w-[1px] ml-[20px]" />
                    </li>
                  ) : item.link === "#projects" ? (
                    <li key={index} className="relative flexmm px-[10px]">
                      <div className="hidden md:block h-[20px] bg-[#6E6E6E]/40 w-[1px] mr-[20px]" />
                      <Link
                        href={item.link}
                        className={`group flexmm px-[2px] md:px-[10px] hover:px-[15px] py-[10px] hover:bg-[#6E6E6E]/10 rounded-[12px] transition-all duration-200`}
                      >
                        {item.icon}
                        <div
                          className="absolute top-[60px] left-[15px] bg-[#3f4a3c] text-white px-[18px] py-[6px] rounded-[8px]
               opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
               transition-all duration-200 pointer-events-none group-hover:pointer-events-auto"
                        >
                          {item.label}
                        </div>
                      </Link>
                    </li>
                  ) : item.link.startsWith("https") ? (
                    <li
                      key={index}
                      className="hidden md:block relative px-[10px]"
                    >
                      <Link
                        href={item.link}
                        target="_blank"
                        className={`group flexmm px-[2px] md:px-[10px] hover:px-[15px] py-[10px] hover:bg-[#6E6E6E]/10 rounded-[12px] transition-all duration-200`}
                      >
                        {item.icon}
                        <div
                          className="absolute top-[60px] left-0 bg-[#3f4a3c] text-white px-[18px] py-[6px] rounded-[8px]
               opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
               transition-all duration-200 pointer-events-none group-hover:pointer-events-auto"
                        >
                          {item.label}
                        </div>
                      </Link>
                    </li>
                  ) : (
                    <li key={index} className="relative px-[10px]">
                      <Link
                        href={item.link}
                        className="group flexmm px-[2px] md:px-[10px] hover:px-[15px] py-[10px] hover:bg-[#6E6E6E]/10 rounded-[12px] transition-all duration-200"
                      >
                        {item.icon}
                        <div
                          className="absolute top-[60px] left-0 bg-[#3f4a3c] text-white px-[18px] py-[6px] rounded-[8px]
               opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
               transition-all duration-200 pointer-events-none group-hover:pointer-events-auto"
                        >
                          {item.label}
                        </div>
                      </Link>
                    </li>
                  )}
                </>
              );
            })}
            <Link href="#contact" className="hidden md:block">
              <button className="px-[15px] flexmm hover:px-[20px] text-[14px] py-[12px] bg-[#1B1B1B] text-white rounded-[15px] cursor-pointer transition-all duration-300">
                Let's Connect
              </button>
            </Link>
          </ul>
          <Link href="#contact" className="md:hidden">
            <button className="px-[15px] flexmm hover:px-[20px] text-[12px] font-[500] py-[12px] bg-[#1B1B1B] text-white rounded-[15px] cursor-pointer transition-all duration-300">
              Let's Connect
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
