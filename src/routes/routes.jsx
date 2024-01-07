import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import App from "../App";
import { Children } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
    ],
  },
]);
