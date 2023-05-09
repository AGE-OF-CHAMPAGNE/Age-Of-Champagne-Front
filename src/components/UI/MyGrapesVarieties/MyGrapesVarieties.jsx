import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./MyGrapesVarieties.module.css";

function MyGrapesVarieties({ title, number, imgPath, color }) {
  const StringNbDeci = number.toString().split(".")[1];
  const nbDeci = StringNbDeci.length;
  const [sNumber, setSNumber] = useState(0);
  const timeout = 40;

  useEffect(() => {
    setTimeout(() => {
      if (sNumber < number) {
        setSNumber(parseFloat((sNumber + number / timeout).toFixed(nbDeci)));
      } else {
        setSNumber(number);
      }
    }, timeout);
  }, [sNumber]);

  return (
    <div
      className={classes.main}
      style={{
        background: `linear-gradient(180deg,rgba(${color}, 0.2) 0%,rgba(${color}, 0) 100%)`,
      }}
    >
      <img className={classes.image} src={imgPath} alt="grape de raisin" />
      <div className={classes.text}>
        <div className={classes.title}> {title} </div>
        <article className={classes.number}> {sNumber}% </article>
      </div>
    </div>
  );
}

MyGrapesVarieties.defaultProps = {
  title: "titre par defaut",
  number: 92.7,
  imgPath: "src/assets/img/icons/goldGrape.png",
  color: "54, 124, 192",
};

MyGrapesVarieties.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  imgPath: PropTypes.string,
  color: PropTypes.string,
};

export default MyGrapesVarieties;
