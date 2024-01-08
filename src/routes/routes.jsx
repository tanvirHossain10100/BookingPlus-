import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import App from "../App";
import { Children } from "react";
import { Signup } from "../pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/signUp",
        element: <Signup></Signup>,
      },
    ],
  },
]);
