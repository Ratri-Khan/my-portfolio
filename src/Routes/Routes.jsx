import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../component/Home/Home";
import Services from "../component/Home/AboutMe";
import Contact from "../component/Home/Contact";
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
          }
    ]
  }
  ]);

export default router;