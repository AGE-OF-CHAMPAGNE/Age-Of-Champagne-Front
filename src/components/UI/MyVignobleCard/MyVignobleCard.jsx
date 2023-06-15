import React from "react";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import classes from "./MyVignobleCard.module.css";
import MyButtonLink from "../MyButtonLink/MyButtonLink";
import MySlider from "../MySlider/MySlider";

function MyVignobleCard({
  className,
  data,
  name,
  pointOfInterest,
  imgs,
  color,
  sliderName,
}) {
  return (
    <div className={classes.card}>
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
        <div className={classes.p}>
          <div className="w-100 d-flex justify-content-between">
            Adresse: <span className={classes.span}>{data.address}</span>
          </div>
          <div className="w-100 d-flex justify-content-between">
            Téléphone: <span className={classes.span}>{data.phoneNumber}</span>
          </div>
          <div className="w-100 d-flex justify-content-between">
            Ville: <span className={classes.span}>{data.city}</span>
          </div>
          <div className="w-100 d-flex justify-content-between">
            CP: <span className={classes.span}>{data.postalCode}</span>
          </div>
        </div>
        <MySlider
          sliderName={name}
          name={sliderName}
          className={classes.img}
          imgs={imgs}
        />
        <div className={classes.button}>
          <MyButtonLink
            className={classes.btn}
            to={`/recipients/${name}`}
            color="white"
          >
            En savoir +
          </MyButtonLink>
        </div>
      </div>
    </div>
  );
}

MyVignobleCard.defaultProps = {
  sliderName: "slider",
  className: "",
  data: {
    address: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
  },
  name: "Nom du Vigneron",
  pointOfInterest: [],
  imgs: [
    { id: 0, src: "src/assets/img/defaultBenefit.png", alt: "" },
    { id: 1, src: "src/assets/img/defaultBenefit.png", alt: "" },
    { id: 2, src: "src/assets/img/defaultBenefit.png", alt: "" },
  ],
  color: "#FFFFFF",
};

MyVignobleCard.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    postalCode: PropTypes.string,
    phoneNumber: PropTypes.string,
  }),
  sliderName: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  name: PropTypes.string,
  pointOfInterest: PropTypes.arrayOf(PropTypes.string),
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
  color: PropTypes.string,
};

export default MyVignobleCard;
