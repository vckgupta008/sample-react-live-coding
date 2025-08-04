import UserClass from './UserClass';
import User from './User';
const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Welcome to our food app! We are dedicated to bringing you the best culinary experiences.</p>
      <p>Our mission is to connect food lovers with amazing restaurants and dishes.</p>
      <p>Explore our app to discover new flavors and enjoy your meals!</p>

      userrrrrrrr
      {/* <User name="Vicky Gupta function" loc="blr"/> */}
      <UserClass name="Vicky Gupta class" loc="blr"/>
    </div>
  );
}

export default About;