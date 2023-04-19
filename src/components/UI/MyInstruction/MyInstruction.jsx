import React from "react";
import PropTypes from "prop-types";
import classes from "./MyInstruction.module.css";

function MyInstruction({ className, img, colors, title, description, active }) {
  return (
    <div
      className={`${classes.step} ${
        active ? classes.step_active : ""
      } ${className}`}
    >
      <div
        className={classes.step__circle}
        style={{ backgroundColor: colors.circle }}
      >
        <img className={classes.step__img} src={img.src} alt={img.alt} />
      </div>
      <div
        className={classes.step__title}
        style={{ backgroundColor: colors.title }}
      >
        {title}
      </div>
      <div className={classes.step__description}>{description}</div>
    </div>
  );
}

MyInstruction.defaultProps = {
  img: { src: "/src/assets/img/cards/tourist.png", alt: "touriste" },
  colors: { title: "#b17100", circle: "#D37F00" },
  title: "",
  className: "",
  description: "",
  active: true,
};

// Stryker disable all
MyInstruction.propTypes = {
  img: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
  colors: PropTypes.shape({
    title: PropTypes.string,
    circle: PropTypes.string,
  }),
  title: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
  active: PropTypes.bool,
};

export default MyInstruction;
