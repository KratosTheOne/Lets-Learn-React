// JSX or React element
export const Title = () => (
    <a href="/">
      <img className="title" src="https://thumbs.dreamstime.com/b/yum-yum-logo-text-cartoon-hand-drawn-calligraphy-style-design-doodle-print-vector-illustration-yum-yum-logo-text-cartoon-hand-176471952.jpg" alt="logo" /> 
    </a>
);

const HeaderComponent = () => {
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
      </div>
    );
};

export default HeaderComponent;