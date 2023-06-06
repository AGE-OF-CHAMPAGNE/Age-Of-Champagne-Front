import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeProvider from "./contexts/theme/ThemeProvider";
import "./App.css";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Layout from "./components/Layout/Layout";
import Card from "./pages/Card/Card";
import Scanner from "./pages/Scanner/Scanner";
import Cards from "./pages/Cards/Cards";
import User from "./pages/User/User";
import SignUp from "./pages/SignUp/SignUp";
import UserProvider from "./contexts/user/UserProvider";

function App() {
  const [theme] = useState("dark");

  return (
    <UserProvider>
      <ThemeProvider value={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cards/:district/:vintage" element={<Card />} />
            <Route path="qrcode" element={<Scanner />} />
            <Route path="cards" element={<Cards />} />
            <Route path="user" element={<User />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
