import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src={LOGO_URL}
    />
  </a>
);

// Composing Comopnentss
const Header = () => {
  const [btname, setBtnName] = React.useState("Login");
  console.log("Header Rendered");
  useEffect(() => {
    console.log("useEffect called");
  },[]);   
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/contact'}>Contacts</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => {
            setBtnName(btname === "Login" ? "Logout" : "Login");
          }}>
            {btname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;