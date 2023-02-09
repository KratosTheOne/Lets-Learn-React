import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../Utils/UserContext";

// JSX or React element
const LoggedIn = () => {
  return true;
}

// SPA => Single Page Application
// Two types of routing -> Client-Side and Server-Side

export const Title = () => (
    <a href="/">
      <img class="h-28 p-2" src="https://thumbs.dreamstime.com/b/yum-yum-logo-text-cartoon-hand-drawn-calligraphy-style-design-doodle-print-vector-illustration-yum-yum-logo-text-cartoon-hand-176471952.jpg" alt="logo" /> 
    </a>
);

const HeaderComponent = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
  
    //console.log("In Nav Component", user);
    
    const toggleLogin = () => {
      console.log("isLoggedIn", isLoggedIn);
      setLoggedIn(!isLoggedIn);
      let params = (!user.authenticated ) ? { state: { authenticated: false } } :  { state: { authenticated: false, msg: "You have logged out of the Food App. " } } ;
      navigate('/login', params );
    }

    const { user } = useContext(UserContext);

    return (
      <div className="flex justify-between bg-pink-50 shadow-lg">
        <Title />
        <div className ="nav-items">
          <ul className="flex py-10">
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2"><Link to="/about">About Us</Link></li>
            <li className="px-2"><Link to="/contact">Contact Us</Link></li>
            <li className="px-2"><Link to="/instamart">InstaMart</Link></li>
            <li className="px-2"><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        <span className="p-10 font-bold text-red-900">{user.name}</span>
        {//JS Expression
          <button className="" onClick={() => {toggleLogin()}} > {isLoggedIn?  "Logout" : "Login" } </button>
        }
      </div>
    );
};

export default HeaderComponent;