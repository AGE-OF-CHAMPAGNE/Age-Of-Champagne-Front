import React from "react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import classes from "./MyVignobleCard.module.css";
import MyButtonLink from "../MyButtonLink/MyButtonLink";
import MySlider from "../MySlider/MySlider";

function MyVignobleCard({
  className,
  name,
  pointOfInterest,
  description,
  imgs,
  color,
  sliderName,
  to,
}) {
  return (
    <div
      className={`${classes.main} ${className}`}
      style={{ backgroundColor: color }}
    >
      <h1 className={classes.name}>{name}</h1>
      <div className={classes.p}>
        {pointOfInterest.map((elem) => (
          <div key={elem} className={classes.icon}>
            <Icon icon="flat-color-icons:ok" />
            <span>{elem}</span>
          </div>
        ))}
      </div>
      <div className={classes.desc}>{description}</div>
      <MySlider
        sliderName={name}
        name={sliderName}
        className={classes.img}
        imgs={imgs}
      />
      <div className={classes.button}>
        <MyButtonLink to={to} className={classes.btn} color="#FFFFFF">
          En savoir +
        </MyButtonLink>
      </div>
    </div>
  );
}

MyVignobleCard.defaultProps = {
  sliderName: "slider",
  className: "",
  name: "Nom du Vigneron",
  pointOfInterest: [
    "Point d'interet 1",
    "Point d'interet 2",
    "Point d'interet 3",
    "Point d'interet 4",
  ],
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ...",
  imgs: [
    { id: 0, src: "src/assets/img/defaultBenefit.png", alt: "" },
    { id: 1, src: "src/assets/img/defaultBenefit.png", alt: "" },
    { id: 2, src: "src/assets/img/defaultBenefit.png", alt: "" },
  ],
  color: "#FFFFFF",
  to: "/",
};

MyVignobleCard.propTypes = {
  sliderName: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  name: PropTypes.string,
  pointOfInterest: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  color: PropTypes.string,
  to: PropTypes.string,
};

export default MyVignobleCard;
