
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Project from "./Project";
import Skills from "./Skills";

const Home = () => {
  
    return (
        <div className="bg-slate-900">   
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;