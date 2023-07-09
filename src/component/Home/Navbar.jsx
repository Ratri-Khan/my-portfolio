
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
     
      <div className="navbar bg-black text-white md:justify-between">
      <div>
        <a className="btn btn-ghost normal-case text-xl">Ratri Khan</a>
      </div>
      <div>
        <ul className="menu menu-horizontal px-1">
        <li><a> <Link to="/">Home</Link></a></li>
        <li><a><Link to="/project">Project</Link></a></li>
        <li><a> <Link to="/aboutMe">About Me</Link> </a></li>
        <li><a><Link to="/contact">Contact</Link></a></li>
        <li><a><Link to="/skill">My-Skill</Link></a></li>
        </ul>
      </div>
    </div>
    );
};

export default Navbar;