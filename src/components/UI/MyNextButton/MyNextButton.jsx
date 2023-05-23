import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "./MyNextButton.module.css";

function MyNextButton({ to, className, color }) {
  const { circle, link, line, bot, top } = classes;
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`${className} ${circle} `}
      style={{
        border: `1px solid ${color}`,
        backgroundColor: clicked ? color : "transparent",
      }}
    >
      <Link
        className={link}
        to={to}
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
    </div>
  );
}

MyNextButton.defaultProps = {
  to: "/",
  className: "",
  color: "white",
};

MyNextButton.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};

export default MyNextButton;
