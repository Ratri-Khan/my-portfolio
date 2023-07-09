// import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      //  <div className="bg-sky-950">
      //       <div className="navbar  text-white w-5/6 m-auto bg-sky-300">
      //       <div className="flex-1">
      //           <a className="btn btn-ghost normal-case text-xl">Ratri Khan</a>
      //       </div>
      //       <div className="flex-none">
      //         <ul className="menu menu-horizontal px-1">
      //           <li><a>Home</a></li>
      //           <li><a>Project</a></li>
      //           <li><a>About Me</a></li>
      //           <li><a>Blogs</a></li>
      //           <li><a>Contact</a></li>
      //        </ul>
      //      </div>
      //      </div>
      //   </div>
      <div className="navbar bg-black text-white md:justify-between">
      <div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div>
        <ul className="menu menu-horizontal px-1">
        <li><a> <Link to="/home">Home</Link></a></li>
        <li><a>Project</a></li>
        <li><a> <Link to="/aboutMe">About Me</Link> </a></li>
        <li><a>Blogs</a></li>
        <li><a><Link to="/contact">Contact</Link></a></li>
        </ul>
      </div>
    </div>
    );
};

export default Navbar;