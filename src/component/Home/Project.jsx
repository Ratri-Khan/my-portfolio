
import img1 from '../../assets/project1.png';
import img2 from '../../assets/project2.png';
import img3 from '../../assets/project3.png';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Project = () => {
  return <div className='section py-28  skill'id="work">


    <div className='mx-auto container text-white'>
      <motion.div variants={fadeIn('up',0.3)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.5}}>

        <div className='flex flex-col lg:flex-row gap-x-10 justify-center mb-12'>

       <div className='flex flex-col gap-y-5 w-[450px] h-[220px] mb-16 lg:mb-0'>
        <h2 className='h2 text-accent leading-light tracking-[4px] text-2xl'>My Recent Projects</h2>
        <p>I have recently completed this projects.Summper Camp , Cheef of Mexican , Toy Shop . You can checkout my projects</p>
        <div>
        {/* <button className='btn btn-lg'> view all projects</button> */}
        </div>
       

       </div>
       
       <div className='group relative  overflow-hidden'>
        <div className='group-hover:bg-black/80 h-full w-full absolute transition-full duration-300 z-50'></div>
        <img src={img1} className=' w-[450px] h-[220px] group-hover:scale-125 overflow-hidden w-full transition-full duration-300  ' alt="project1"/>
        <p className='absolute -bottom-50 group-hover:bottom-12   group-hover:left-12 z-50 transition-full duration-300 uppercase text-2xl'>Toy Shop</p>
        <p className='absolute -bottom-50 group-hover:bottom-4   group-hover:left-12 z-50 transition-full duration-500 font-bold'>
            <span className='me-2 underline'> <a href="https://makeup-toy.web.app/">Live Link</a></span> 
            |<span className='ms-2 underline'>  <a href="https://github.com/ratrikhanam000/makeup-toy-client">Client Link</a></span> |
            <span className='ms-2 underline'><a href="https://github.com/ratrikhanam000/makeup-toy-server">Server Link</a></span> 
            

             </p>
       </div>
       
       </div>

       <div className='flex flex-col lg:flex-row gap-x-10 justify-center'>
       <div className='group relative  overflow-hidden mb-6 lg:mb-0'>
        <div className='group-hover:bg-black/80 h-full w-full absolute transition-full duration-300 z-50'></div>
        <img src={img2} className=' w-[450px] h-[220px] group-hover:scale-125 overflow-hidden w-full transition-full duration-300  ' alt="project1"/>
        <p className='absolute -bottom-50 group-hover:bottom-12   group-hover:left-12 z-50 transition-full duration-300 uppercase text-2xl'>Chill-Cafe</p>
        <p className='absolute -bottom-50 group-hover:bottom-4   group-hover:left-12 z-50 transition-full duration-500 font-bold'>
          <span className='ms-2 underline'> <a href="https://the-chill-cafe.web.app/home">Live Link</a> </span> |
         <span className='me-2 underline'> <a href="https://github.com/ratrikhanam000/the-chill-cafe/tree/main/b7a10-chef-recipe-hunter-client-side-ratrikhanam000-main"> Client Link </a></span> | 
         <span className='me-2 underline'> <a href="https://github.com/ratrikhanam000/chill-cafe-server/tree/main/b7a10-chef-recipe-hunter-server-side-ratrikhanam000-main">Server Link</a></span> </p>
       </div>
       <div className='group relative  overflow-hidden'>
        <div className='group-hover:bg-black/80 h-full w-full absolute transition-full duration-300 z-50'></div>
        <img src={img3} className=' w-[450px] h-[220px] group-hover:scale-125 overflow-hidden w-full transition-full duration-300  ' alt="project1"/>
        <p className='absolute -bottom-50 group-hover:bottom-12   group-hover:left-12 z-50 transition-full duration-300 uppercase text-2xl'>Summer-Camp</p>
        <p className='absolute -bottom-50 group-hover:bottom-4   group-hover:left-12 z-50 transition-full duration-500 '> 
        <span className='ms-2 underline'><a href="https://create-jewelry.web.app/">Live Link</a></span>  | 
        <span className='me-2 underline'> <a href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-ratrikhanam000">Client-Link</a></span> | 
        <span className='me-2 underline'> <a href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-ratrikhanam000">Server-Link</a></span> </p>
       </div>
       
       </div>
      
       </motion.div>
    </div>
  </div>;
};

export default Project;
