import React from "react";

const WorkExperience = () => {
  const Experience = [
    {
      title: "Frontend Developer",
      company: "FreexIT Technologies",
      duration: "Jan 2024 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Connectin Skillz",
      duration: "Jul 2022 - Present",
    },
    {
      title: "Frontend Developer",
      company: "Alps",
      duration: "Feb 2024 - Jun 2025",
    },
    {
      title: "Frontend Developer",
      company: "Creos Community",
      duration: "Jul 2023 - Jan 2024",
    },
  ];
  return (
    <>
      <div
        className="w-full cflexss gap-[30px] mt-[70px] py-[20px] md:border-l-[1px] md:border-r-[1px] rounded-[20px] md:px-[100px] lg:px-[150px]"
        id="work-experience"
      >
        <h1 className="w-full text-center md:text-left text-[20px] md:text-[25px] font-[500]">
          Work Experience
        </h1>
        <div className="w-full cflexss gap-[30px]">
          {/* Add your work experience items here */}
          {Experience.map((exp, index) => {
            return (
              <div
                key={index}
                className="bg-white text-[16px] flexbm gap-[10px] p-6 rounded-lg shadow-md w-full flex-wrap"
              >
                <p className="text-[#6E6E6E]">{exp.duration}</p>
                <div className="text-[#6E6E6E] flexsm gap-[10px]  md:gap-[30px] flex-wrap">
                  <p className="font-[500]"> {exp.title} at</p>
                  <div className="px-[20px] flexmm gap-[10px] font-[600] text-[14px] rounded-[10px] bg-[#E1F9DC] text-[#3f4a3c] py-[10px] cursor-default">
                    <div className="w-[8px] h-[8px] bg-[#3f4a3c] rounded-full" />
                    {exp.company}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Repeat for more work experiences */}
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
