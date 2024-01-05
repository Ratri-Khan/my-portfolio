import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home/Home";
// import Contact from "../component/Home/Contact";
// import Project from "../component/Home/Project";
// import Skills from "../component/Home/Skills";
// import AboutMe from "../component/Home/AboutMe";
// import Home from "../component/Home";

const router = createBrowserRouter([
  {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>
          }
          // {
          //   path:"/aboutMe",
          //   element:<AboutMe></AboutMe>
          // },
          // {
          //   path:"/contact",
          //   element:<Contact></Contact>
          // },
          // {
          //   path:"/project",
          //   element:<Project></Project>
          // },
          // {
          //   path:"/skill",
          //   element:<Skills></Skills>
          // }
    ]
  }
  ]);

export default router;