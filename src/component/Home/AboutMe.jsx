import React from 'react';
import img from "../../assets/ratri.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const AboutMe = () => {
  const data = [
    {
      name: "Web Design",
      work: "I can web Design by using HTML,CSS,Bootstrap and Tailwind CSS.I can make website by using this technology",
    },
    {
      name: "Mern Stack Development",
      work: "I can make a full-stack web application by using mern stack technology .I mean I can make a full-stack web applicatiion project by using html , css , bootstrap , tailwind CSS , React JS ,Node JS , Express JS , MongoDB",
    },
    {
      name: "Front End Development",
      work: "I can make website template by using React JS, JavaScript , HTML , CSS ,Bootstrap , Tailwind CSS .I can do also dynamic",
    },
  ];
  return (
      <div className="container w-10/12  m-auto">
      <h2 className="text-white  text-center text-4xl font-bold font-sans  mb-8 my-20">
          About
      </h2>
        <div className="text-white md:flex lg:flex justify-between">
            
            <img src={img} alt="" className="h-[520px] rounded"  />

          <motion.div
            className="md:w-8/12 lg:8/12"
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: "false", amount: 0.5 }}
          >
            {data.map((index) => (
              <div key={index.name}
                className="border-b border-white/20 py-4 flex justify-between
                 mt-15">
                <div>
                  <h2 className="text-xl font-semibold tracking-[2px] font-primary mb-6">
                    {index.name}
                  </h2>
                  <h3 className="mb-2">{index.work}</h3>
                </div>
                <div className="flex flex-col flex-1 text-2xl justify-center items-center">
                  {/* <div> */}
                  <a
                    href="#"
                    className="h-[42px] w-[42px] text-sm active2 flex justify-center items-center mb-8 font-semibold"
                    style={{ borderRadius: "100%" }}
                  >
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
  );
};

export default AboutMe;
