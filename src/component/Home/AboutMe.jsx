import img from "../../assets/ratri.png";
import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
const Services = () => {
  const data=[
    {
      name:"Web Design",
      work:"I can web Design by using HTML,CSS,Bootstrap and Tailwind CSS.I can make website by using this technology",
      learn:"Learn More"
    },
    {
      name:"Mern Stack Development",
      work:"I can make a full-stack web application by using mern stack technology .I mean I can make a full-stack web applicatiion project by using html , css , bootstrap , tailwind CSS , React JS ,Node JS , Express JS , MongoDB",
      learn:"Learn More"
      
    },
    {
      name:"Front End Development",
      work:"I can make website template by using React JS, JavaScript , HTML , CSS ,Bootstrap , Tailwind CSS .I can do also dynamic",
      learn:"Learn More"
    }
  ]
  return <div className='section skill'id="service">
    <div className='container w-5/6 m-auto'>
    
        <div className='flex flex-col lg:flex-row text-white'>
        
          <motion.div className='lg:bg-services bg-no-repeat  bg-contain lg:bg-bottom   mix-blend-lighten   mt-6 lg:mb-0 flex-1 ' variants={fadeIn('right',0.3)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.5}}>

          <h3 className=" text-4xl text-white ">About Me</h3>
          <h2 className='h2 text-3xl'>What I do</h2>
          <h3 className='max-w-[455px] h3 '>I just learned Web Designing and Development in last 6 months. I just staring my skill development</h3>
          <img src={img} alt="" className="max-w-[315px] max-h-[315px]" />
          </motion.div>
          <motion.div className='max-w-[470px]  'variants={fadeIn('left',0.5)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.5}}>
          {
            data.map(index=><div key={index.name} className='border-b border-white/20 py-4 flex justify-between gap-x-10 mt-15'>
                 <div>
                  <h2 className='text-xl font-semibold tracking-[2px] font-primary mb-6'>{index.name}</h2>
                  <h3 className='mb-2'>{index.work}</h3></div>
                  <div className='flex flex-col flex-1 text-2xl justify-center items-center'>
                    {/* <div> */}
                    <a href="#" className='h-[42px] w-[42px] text-sm active2 flex justify-center items-center mb-8 font-semibold'style={{borderRadius:"100%"}}>
                      <BsArrowUpRight />
                    </a>
                  <p className='text-gradient font-bold text-sm w-[100px]'>{index.learn}</p>
                  

                  </div>
            </div>)
          }
          </motion.div>
        </div>
    </div>
  </div>;
};

export default Services;
