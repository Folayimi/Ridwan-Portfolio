import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

const About = () => {
  return (
    <>
      <div
        className="w-full border-l-[1px] border-r-[1px] rounded-l-[20px] rounded-r-[20px] cflexmm py-[70px] mt-[20px]"
        id="about"
      >
        <div className="w-[800px] p-[20px] text-justify">
          <h1 className="text-center text-[25px] font-[500] mb-[20px]">
            About
          </h1>
          {/* <p className="mt-[-15px]">ridwanfolayimi@gmail.com</p> */}
          <p className="text-[18px] text-[#6E6E6E] leading-[1.6]">
            Hi, I'm a passionate Frontend Engineer with a love for building
            responsive, user-friendly web and mobile apps. I work with tools
            like React.js, Next.js, Tailwind CSS, React Native, and a bit of
            backend magic using Flask and Python.
          </p>
          <p className="text-[18px] text-[#6E6E6E] leading-[1.6] mt-[30px]">
            With a background in Mechatronics Engineering, I bring a unique
            blend of creativity, logic, and system thinking into everything I
            build. I care deeply about clean design, smooth user experiences,
            and writing code that just makes sense.
          </p>
          <div className="flexmm w-full mt-[50px]">
            <div className="group w-fit flexmm">
              <div className="relative w-[250px] h-[350px] bg-white shadow-md pt-[50px] p-[10px] flexmm group-hover:scale-105 hover:ml-[-20px] transform duration-300 mr-[-10px] mt-[-30px] rotate-[-10deg]">
                <Image
                  src={"/abt2.jpeg"}
                  alt="About Image 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-[5px]"
                />
                <Image
                  src={"/pin.PNG"}
                  alt="Pin Icon"
                  width={100}
                  height={100}
                  className="absolute w-[40px] h-auto top-[5px] left-[calc(50% - 30px)] rounded-full"
                />
              </div>
              <div className="relative w-[250px] h-[350px] bg-white shadow-xl pt-[50px] p-[10px] flexmm group-hover:scale-105 hover:mr-[-20px] transform duration-300 z-[50] ml-[-10px] rotate-[10deg]">
                <Image
                  src={"/abt1.jpeg"}
                  alt="About Image 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-[5px]"
                />
                <Image
                  src={"/pin.PNG"}
                  alt="Pin Icon"
                  width={100}
                  height={100}
                  className="absolute w-[40px] h-auto top-[5px] left-[calc(50% - 30px)] rounded-full"
                />
              </div>
            </div>
          </div>
          <p className="text-[18px] text-[#6E6E6E] leading-[1.6] mt-[80px]">
            I’m always excited to take on meaningful projects, collaborate with
            great people, and keep growing as a developer. Let’s build something
            awesome together!
          </p>
          <Link
            href="https://drive.google.com/file/d/1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q/view?usp=sharing"
            // href=""
            target="_blank"
          >
            <button className="mt-[30px] text-[14px] flexmm gap-[10px] bg-[#1B1B1B] px-[20px] py-[10px] rounded-full hover:scale-105 transform duration-300 cursor-pointer">
              <span className="text-white font-[500]">View My Resume</span>
              <ClipboardDocumentIcon className="w-[20px] h-[20px] text-white" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
