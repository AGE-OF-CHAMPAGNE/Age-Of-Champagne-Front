import React from "react";
import PropTypes from "prop-types";
import classes from "./MySpecification.module.css";

function MySpecification({ title, number }) {
  return (
    <div className={classes.main}>
      <div className={classes.title}> {title} </div>
      <div className={classes.number}> {number} </div>
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
