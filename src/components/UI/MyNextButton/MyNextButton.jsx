import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "./MyNextButton.module.css";

function MyNextButton({ to, className, color, onClick, disabled }) {
  const { circle, link, line, bot, top, cursor } = classes;
  const [clicked, setClicked] = useState(false);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${circle} `}
      style={{
        border: `1px solid ${color}`,
        backgroundColor: clicked ? color : "transparent",
      }}
    >
      <Link
        className={`${link} ${disabled ? cursor : ""}`}
        to={to}
        style={disabled ? { pointerEvents: "none" } : {}}
        onMouseLeave={() => setClicked(false)}
        onMouseEnter={() => setClicked(true)}
      >
        <span
          className={`${line} ${bot}`}
          style={{ backgroundColor: clicked ? "black" : color }}
        />
        <span
          className={`${line} ${top}`}
          style={{ backgroundColor: clicked ? "black" : color }}
        />
      </Link>
    </button>
  );
}

MyNextButton.defaultProps = {
  to: "/",
  className: "",
  color: "white",
  onClick: () => {},
  disabled: false,
};

MyNextButton.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default MyNextButton;
