import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

const HeaderComponent = (user) => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
  
    console.log("In Nav Component", user);
    
    const toggleLogin = () => {
      console.log("isLoggedIn", isLoggedIn);
      setLoggedIn(!isLoggedIn);
      let params = (!user.authenticated ) ? { state: { authenticated: false } } :  { state: { authenticated: false, msg: "You have logged out of the Food App. " } } ;
      navigate('/login', params );
  }

    return (
      <div className="header">
        <Title />
        <div className = "nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/instamart">InstaMart</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        {//JS Expression
          <button className="nav-btn" onClick={() => {toggleLogin()}} > {isLoggedIn?  "Logout" : "Login" } </button>
        }
      </div>
    );
};

export default HeaderComponent;