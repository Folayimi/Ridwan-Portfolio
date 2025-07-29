import Marquee from "react-fast-marquee";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiFlask,
  SiPostgresql,
} from "react-icons/si";

const icons = [
  { icon: SiReact, color: "#61DAFB", text: "React.js" },
  { icon: SiNextdotjs, color: "#000000", text: "Next.js" },
  { icon: SiJavascript, color: "#F7DF1E", text: "JavaScript" },
  { icon: SiTypescript, color: "#3178C6", text: "TypeScript" },
  { icon: SiPython, color: "#3776AB", text: "Python" },
  { icon: SiHtml5, color: "#E34F26", text: "HTML5" },
  { icon: SiCss3, color: "#1572B6", text: "CSS3" },
  { icon: SiTailwindcss, color: "#38BDF8", text: "Tailwind CSS" },
  { icon: SiNodedotjs, color: "#8CC84B", text: "Node.js" },
  { icon: SiFlask, color: "#000000", text: "Flask" },
  { icon: SiPostgresql, color: "#336791", text: "PostgreSQL" },
];

const Stack = () => {
  return (
    <div className="w-full bg-transparent py-6 flexmm mb-[-70px]">
      <div className="w-[400px] overflow-hidden opacity-[0.6]">
        <Marquee gradient={false} speed={50} className="h-[50px]">
          {[...icons, ...icons].map((Icon, i) => (
            <div
              key={i}
              className="flexmm gap-[10px] mx-[30px] hover:scale-110 transition-transform duration-300 cursor-default"
            >
              <Icon.icon
                key={i}
                style={{ color: "black" }}
                className={`w-7 h-7`}
              />
              <span
                key={`${i}-text`}
                className="text-black/70 text-sm font-semibold italic"
                // style={{ color: Icon.color }}
              >
                {Icon.text}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Stack;
