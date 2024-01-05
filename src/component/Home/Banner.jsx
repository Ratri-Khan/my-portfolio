import "./banner.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import img from "../../assets/bg3.jpg";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url('${img}')`,
      }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl md:text-5xl lg:text-5xl text-[#00ffcc] ">
            Hi, I am Ratri Khan
          </h1>
          <motion.div
            className="mb-6 md:text-2xl lg:2xl font-bold font-secondary leading-[1]mx-auto lg:mx-0"
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: "false", amount: 0.7 }}
          >
            {/* <span className="me-3 text-white">I am a</span> */}
            <TypeAnimation
              sequence={[
                "Front End Developer",
                2000,
                "React Developer",
                2000,
                "Javascript Developer",
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
                <a href="https://www.linkedin.com/in/ratri-khan/" target="_blank">
                  <FaLinkedinIn
                    className="w-8 h-8 mt-1 ms-2 text-[#00ffcc]
                text-center"
                  />
                </a>
              </li>
              <li className="w-12 h-12 border-2 m-1 rounded-full border-[#00ffcc]">
                <a href="https://github.com/Ratri-Khan" target="_blank">
                  <FiGithub className="w-8 h-8 mt-2 ms-1 text-[#00ffcc]" />
                </a>
              </li>
              <li className="w-12 h-12 border-2 m-1 rounded-full border-[#00ffcc]">
                <a
                  href="https://web.facebook.com/ratri.khan.111"
                  target="_blank"
                >
                  <FaFacebookF
                    className=" w-8 h-8 mt-2 ms-2 text-[#00ffcc]
                 text-center"
                  />
                </a>
              </li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
