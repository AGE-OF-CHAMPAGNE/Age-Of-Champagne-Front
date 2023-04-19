import React from "react";
import PropTypes from "prop-types";
import classes from "./MyInstruction.module.css";

function MyInstruction({ className, img, colors, title, description }) {
  return (
    <div className={`${classes.step}  ${className}`}>
      <div
        className={classes.step__circle}
        style={{ backgroundColor: colors.circle }}
      >
        <img className={classes.step__img} src={img.src} alt={img.alt} />
      </div>

      <div className={classes.text}>
        <div
          className={classes.step__title}
          style={{ backgroundColor: colors.title }}
        >
          <div>{title}</div>
        </div>
        <div className={classes.step__description}>{description}</div>
      </div>
    </div>
  );
}

MyInstruction.defaultProps = {
  img: { src: "/src/assets/img/cards/tourist.png", alt: "touriste" },
  colors: { title: "#b17100", circle: "#D37F00" },
  title: "Titre par defaut",
  className: "",
  description:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. a qui officia deserunt mollit anim id est laborum."',
  active: true,
};

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
