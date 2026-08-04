import React from "react";
import Home from "./home";
import Nav from "./nav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Nav />
      <Home />
      <Outlet />
    </>
  );
};

export default Main;
