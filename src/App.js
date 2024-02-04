import React, { Children, useContext } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils.js/UserContext";
import { Provider } from "react-redux";
import appstore from "./utils.js/store";
import Cart from "./components/Cart";

const AppLayout = () => {
  let value = { loggedInUser: "AjayKumar" };
  return (
    <Provider store={appstore}>
      <UserContext.Provider value={value}>
        <div id="container">
          <Header />
          <Outlet />
          {/* <Body /> */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// const appRouter = createBrowserRouter([
//   { path: "/", element: <AppLayout />, errorElement: <Error /> },
//   { path: "/about", element: <About />, error: <Error /> },
// ]);

const approuter1 = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/", element: <Body /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      { path: "/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter1} />);

const reactElement = <h1>it is the react element</h1>;
