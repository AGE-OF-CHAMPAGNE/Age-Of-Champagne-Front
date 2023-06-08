import React, { useContext } from "react";
import PropTypes from "prop-types";
import classes from "./MyLogo.module.css";
import ThemeContext from "../../../contexts/theme/index";

function MyLogo({ className }) {
  const { logo, circle, subtract } = classes;
  const theme = useContext(ThemeContext);
  return (
    <div className={`${logo} ${className}`}>
      {theme === "dark" ? (
        <>
          <img
            src="/src/assets/img/icons/logo/light/Subtract.png"
            className={subtract}
            alt="AOC"
          />
          <img
            className={circle}
            src="/src/assets/img/icons/logo/light/Intersect.png"
            alt="circle"
          />
        </>
      ) : (
        <>
          <img
            src="/src/assets/img/icons/logo/dark/Subtract.png"
            className={subtract}
            alt="AOC"
          />
          <img
            className={circle}
            src="/src/assets/img/icons/logo/dark/Intersect.png"
            alt="circle"
          />
        </>
      )}
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
