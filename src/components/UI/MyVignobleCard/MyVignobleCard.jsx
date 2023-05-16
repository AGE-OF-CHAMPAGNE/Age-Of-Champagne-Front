import React from "react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import classes from "./MyVignobleCard.module.css";
import MyButton from "../MyButton/MyButton";

function MyVignobleCard({ name, pointOfInterest, description, img, color }) {
  return (
    <div className={classes.main} style={{ backgroundColor: color }}>
      <div className={classes.name}>{name}</div>
      <div className={classes.p}>
        <div className={classes.p1}>
          <div className={classes.icon}>
            <Icon icon="flat-color-icons:ok" />
            <article>{pointOfInterest[0]}</article>
          </div>
          <div className={classes.icon}>
            <Icon icon="flat-color-icons:ok" />
            <article>{pointOfInterest[1]}</article>
          </div>
        </div>
        <div className={classes.p2}>
          <div className={classes.icon}>
            <Icon icon="flat-color-icons:ok" />
            <article>{pointOfInterest[2]}</article>
          </div>
          <div className={classes.icon}>
            <Icon icon="flat-color-icons:ok" />
            <article>{pointOfInterest[3]}</article>
          </div>
        </div>
      </div>
      <div className={classes.desc}>{description}</div>
      <div className={classes.imageBox}>
        <img className={classes.img} alt="vingneron" src={img} />
      </div>
      <div className={classes.button}>
        <MyButton className={classes.btn} color="#FFFFFF" textColor="#000000">
          En savoir +
        </MyButton>
      </div>
    </div>
  );
}

MyVignobleCard.defaultProps = {
  name: "Nom du Vigneron",
  pointOfInterest: [],
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout ...",
  img: "src/assets/img/defaultBenefit.png",
  color: "#FFFFFF",
};

MyVignobleCard.propTypes = {
  name: PropTypes.string,
  pointOfInterest: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  color: PropTypes.string,
};

export default MyVignobleCard;
