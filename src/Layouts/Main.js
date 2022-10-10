import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "../Components/NavBar2/Navbar2";

const Main = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
