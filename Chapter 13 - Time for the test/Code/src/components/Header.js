import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../Utils/UserContext";
import logo from "../Assets/logoTitle.jpg"
import useOnline from "../Utils/useOnline";

// JSX or React element
const LoggedIn = () => {
  return true;
}

// SPA => Single Page Application
// Two types of routing -> Client-Side and Server-Side

export const Title = () => (
    <a href="/">
      <img data-testId="logo" className="h-28 p-2" src={logo} alt="logo" /> 
    </a>
);

const HeaderComponent = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    //const navigate = useNavigate();
    const isOnline = useOnline();
    //console.log("In Nav Component", user);
    
    const toggleLogin = () => {
      console.log("isLoggedIn", isLoggedIn);
      setLoggedIn(!isLoggedIn);
      let params = (!user.authenticated ) ? { state: { authenticated: false } } :  { state: { authenticated: false, msg: "You have logged out of the Food App. " } } ;
      //navigate('/login', params );
    }

    const { user } = useContext(UserContext);

    const cartItems = useSelector(store => store?.cart?.items);
    //console.log(cartItems);

    return (
      <div className="flex justify-between bg-pink-50 shadow-lg">
        <Title />
        <div className ="nav-items">
          <ul className="flex py-10">
            <li className="px-2"><Link to="/">Home</Link></li>
            <li className="px-2"><Link to="/about">About Us</Link></li>
            <li className="px-2"><Link to="/contact">Contact Us</Link></li>
            <li className="px-2"><Link to="/instamart">InstaMart</Link></li>
            <li className="px-2" data-testid="cart-items"><Link to="/cart">Cart - {cartItems.length} items</Link></li>
          </ul>
        </div>
        <h1 data-testId="online-status">{isOnline ? "Green" : "Red"}</h1>
        <span className="p-10 font-bold text-red-900">{user.name}</span>
        {//JS Expression
          <button className="" onClick={() => {toggleLogin()}} > {isLoggedIn?  "Logout" : "Login" } </button>
        }
      </div>
    );
};

export default HeaderComponent;