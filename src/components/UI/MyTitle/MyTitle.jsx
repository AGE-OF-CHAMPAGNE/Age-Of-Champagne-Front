import React from "react";
import PropTypes from "prop-types";
import classes from "./MyTitle.module.css";

function MyTitle({ children, className }) {
  return (
    <div>
      <h1 className={`${className} ${classes.title}`}>{children}</h1>
    </div>
  );
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
