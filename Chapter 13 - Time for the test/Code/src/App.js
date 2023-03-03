import React, { lazy, Suspense, useState, useContext } from "react";
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
import Profile from "./components/Profile"; 
import ProfileClass from "./components/ProfileClass";
import Shimmer from "./components/Shimmer";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import store from "./Utils/store";
import Cart from "./components/Cart";

const InstaMart = lazy(() => import("./components/InstaMart"));

const AppLayout = () => {

  const [user, setUser] = useState({
    name : "Kaustubh Sinha",
    email : "support@gmail.com"
  });

  const location = useLocation();
  return (
    <Provider store={store}>
      <UserContext.Provider value={{
        user:user,
        setUser:setUser
      }}>
        <HeaderComponent {...location.state} />
        <Outlet />
        <Footer/>
      </UserContext.Provider>
    </Provider>
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
        children : [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
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
