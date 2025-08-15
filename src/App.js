import React, { lazy, Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from 'react-redux';
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

const AppLayout = () => {
  const [user, setUser] = React.useState({
    name: "Vicky Gupta1",  
    email: "dsdsdsds@dff.com"
  });  
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{user: user, setUser: setUser}}>
        <div className="app ">
          <UserContext.Provider value={{user: {name:"Elon musk"}, setUser: setUser}}>
            <Header />
          </UserContext.Provider>
        <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));


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
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback="loading"><Grocery /></Suspense>,
      }
    ],
    errorElement: <Error />,
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
//async defer
root.render(<RouterProvider router={appRouter} />);
