import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Services = () => {
  const MyServices = [
    {
      title: "Web Development",
      description:
        "I build fast, modern interfaces using React and Next.js. Optimized for scalability, performance, and seamless experiences.",
      image: "/programming.svg",
    },
    {
      title: "Responsive Design",
      description:
        "I design clean, mobile-first layouts with Tailwind CSS—adaptable, visually consistent, and optimized for all screen sizes.",
      image: "/dev-environment.svg",
    },
    {
      title: "App Development",
      description:
        "I develop cross-platform mobile apps with React Native for iOS and Android—from a single codebase, with a native feel.",
      image: "/develope-app.svg",
    },
    {
      title: "Backend Development",
      description:
        "I craft secure and lightweight APIs using Flask and Python. Built for flexibility and seamless frontend integration.",
      image: "/code-review.svg",
    },
  ];

  return (
    <section className="w-full mt-[30px] md:mt-[50px] py-[20px]">
      <h1 className="text-[20px] md:text-[25px] text-center font-[500] mb-[30px] md:mb-[20px]">
        Things I Love To Do
      </h1>

      <div className="w-full flexsm overflow-hidden">
        <Marquee gradient={false} speed={50}>
          {[...MyServices, ...MyServices].map((service, index) => (
            <div
              key={index}
              className="cflexmm bg-white w-[250px] md:w-[300px] h-auto p-6 mx-[10px] md:mx-[30px] rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-default"
            >
              <div className="w-[100px] h-[100px] mb-5 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="w-full text-xl text-left font-semibold mb-3 group-hover:text-[#3f4a3c] transition-colors">
                {service.title}
              </h2>
              <p className="text-[#6E6E6E] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Services;
