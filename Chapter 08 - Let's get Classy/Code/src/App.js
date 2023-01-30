import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import { useLocation } from "react-router-dom";

const AppLayout = () => {
  const location = useLocation();
  return (
    <>
      <HeaderComponent {...location.state} />
      <Outlet />
      <Footer/>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

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
