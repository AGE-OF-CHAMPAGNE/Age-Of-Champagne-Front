import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ThemeProvider from "./theme/ThemeProvider";
import UserProvider from "./user/UserProvider";
import DukProvider from "./duk/DukProvider";
import { areDukShown } from "../services/api/didyouknows";

function Provider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [duk, setDuk] = useState(!!areDukShown());

  const changeTheme = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "white");
      setTheme("white");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  useEffect(() => {
    if (!localStorage.getItem("duk")) {
      localStorage.setItem("duk", JSON.stringify([]));
    }
    const data = localStorage.getItem("theme");
    if (data) {
      setTheme(data);
    }
  }, []);
  return (
    <UserProvider>
      <DukProvider value={{ duk, setDuk }}>
        <ThemeProvider value={{ theme, changeTheme }}>{children}</ThemeProvider>
      </DukProvider>
    </UserProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
