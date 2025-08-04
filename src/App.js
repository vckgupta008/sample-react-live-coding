import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
// const Footer = () => {
  //   return <h4>Footer</h4>;
// };
const AppLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    {/* <Footer /> */}
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ],
    errorElement: <Error />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
//async defer
root.render(<RouterProvider router={appRouter} />);
