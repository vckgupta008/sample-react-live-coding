import React from "react";
import { LOGO_URL } from "../utils/constants";

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
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
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