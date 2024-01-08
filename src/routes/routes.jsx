import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import App from "../App";
import { Signup } from "../pages/Signup/Signup";
import { Login } from "../pages/LogIn/Login";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
