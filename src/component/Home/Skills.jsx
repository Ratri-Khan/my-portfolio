import React from "react";
import '../../App.css'
import { BiLogoNetlify } from "react-icons/bi";
import {
  SiReact,
  SiTailwindcss,
  SiDaisyui,
  SiBootstrap,
  SiMongodb,
  SiFigma,
  SiExpress,
  SiFirebase,
  SiNodedotjs,
  SiGithub,
  SiVercel,
  SiHtml5,
  SiJavascript,
  SiCss3 ,
  SiTypescript 
} from "react-icons/si";

const expertise = [
  { icon: <SiReact />, name: "React.js", Color: "#61DBFB" },
  { icon: <SiJavascript />, name: "JavaScript", Color: "#61DBFB" },
  { icon: <SiHtml5 />, name: "Html5", Color: "#61DBFB" },
  { icon: <SiCss3 />, name: "Css3", Color: "#61DBFB" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", brandColor: "#38B2AC" },
  { icon: <SiBootstrap />, name: "Bootstrap 5", brandColor: "#7952B3" },  
  { icon: <SiDaisyui />, name: "Daisy UI", brandColor: "#A161FF" },
  { icon: <SiFirebase />, name: "Firebase", brandColor: "#FFCA28" },
  { icon: <SiBootstrap />, name: "React Bootstrap", brandColor: "#7952B3" },
];
const familiar = [
  { icon: <SiNodedotjs />, name: "Node.js", brandColor: "#339933" },
  { icon: <SiExpress />, name: "Express.js", brandColor: "#61DAFB" },
  { icon: <SiMongodb />, name: "MongoDB", brandColor: "#47A248" }, 
  { icon: <SiTypescript />, name: "TypeScript", brandColor: "" }, 
]
const tools = [ 
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiVercel />, name: "Vercel", },
  { icon: <SiFigma />, name: "Figma", brandColor: "#F24E1E" },
  { icon: <BiLogoNetlify />, name: "Figma",  },
]

const Skills = () => {
  return (
      <section id="skills" className="w-5/6 m-auto mt-20">
          <div className="text-white text-center mb-8 font-sans ">
          <h2 className=" text-4xl font-bold ">
            My Skills
          </h2>
          </div>
          
          <div className="md:grid md:grid-cols-5 lg:grid-cols-5 gap-6">
          <p className="text-white text-xl font-bold grid place-content-center border-2 border-[#00ffcc] rounded-xl">Expertise : </p>
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="bgCustomGradient customShadow rounded-xl flex flex-col justify-center items-center px-4 py-2  border-2 border-[#00ffcc]
                "
              >
                {/* border-t border-primaryLight2
                bg-gradient-to-r from-white to-[#000] */}
                <div style={{ color: skill?.brandColor || "#fff" }} className="text-4xl">
                  {skill?.icon}
                </div>
                <p className="text-white text-lg font-medium">{skill?.name}</p>
              </div>
            ))}
          </div>
          
          <div className="md:grid md:grid-cols-5 lg:grid-cols-5 gap-6 my-4">
          <p className="text-white text-xl font-bold grid place-content-center border-2 border-[#00ffcc] rounded-xl">Familiar : </p>
            {familiar.map((skill, index) => (
              <div
                key={index}
                className="bgCustomGradient customShadow rounded-xl flex flex-col justify-center items-center px-4 py-2  border-2 border-[#00ffcc]
                "
              >
                {/* border-t border-primaryLight2
                bg-gradient-to-r from-white to-[#000] */}
                <div style={{ color: skill?.brandColor || "#fff" }} className="text-4xl">
                  {skill?.icon}
                </div>
                <p className="text-white text-lg font-medium">{skill?.name}</p>
              </div>
            ))}
          </div>
          
          <div className="md:grid md:grid-cols-5 lg:grid-cols-5 gap-6">
          <p className="text-white text-xl font-bold  grid place-content-center border-2 border-[#00ffcc] rounded-xl">Tools : </p>
            {tools.map((skill, index) => (
              <div
                key={index}
                className="bgCustomGradient customShadow rounded-xl flex flex-col justify-center items-center px-4 py-2  border-2 border-[#00ffcc]
                "
              >
                {/* border-t border-primaryLight2
                bg-gradient-to-r from-white to-[#000] */}
                <div style={{ color: skill?.brandColor || "#fff" }} className="text-4xl">
                  {skill?.icon}
                </div>
                <p className="text-white text-lg font-medium">{skill?.name}</p>
              </div>
            ))}
          </div>
      </section>
  );
};

export default Skills;