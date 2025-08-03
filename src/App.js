import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";




const Footer = () => {
  return <h4>Footer</h4>;
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
//async defer
root.render(<AppLayout />);
