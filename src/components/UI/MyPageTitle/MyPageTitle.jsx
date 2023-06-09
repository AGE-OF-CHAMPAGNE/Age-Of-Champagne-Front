import React from "react";
import PropTypes from "prop-types";
import classes from "./MyPageTitle.module.css";

function MyPageTitle({ children, className }) {
  return (
    <h1 className={`${className} ${classes.title} display-6`}>{children}</h1>
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
