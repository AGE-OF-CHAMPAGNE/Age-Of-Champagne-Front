import React from "react";
import PropTypes from "prop-types";
import classes from "./MyTitle.module.css";

function MyTitle({ children, className }) {
  return <h1 className={`${className} ${classes.title}`}>{children}</h1>;
}

MyTitle.defaultProps = {
  children: "",
  className: "",
};

MyTitle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
};

export default MyTitle;
