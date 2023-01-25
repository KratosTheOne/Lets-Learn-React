import { useState } from "react";
import { Link } from "react-router-dom";

// JSX or React element
const LoggedIn = () => {
  return true;
}

// SPA => Single Page Application
// Two types of routing -> Client-Side and Server-Side

export const Title = () => (
    <a href="/">
      <img className="title" src="https://thumbs.dreamstime.com/b/yum-yum-logo-text-cartoon-hand-drawn-calligraphy-style-design-doodle-print-vector-illustration-yum-yum-logo-text-cartoon-hand-176471952.jpg" alt="logo" /> 
    </a>
);

const HeaderComponent = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
      <div className="header">
        <Title />
        <div className = "nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        {//JS Expression
          isLoggedIn ? (
            <button onClick={() => setLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={() => setLoggedIn(true)}>Login</button>
          )}
      </div>
    );
};

export default HeaderComponent;