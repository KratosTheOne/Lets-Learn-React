import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/** 
 * Header
 *  - logo
 *  - list items
 *  - cart
 * 
 * Body
 *  - search bar
 *  - restaurant list
 *    - restaurant card
 *      - image
 *      - name
 *      - rating
 *      - cusinies
 * 
 * Footer
 *  - links
 *  - copyrights
*/

const AppLayout = () => {
  return (
    <>
      <HeaderComponent/>
      <Body/>
      <Footer/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);