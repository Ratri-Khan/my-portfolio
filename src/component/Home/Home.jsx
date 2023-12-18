import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="bg-black">          
            <Banner></Banner>
            <Skills></Skills>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;