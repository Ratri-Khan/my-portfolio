import img from "../../assets/ratri.jpg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Banner = () => {
  return (
    <div className="banner w-10/12 m-auto bg-black">
      {/* <div className="bubbles">
        <span style={{ "--i": 11 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 14 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 16 }}></span>
        <span style={{ "--i": 19 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 26 }}></span>
        <span style={{ "--i": 28 }}></span>
        <span style={{ "--i": 13 }}></span>
        <span style={{ "--i": 23 }}></span>
        <span style={{ "--i": 11 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 27 }}></span>
        <span style={{ "--i": 28 }}></span>
        <span style={{ "--i": 11 }}></span>
        <span style={{ "--i": 12 }}></span>
        <span style={{ "--i": 14 }}></span>
        <span style={{ "--i": 18 }}></span>
        <span style={{ "--i": 16 }}></span>
        <span style={{ "--i": 19 }}></span>
        <span style={{ "--i": 20 }}></span>
        <span style={{ "--i": 22 }}></span>
        <span style={{ "--i": 26 }}></span>
        <span style={{ "--i": 28 }}></span>
        <span style={{ "--i": 13 }}></span>
        <span style={{ "--i": 23 }}></span>
        <span style={{ "--i": 11 }}></span>
        <span style={{ "--i": 15 }}></span>
        <span style={{ "--i": 27 }}></span>
        <span style={{ "--i": 28 }}></span>
      </div> */}
      <div className="md:flex lg-flex justify-between mt-20 items-center">
        <div className="md:w-3/5 lg:w-3/5">
          <h2 className="text-white text-4xl font-bold font-sans">
            Hi, I am Ratri Khanom
          </h2>
          <motion.div
            className="mb-6 text-[30px] lg:text-[45px] font-secondary font-bold uppercase leading-[1]mx-auto lg:mx-0"
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
              className=" text-[#5F0F40]"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>{" "}
          <p className="text-white text text-lg">
            I am a self-curious Web Developer as my educational background is
            not related programming but enjoy Web Development so much, try to
            develop the front end of a web application using React.js and the
            back-end using Node.js(express) with comfortable. Besides always
            ready to learn any new technology. Honestly, I am excited to start
            my career as a web developer as well as to enhance my workplace and
            reputation day by day.
          </p>
          <button className="rounded my-8 bold py-3 px-7 bg-pink-950 text-white">
            <a href="Ratri khan2.pdf" download="myfile.pdf">
              Download Resume
            </a>
          </button>
        </div>
          <img src={img} alt="" className="h-[520px] rounded"/>
      </div>
    </div>
  );
};

export default Banner;
