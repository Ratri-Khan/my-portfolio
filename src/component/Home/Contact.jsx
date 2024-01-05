import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import "./banner.css";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Contact = () => {
  const contactobj = [
    {
      name: <BsTelephone />,
      title: "Phone",
      des: "01786641114",
    },
    {
      name: <FaWhatsapp />,
      title: "whats app",
      des: "0178664114",
    },
    {
      name: <AiOutlineMail />,
      title: "Email",
      des: "ratrikhanam000@gmail.com",
    },
    {
      name: <CiLocationOn />,
      title: "Location",
      des: "Jamalpur,Bangladesh",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div
      className="container w-10/12 mx-auto py-8"
    >
      <h2 className="text-white  text-center text-4xl font-bold font-sans  my-8">
        Contact with Me
      </h2>
      <div className="md:flex lg:flex justify-between">
        <div
          className="md:w-6/12 lg:w-6/12 m-1"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="false"
        >
          <form
            className="flex-1 lg:w-[500px] p-10 rounded-xl border"
            action="https://formspree.io/f/xpzgaoka"
            method="POST"
          >
            <input
              type="text"
              className="placeholder:text-white border-0 border-b bg-transparent w-full lg:max-w-[1000px] boxshadow-none outline-none focus:border-accent mb-8 pb-4 text-white"
              placeholder="Your name"
              name="Name"
              id="Name"
              required
            />

            <input
              type="email"
              className="placeholder:text-white border-0 border-b bg-transparent w-full lg:max-w-[1000px] boxshadow-none outline-none  mb-20 focus:border-accent pb-4 text-white"
              placeholder="Your email"
              name="Email"
              id="Email"
              required
            />

            <textarea
              cols="40"
              rows="5"
              placeholder="Your message"
              className="placeholder:text-white border-0 border-b text-white bg-transparent w-full lg:max-w-[1000px] boxshadow-none outline-none  mb-10 focus:border-accent resize-none"
              name="Message"
              id="Message"
              required
            ></textarea>
            <button
              className="rounded bold py-3 px-7 border-t border-primaryLight2
                bg-gradient-to-r from-slate-950 to-black font-bold text-white"
            >
              send message
            </button>
          </form>
        </div>
        <div className="contact md:w-6/12 lg:w-6/12 rounded-xl m-1 text-white grid
        place-items-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-once="false">
          <div>
            <div>
              {contactobj.map((index) => (
                <div key={index.title} className="my-4">
                  <div className="items-center gap-x-2">
                    <span className="font-semibold text-xl"></span>
                    <div className="text-2xl font-bold flex items-center">
                      {index.name}
                      {index.title}
                    </div>
                    <p>{index.des}</p>
                  </div>
                </div>
              ))}
            </div>
            <button>
              <ul className="flex text-center">
                <li className="w-10 h-10 border-2 m-1 rounded-full border-[#00ffcc]">
                  <FaLinkedinIn
                    className="w-7 h-7 mt-1 ms-2 text-[#00ffcc]
                      text-center"
                  />
                </li>
                <li className="w-10 h-10 border-2 m-1 rounded-full border-[#00ffcc]">
                  <FiGithub className="w-7 h-7 mt-2 ms-1 text-[#00ffcc]" />
                </li>
                <li className="w-10 h-10 border-2 m-1 rounded-full border-[#00ffcc]">
                  <FaFacebookF
                    className=" w-7 h-7 mt-2 ms-1 text-[#00ffcc]
                      text-center "
                  />
                </li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
AOS.init();
export default Contact;
