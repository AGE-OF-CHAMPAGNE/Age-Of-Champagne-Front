import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./MyGrapesVarieties.module.css";

function MyGrapesVarieties({ title, number, imgPath, color }) {
  const [nbDeci, setNbDeci] = useState(
    Number.isInteger(number) ? 0 : number.toString().split(".")[1].length
  );
  const [sNumber, setSNumber] = useState(0);
  const timeout = 40;

  useEffect(() => {
    setSNumber(0);
    setNbDeci(
      Number.isInteger(number) ? 1 : number.toString().split(".")[1].length
    );
  }, [number]);

  useEffect(() => {
    setTimeout(() => {
      if (sNumber < number) {
        setSNumber((prevSNumber) =>
          parseFloat((prevSNumber + number / timeout).toFixed(nbDeci)) >
          prevSNumber
            ? parseFloat((prevSNumber + number / timeout).toFixed(nbDeci))
            : parseFloat((prevSNumber + 0.1).toFixed(1))
        );
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
