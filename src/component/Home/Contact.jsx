
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import {BsTelephone} from 'react-icons/bs';
import {AiOutlineMail}from 'react-icons/ai';
import {CiLocationOn}from 'react-icons/ci';
const Contact = () => {
  const contactobj=[
    {
      name:<BsTelephone/>,
      title:"Phone",
      des:"+8801374930262"
    },
    {
      name:<AiOutlineMail/>,
      title:"Email",
      des:"ratrikhanam000@gmail.com"
    },{
      name:<CiLocationOn/>,
      title:"Location",
      des:"Jamalpur,Bangladesh"
    }
  ]
  return <div className='section bg-red-400  skill'id="contact" >

    <div className='container mx-auto'>
      <div className='flex lg:flex-row flex-col lg:justify-center lg:gap-x-40 items-center text-white '>
<motion.div variants={fadeIn('right',0.3)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.7}}>
  <p className='text-accent font-bold'>GET IN Touch</p>
  <h2 className='h2 tracking-[4px] mb-2 py-4 text-2xl'>Contact with Me</h2>

  <div>


{
  contactobj.map(index=><div key={index.title}>

    <div className='flex items-center gap-x-2'>
      <div className='font-semibold text-xl'>
        {index.name}
      </div>
      <div>
      <h2 className='text-2xl font-bold'>{index.title}</h2>  
      <p>{index.des}</p>
      </div>
    </div>
  </div>)
}




  </div>
</motion.div>

<motion.div className='mt-5'variants={fadeIn('left',0.5)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.7}}>
  <form className='flex-1 lg:w-[500px] p-10 rounded-lg'style={{border:"1px solid white"}}  action="https://formspree.io/f/xpzgaoka" method="POST">

<input type="text" className='placeholder:text-white border-0 border-b bg-transparent w-full lg:max-w-[1000px] boxshadow-none outline-none focus:border-accent mb-8 pb-4 text-white'placeholder='Your name'name="Name"id="Name" required/>

<input type="email" className='placeholder:text-white border-0 border-b bg-transparent w-full lg:max-w-[1000px] boxshadow-none outline-none  mb-20 focus:border-accent pb-4 text-white'placeholder='Your email'name="Email"id="Email"required/>

<textarea cols="40"rows="5"placeholder='Your message'className='placeholder:text-white border-0 border-b text-white bg-transparent w-full lg:max-w-[1000px] boxshadow-none outline-none  mb-20 focus:border-accent resize-none'name="Message" id="Message" required></textarea>

{/* <input type="submit"placeholder='submit'/> */}
<button className='btn btn-lg'>send message</button>
  </form>
</motion.div>





   
   
   
   
   
</div>
    </div>
  </div>;
};

export default Contact;
