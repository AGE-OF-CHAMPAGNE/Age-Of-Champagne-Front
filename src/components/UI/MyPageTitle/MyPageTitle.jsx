import React, { useContext } from "react";
import PropTypes from "prop-types";
import classes from "./MyPageTitle.module.css";
import ThemeProvider from "../../../contexts/theme";

function MyPageTitle({ children, className }) {
  const theme = useContext(ThemeProvider);

  return (
    <h1
      className={`${className} ${classes.title} display-6 ${
        theme === "light" ? classes.light : ""
      }`}
    >
      {children}
    </h1>
  );
}

MyPageTitle.defaultProps = {
  className: "",
};

MyPageTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default MyPageTitle;
