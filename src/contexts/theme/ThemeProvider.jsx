import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import ThemeContext from ".";

function ThemeProvider({ value, children }) {
  const root = useRef(document.documentElement);

  useEffect(() => {
    if (value === "white") {
      root.current.style.setProperty("--color", "black");
      root.current.style.setProperty("--background-color", "white");
      root.current.style.setProperty("--red-color", "#9A0A06");
      root.current.style.setProperty("--black-color", "#1D1D1D");
    }
    if (value === "dark") {
      root.current.style.setProperty("--color", "white");
      root.current.style.setProperty("--background-color", "#252525");
      root.current.style.setProperty("--red-color", "#FF3838");
      root.current.style.setProperty("--black-color", "#1D1D1D");
    }
  }, [value]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  value: PropTypes.string,
  children: PropTypes.node,
};

ThemeProvider.defaultProps = {
  value: "dark",
  children: null,
};

export default ThemeProvider;
