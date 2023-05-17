import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeProvider from "./contexts/theme/ThemeProvider";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  const [theme] = useState("dark");

  return (
    <ThemeProvider value={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards/:id" element={<div>cards</div>} />
          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
