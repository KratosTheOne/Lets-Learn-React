import React from "react";
import ReactDOM from "react-dom/client";

// Below is Homework
// Question 1 :- Create a Nested header Element using React.createElement (h1,h2,h3,inside div with class title)?
const heading1 = React.createElement(
    "h1",
    {
        id: "t1",
        key: "k1",
    },
    "This is Heading1 from Parcel"
);

const heading2 = React.createElement(
    "h1",
    {
        id: "t2",
        key: "k2"
    },
    "This is Heading2 from Parcel"
);

const heading3 = React.createElement(
    "h1",
    {
        id: "t3",
        key: "k3"
    },
    "This is Heading3 from Parcel"
);

const container = React.createElement(
    "div",
    {
        className: "title"
    },
    [
        heading1,
        heading2,
        heading3
    ]
);
  
//const root = ReactDOM.createRoot(document.getElementById("root"));
  
//root.render(container);
  
  // Question 2 :- Create a Nested header Element using JSX (h1,h2,h3,inside div with class title)?
  
  const jsxH1 = (
    <h2 id="head1" key="h1">
      Heading1
    </h2>
  );
  const jsxH2 = (
    <h2 id="head2" key="h2">
      Heading2
    </h2>
  );
  const jsxH3 = (
    <h2 id="head3" key="h3">
      Heading3
    </h2>
  );
  
  const JsxDiv = () => {
    return (
      <div>
        {jsxH1}
        {jsxH2}
        {jsxH3}
      </div>
    );
  };
  
   //const root = ReactDOM.createRoot(document.getElementById("root"));
  
   //root.render(<JsxDiv />);
  
  //  Question 3 :- Create a header component from scratch using functional component with JSX 1 - add logo on left 2- search bar in middle
  //   3- add user icon in right 4- add css to look good ?
  
  const logo = (
    <div>
      <img className="logo" src="./assets/reactLogo.jpg" alt="react logo" height={50} width={50} />
    </div>
  );
  
  const searchBar = (
    <div>
      <input className="searchBar" type="text" placeholder="Search Here" />
    </div>
  );
  
  const userIcon = (
    <div>
      <img className="icon" src="./assets/userIcon.jpg" alt="user Icon" height={50} width={50} />
    </div>
  );
  
  const HeaderComponent = () => {
    return (
      <div className="headerContainer">
        {logo},{searchBar},{userIcon}
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<HeaderComponent />);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Below is what was taught in class

import React from "react";
import ReactDOM from "react-dom/client";


// JSX or React element
const Title = () => (
    <h1 id = "h1" key = "1">
        This is heading 1 from JSX
    </h1>
);

// React component
// Two types
// Functional Component -> most used
// Class based Components -> less used, mostly for old projects and interviews

const HeaderComponent = () => (
    <div>
        <Title />
        <h2>This is a functinal component</h2>
        <h2>This is a heading2</h2>
    </div>
);

// const heading2 = React.createElement(
//     "h2",
//     {
//         id : "title"
//     },
//     "This is heading 2"
// );

// const container = React.createElement(
//     "div",
//     {
//         id : "container"
//     },
//     [heading, heading2]
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
*/