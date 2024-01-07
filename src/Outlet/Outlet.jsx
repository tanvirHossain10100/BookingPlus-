import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const OutLet = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};
