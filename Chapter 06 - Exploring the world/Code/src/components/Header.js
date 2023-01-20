import { useState } from "react";

// JSX or React element
const LoggedIn = () => {
  return true;
}

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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
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