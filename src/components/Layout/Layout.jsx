import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "../UI/MyNavbar/MyNavbar";
import MyPopUp from "../UI/MyPopUp/MyPopUp";

function Layout() {
  const [popup, setPopup] = useState(null);
  return (
    <>
      <Outlet />
      <MyNavbar />
      {popup ? <MyPopUp /> : ""}
    </>
  );
}

export default Layout;
