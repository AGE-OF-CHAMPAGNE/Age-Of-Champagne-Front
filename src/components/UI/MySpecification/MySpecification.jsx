import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./MySpecification.module.css";

function MySpecification({ title, number, color }) {
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
        background: `linear-gradient(180deg, ${color} 0%, rgba(0, 0, 0, 0) 100%)`,
      }}
    >
      <div className={classes.title}> {title} </div>
      <article className={classes.number}> {sNumber} </article>
    </div>
  );
}

MySpecification.defaultProps = {
  title: "titre par defaut",
  number: 19.8885,
  color: "rgba(0, 0, 0, 0.2)",
};

MySpecification.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  color: PropTypes.string,
};

export default MySpecification;
