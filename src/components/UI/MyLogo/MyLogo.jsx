import React from "react";
import PropTypes from "prop-types";
import classes from "./MyLogo.module.css";

function MyLogo({ className }) {
  const { logo, circle } = classes;

  return (
    <div className={`${logo} ${className}`}>
      <img src="/src/assets/img/icons/logo/Subtract.png" alt="AOC" />
      <img
        className={circle}
        src="/src/assets/img/icons/logo/Intersect.png"
        alt="circle"
      />
    </div>
  );
}

MyLogo.defaultProps = {
  className: "",
};

MyLogo.propTypes = {
  className: PropTypes.string,
};

export default MyLogo;
