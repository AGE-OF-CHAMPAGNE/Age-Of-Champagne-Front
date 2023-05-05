import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classes from "./MySpecification.module.css";

function MySpecification({ title, number }) {
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
    <div className={classes.main}>
      <div className={classes.title}> {title} </div>
      <article className={classes.number}> {sNumber} </article>
    </div>
  );
}

MySpecification.defaultProps = {
  title: "titre par defaut",
  number: 19.8885,
};

MySpecification.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
};

export default MySpecification;
