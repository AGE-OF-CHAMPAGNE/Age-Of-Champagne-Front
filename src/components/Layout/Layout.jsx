import React from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "../UI/MyNavbar/MyNavbar";

function Layout() {
  return (
    <>
      <Outlet />
      <MyNavbar />
    </>
  );
}

export default Layout;
