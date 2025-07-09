import React from "react";

const WorkExperience = () => {
  return (
    <>
      <div
        className="w-full cflexss gap-[30px] mt-[70px] py-[20px] border-l-[1px] border-r-[1px] rounded-[20px] px-[150px]"
        id="work-experience"
      >
        <h1 className="w-full text-[25px] font-[500]">
          Work Experience
        </h1>
        <div className="w-full cflexss gap-[30px]">
          {/* Add your work experience items here */}
          <div className="bg-white text-[16px] flexbm p-6 rounded-lg shadow-md w-full">
            <p className="text-gray-600">Jan 2024 - Present</p>
            <div className="text-[#6E6E6E] flexmm gap-[10px]">
              <p className="font-[500]"> Frontend Developer at</p>
              <div className="px-[20px] flexmm gap-[10px] font-[600] text-[14px] ml-[20px] rounded-[10px] bg-[#E1F9DC] text-[#3f4a3c] py-[10px] cursor-default">
                <div className="w-[8px] h-[8px] bg-[#3f4a3c] rounded-full" />
                FreexIT Technologies
              </div>
            </div>
          </div>
          <div className="bg-white text-[16px] flexbm p-6 rounded-lg shadow-md w-full">
            <p className="text-gray-600">Jul 2022 - Present</p>
            <div className="text-[#6E6E6E] flexmm gap-[10px]">
              <p className="font-[500]"> Frontend Developer at</p>
              <div className="px-[20px] flexmm gap-[10px] font-[600] text-[14px] ml-[20px] rounded-[10px] bg-[#E1F9DC] text-[#3f4a3c] py-[10px] cursor-default">
                <div className="w-[8px] h-[8px] bg-[#3f4a3c] rounded-full" />
                Connectin Skillz
              </div>
            </div>
          </div>
          <div className="bg-white text-[16px] flexbm p-6 rounded-lg shadow-md w-full">
            <p className="text-gray-600">Feb 2024 - Jun 2025</p>
            <div className="text-[#6E6E6E] flexmm gap-[10px]">
              <p className="font-[500]"> Frontend Developer at</p>
              <div className="px-[20px] flexmm gap-[10px] font-[600] text-[14px] ml-[20px] rounded-[10px] bg-[#E1F9DC] text-[#3f4a3c] py-[10px] cursor-default">
                <div className="w-[8px] h-[8px] bg-[#3f4a3c] rounded-full" />
                Alps
              </div>
            </div>
          </div>
          <div className="bg-white text-[16px] flexbm p-6 rounded-lg shadow-md w-full">
            <p className="text-gray-600">Jul 2023 - Jan 2024</p>
            <div className="text-[#6E6E6E] flexmm gap-[10px]">
              <p className="font-[500]"> Frontend Developer at</p>
              <div className="px-[20px] flexmm gap-[10px] font-[600] text-[14px] ml-[20px] rounded-[10px] bg-[#E1F9DC] text-[#3f4a3c] py-[10px] cursor-default">
                <div className="w-[8px] h-[8px] bg-[#3f4a3c] rounded-full" />
                Creos Community
              </div>
            </div>
          </div>
          {/* Repeat for more work experiences */}
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
