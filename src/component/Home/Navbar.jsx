import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

const Navbar = () => {
  return (
    // <div className=" navbar fixed text-white">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor">
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"/>
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 font-bold">
    //       <li>{" "}<Link to="/">Home</Link></li>
    //       <li><Link to="/project">Project</Link></li>
    //       <li>{" "}<Link to="/aboutMe">About Me</Link>{" "}</li>
    //       <li><Link to="/contact">Contact</Link></li>
    //       <li><Link to="/skill">My-Skill</Link></li>
    //       </ul>
    //     </div>
        // <FaHeart className="items-center mt-1 ml-4"/>
        // <a className="text-2xl items-center">Ratri</a>
    //   </div>

    //   <div className="navbar-end">
    //   <div className="navbar-center hidden lg:flex">
      // <ul className="menu menu-horizontal px-1 font-bold">
      //     <li>{" "}<Link to="/">Home</Link></li>
      //     <li><Link to="/project">Project</Link></li>
      //     <li>{" "}<Link to="/aboutMe">About Me</Link>{" "}</li>
      //     <li><Link to="/contact">Contact</Link></li>
      //     <li><Link to="/skill">My-Skill</Link></li>
      //   </ul>
    //   </div>
    //   </div>
    // </div>
    <div className="navbar fixed text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>{" "}<Link to="/">Home</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li>{" "}<Link to="/aboutMe">About Me</Link>{" "}</li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/skill">My-Skill</Link></li>
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      <FaHeart className="items-center mt-1 ml-4"/>
      <a className="text-2xl items-center">Ratri</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-bold uppercase">
          <li>{" "}<Link to="/">Home</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li>{" "}<Link to="/aboutMe">About Me</Link>{" "}</li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/skill">My-Skill</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="rounded  bold py-2 px-7
             border-2 border-[#00ffcc] font-bold text-[#00ffcc]">
          <a href="Ratri khan2.pdf" download="myfile.pdf">
            Download Resume
          </a>
    </button>
  </div>
</div>
  );
};

export default Navbar;
