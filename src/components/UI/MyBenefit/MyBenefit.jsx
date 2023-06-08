import React from "react";
import PropTypes from "prop-types";
import classes from "./MyBenefit.module.css";
import MySlider from "../MySlider/MySlider";

function MyBenefit({
  startDate,
  endDate,
  recipientName,
  title,
  description,
  imgs,
}) {
  const startTab = [
    startDate.getDate(),
    startDate.getMonth(),
    startDate.getFullYear(),
  ];
  const endTab = [endDate.getDate(), endDate.getMonth(), endDate.getFullYear()];
  const month = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.date}>
          <article>
            Du {startTab[0]} {month[startTab[1]]} {startTab[2]}
          </article>
          <article>
            Au {endTab[0]} {month[endTab[1]]} {endTab[2]}
          </article>
        </div>
        <div className={classes.name}>{recipientName}</div>
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.desc}>{description}</div>
      {imgs ? <MySlider name={description} imgs={imgs} /> : ""}
    </div>
  );
}

MyBenefit.defaultProps = {
  startDate: new Date(),
  endDate: new Date(),
  imgs: null,
};

MyBenefit.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  recipientName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ),
};

export default MyBenefit;
