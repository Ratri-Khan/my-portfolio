// import React from 'react';

import { Outlet } from "react-router-dom";
import Footer from "../component/shared/Footer";
import Navbar from "../component/Home/Navbar";


const Main = () => {
    return (
        <div className="bg-black">
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           
        </div>
    );
};

export default Main;