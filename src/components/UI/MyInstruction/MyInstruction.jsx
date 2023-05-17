import React, { useContext } from "react";
import PropTypes from "prop-types";
import classes from "./MyInstruction.module.css";
import ThemeProvider from "../../../contexts/theme";

function MyInstruction({ className, img, color, title, description, side }) {
  const {
    "right-title": rightTitle,
    "right-desc": rightDesc,
    light,
    step__circle: stepCircle,
    right,
    step__img: stepImg,
    text,
    step__title: stepTitle,
    step__description: stepDescription,
  } = classes;
  const theme = useContext(ThemeProvider);

  return (
    <div
      className={`${className} ${side === "right" ? right : ""} ${
        theme === "white" ? light : ""
      }`}
    >
      <div className={stepCircle} style={{ backgroundColor: color }}>
        <img className={stepImg} src={img.src} alt={img.alt} />
      </div>

      <div className={text}>
        <div
          className={`${stepTitle} ${side === "right" ? rightTitle : ""}`}
          style={{ backgroundColor: color }}
        >
          {title}
        </div>
        <div
          className={`${stepDescription} ${side === "right" ? rightDesc : ""}`}
        >
          {description}
        </div>
      </div>
    </div>
  );
}

MyInstruction.defaultProps = {
  side: "left",
  img: { src: "/src/assets/img/cards/tourist.png", alt: "touriste" },
  color: "#F0AE3C",
  title: "Titre par defaut",
  className: "",
  description:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. a qui officia deserunt mollit anim id est laborum."',
};

MyInstruction.propTypes = {
  side: PropTypes.oneOf(["right", "left"]),
  img: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }),
  color: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  description: PropTypes.string,
};

export default MyInstruction;
