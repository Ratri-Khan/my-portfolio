// import React from 'react';

import Services from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
// import Navbar from "./Navbar";
import Skills from "./Skills";
// import Footer from "../shared/Footer"

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Skills></Skills>
            <Services></Services>
            <Contact></Contact>
            
            
        </div>
    );
};

export default Home;