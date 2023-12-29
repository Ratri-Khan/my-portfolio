import img from "../../assets/bg3.jpg";
import "./banner.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Banner = () => {
  return (
    // <div className="md:flex lg-flex justify-between items-center  m-auto banner ">

    //     {/* <img src={img} alt="" className="h-[520px] rounded mt-20"/> */}
    //     <div className="md:w-3/5 lg:w-3/5 ">
    //     <h2 className="text-white text-4xl font-bold font-sans  mt-20">
    //       Hi, I am Ratri Khanom
    //     </h2>
    // <motion.div
    //   className="mb-6 text-[30px] lg:text-[45px] font-secondary font-bold uppercase leading-[1]mx-auto lg:mx-0"
    //   variants={fadeIn("up", 0.3)}
    //   initial="hidden"
    //   whileInView={"show"}
    //   viewport={{ once: "false", amount: 0.7 }}
    // >
    //   {/* <span className="me-3 text-white">I am a</span> */}
    //   <TypeAnimation
    //     sequence={[
    //       " MERN STACK DEVELOPER",
    //       2000,
    //       "FRONT-END-DEVELOPER",
    //       2000,
    //     ]}
    //     speed={50}
    //     className=" text-[#5F0F40]"
    //     wrapper="span"
    //     repeat={Infinity}
    //   />
    // </motion.div>{" "}
    //     {/* <p className="text-white text text-lg">
    //       I am a self-curious Web Developer as my educational background is
    //       not related programming but enjoy Web Development so much, try to
    //       develop the front end of a web application using React.js and the
    //       back-end using Node.js(express) with comfortable. Besides always
    //       ready to learn any new technology. Honestly, I am excited to start
    //       my career as a web developer as well as to enhance my workplace and
    //       reputation day by day.
    //     </p> */}
    // <button className="rounded my-8 bold py-3 px-7 border-t border-primaryLight2
    //       bg-gradient-to-r from-[#5F0F40] to-black font-bold text-white">
    //   <a href="Ratri khan2.pdf" download="myfile.pdf">
    //     Download Resume
    //   </a>
    // </button>
    //     <div>

    //     </div>
    //   </div>
    // </div>
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('${img}')`,
      }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-[#00ffcc] ">Hi, I am Ratri Khan</h1>
          <motion.div
            className="mb-6 text-[30px] lg:text-[20px] font-secondary font-bold uppercase leading-[1]mx-auto lg:mx-0"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: "false", amount: 0.7 }}
          >
            {/* <span className="me-3 text-white">I am a</span> */}
            <TypeAnimation
              sequence={[
                " MERN STACK DEVELOPER",
                2000,
                "FRONT-END-DEVELOPER",
                2000,
              ]}
              speed={50}
              className=" text-[#00ffcc]"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>{" "}
          <button>
            <ul className="flex text-center">
              <li className="w-12 h-12 border-2 m-1 rounded-full border-[#00ffcc]">
                <FaLinkedinIn
                  className="w-8 h-8 mt-1 ms-2 text-[#00ffcc]
                      text-center"
                />
              </li>
              <li className="w-12 h-12 border-2 m-1 rounded-full border-[#00ffcc]">
                <FiGithub className="w-8 h-8 mt-2 ms-1 text-[#00ffcc]" />
              </li>
              <li className="w-12 h-12 border-2 m-1 rounded-full border-[#00ffcc]">
                <FaFacebookF
                  className=" w-8 h-8 mt-2 ms-2 text-[#00ffcc]
                      text-center "
                />
              </li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
