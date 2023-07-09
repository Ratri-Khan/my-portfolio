import img from "../../assets/ratri.png";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'

const Banner = () => {
    return (
        <div className="banner">
        <div className="point">
                <span style={{'--i': 11}} ></span>
                <span style={{'--i': 12}} ></span>
                <span style={{'--i': 14}} ></span>
                <span style={{'--i': 18}} ></span>
                <span style={{'--i': 16}} ></span>
                <span style={{'--i': 19}} ></span>
                <span style={{'--i': 20}} ></span>
                <span style={{'--i': 22}} ></span>
                <span style={{'--i': 26}} ></span>    
        </div>    
            <div className="flex  pt-16 pb-16 w-5/6 m-auto">
                <div className="w-600 shrink w-600 ">
                    <h2 className="text-white text-4xl font-bold font-sans">Hi, I am Ratri Khanom</h2>
<motion.div className='mb-6 text-[30px] lg:text-[45px] font-secondary font-bold uppercase leading-[1]mx-auto lg:mx-0' variants={fadeIn('up',0.3)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.7}}>
<span className='me-3 text-white'>I am a</span>
<TypeAnimation sequence={[" MERN STACK DEVELOPER",2000,"FRONT-END-DEVELOPER",2000]} speed={50} className='text-accent'wrapper='span'repeat={Infinity}/>
</motion.div>                     <p className="text-white text text-lg">
                    I am a self-curious Web Developer as my educational background is not related programming, I am student of mathematics but enjoy Web Development so much, try to develop the front end of a web application using React.js and the back-end using Node.js(express) with comfortable. Besides always ready to learn any new technology.

                    Honestly, I am excited to start my career as a web developer as well as to enhance my workplace and reputation day by day.
                     </p>
                     {/* <button className="btn btn-active btn-neutral">
                         Download Resume
                     </button> */}
                      <button className='btn btn-lg me-4'><a href="Ratri khan2.pdf" download="myfile.pdf"  >Download Resume</a></button> 
                 </div>
                 <div className="shrink w-900 ">
                    <img src={img} alt="" />
              </div>
                
                
            </div></div>
    );
};

export default Banner;


// import React from 'react';
// import image from '../assets/avater2.png';
// import images from '../assets/avatar.svg';
// import image3 from "../assets/356469966_167272149558829_6531289580157495279_n-removebg-preview(1).png";
// import img from "../../assets/ratri.png";
// import {FaGithub,FaFacebook,FaLinkedin} from "react-icons/fa";
// import { TypeAnimation } from 'react-type-animation';
// import { motion } from 'framer-motion';
// import {fadeIn} from '../../variants'
// const Banner = () => {
//   return <div className='min-h-[84vh] lg:min-h-[75vh] flex items-center'id='home'>

//     <div className='container mx-auto'>
//       <div className='flex flex-col lg:flex-row gap-y-8 lg:items-center lg:gap-x-20 '>
// <div className='flex-1 font-secondary text-center lg:text-left'>
//   <div className='text-[40px]  max-w-max mx-auto lg:mx-0 font-secondary mb-4 leading-[0,8] lg:text-[50px] font-semibold'><motion.h1 variants={fadeIn('up',0.3)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.7}}>TASNIA <span>SHARIN</span></motion.h1></div>
//   <motion.div className='mb-6 text-[30px] lg:text-[45px] font-secondary font-bold uppercase leading-[1]mx-auto lg:mx-0' variants={fadeIn('up',0.3)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.7}}>
//     <span className='me-3 text-white'>I am a</span>
//     <TypeAnimation sequence={[" MERN STACK DEVELOPER",2000,"FRONT-END-DEVELOPER",2000]} speed={50} className='text-accent'wrapper='span'repeat={Infinity}/>
//   </motion.div>
//   <motion.p className='pb-8 max-w-lg mx-auto lg:mx-0'variants={fadeIn('up',0.5)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.7}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, enim! Velit hic odit tempora voluptas, quam quia quae nostrum obcaecati?</motion.p>
// <motion.div className='flex  max-w-max mb-8 items-center  justify-center'variants={fadeIn('up',0.6)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.7}}>

//  <button className='btn btn-lg me-4'><a href="Mern_Stack_Resume_of_(Tasnia Sharin)-1.pdf" download="myfile.pdf"  >Download Resume</a></button> 
//   <a href="#"className='text-gradient btn-link'>MY Portfolio</a></motion.div>

// <motion.div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 'variants={fadeIn('up',0.7)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.7}}>
//   <a href="#">
//     <FaFacebook/>
//   </a>
//   <a href="#">
//     <FaGithub/>
//   </a>
//   <a href="#">
//     <FaLinkedin/>
//   </a>
// </motion.div>
// </div>
//   <motion.div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]'variants={fadeIn('down',0.5)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.7}}>
    
   
//   <img src={img} alt="" />
//   </motion.div>
//   </div>
// </div>
   
//   </div>;
// };

// export default Banner;
