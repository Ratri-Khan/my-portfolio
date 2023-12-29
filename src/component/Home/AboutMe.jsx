import React, { useEffect } from 'react';
import img from "../../assets/ratri.jpg";
import AOS from "aos";
import 'aos/dist/aos.css'

const AboutMe = () => {
  const data = [
    {
      name: "Web Design",
      work: "I can web Design by using HTML,CSS,Bootstrap and Tailwind CSS.I can make website by using this technology.I can web Design by using HTML,CSS,Bootstrap and Tailwind CSS.I can make website by using this technology",
    },
    {
      name: "Mern Stack Development",
      work: "I can make a full-stack web application by using mern stack technology .I mean I can make a full-stack web applicatiion project by using html , css , bootstrap , tailwind CSS , React JS ,Node JS , Express JS , MongoDB.I can make a full-stack web application by using mern stack technology .I mean I can make a full-stack web applicatiion project by using html , css , bootstrap , tailwind CSS , React JS ,Node JS , Express JS , MongoDB",
    },
    {
      name: "Mern Stack Development",
      work: "I can make a full-stack web application by using mern stack technology .I mean I can make a full-stack web applicatiion project by using html , css , bootstrap , tailwind CSS , React JS ,Node JS , Express JS , MongoDB.I can make a full-stack web application by using mern stack technology .I mean I can make a full-stack web applicatiion project by using html , css , bootstrap , tailwind CSS , React JS ,Node JS , Express JS , MongoDB",
    },
    {
      name: "Front End Development",
      work: "I can make website template by using React JS, JavaScript , HTML , CSS ,Bootstrap , Tailwind CSS .I can do also dynamic.I can make website template by using React JS, JavaScript , HTML , CSS ,Bootstrap , Tailwind CSS .I can do also dynamic",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);
  return (
      <div className="container w-10/12  m-auto">
      <h2 className="text-white  text-center text-4xl font-bold font-sans  mb-8 my-20">
          About Me
      </h2>
        <div className="text-white md:flex lg:flex justify-between">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="false"
        >
            <img src={img} alt="" className="h-[520px] rounded"  />
        </div>
          <div
            className="md:w-8/12 lg:8/12"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="false"
          >
            {data.map((index) => (
              <div key={index.name}
                className="border-b border-white/20 flex justify-between
                 mt-15">
                <div>
                  <h2 className="text-xl font-semibold tracking-[2px] font-primary ">
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
          </div>
        </div>
      </div>
  );
};

export default AboutMe;
