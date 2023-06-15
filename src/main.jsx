import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layoutes from "./Components/Layoutes/Layoutes";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Blog from "./Components/Blog/Blog";
import Pages from "./Components/Pages/Pages";
import Contact from "./Components/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutes></Layoutes>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/services",
        element: <Services></Services>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/pages",
        element: <Pages></Pages>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
