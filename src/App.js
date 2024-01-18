import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => (
  <div id="container">
    <Header />
    <Outlet />
    {/* <Body /> */}
  </div>
);

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
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter1} />);

const reactElement = <h1>it is the react element</h1>;
