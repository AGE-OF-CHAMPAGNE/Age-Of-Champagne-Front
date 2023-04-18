import React from "react";
import PropTypes from "prop-types";
import classes from "./MyButton.module.css";

function MyButton({ onClick, children, className, color }) {
  return (
    <button
      type="button"
      className={`${className} ${classes.MyButton}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

MyButton.defaultProps = {
  onClick: () => {},
  children: "default button",
  className: "",
  color: "#fabd62",
};

MyButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};

export default MyButton;
