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
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;