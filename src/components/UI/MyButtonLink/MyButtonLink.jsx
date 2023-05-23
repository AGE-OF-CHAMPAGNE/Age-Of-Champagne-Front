import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from "./MyButtonLink.module.css";

function MyButtonLink({ to, children, className, color }) {
  return (
    <Link
      className={`${className} ${classes.MyButtonLink}`}
      style={{ backgroundColor: color }}
      to={to}
    >
      {children}
    </Link>
  );
}

MyButtonLink.defaultProps = {
  className: "",
  color: "#fabd62",
};

MyButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
};

export default MyButtonLink;
