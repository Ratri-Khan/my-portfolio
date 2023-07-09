import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home/Home";
import Services from "../component/Home/AboutMe";
import Contact from "../component/Home/Contact";
import Project from "../component/Home/Project";
import Skills from "../component/Home/Skills";
// import Home from "../component/Home";

const router = createBrowserRouter([
  {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/home",
            element: <Home></Home>
          },
          {
            path:"/aboutMe",
            element:<Services></Services>
          },
          {
            path:"/contact",
            element:<Contact></Contact>
          },
          {
            path:"/project",
            element:<Project></Project>
          },
          {
            path:"/skill",
            element:<Skills></Skills>
          }
    ]
  }
  ]);

export default router;