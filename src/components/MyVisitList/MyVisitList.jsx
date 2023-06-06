import React from "react";
import PropTypes from "prop-types";
import MyVisit from "../UI/MyVisit/MyVisit";
import classes from "./MyVisitList.module.css";

function MyVisitList({ benefits }) {
  return (
    <div className={classes.benefitList}>
      {benefits.map((benefit) => (
        <MyVisit key={benefit.id} className={classes.item} benefit={benefit} />
      ))}
    </div>
  );
}

MyVisitList.propTypes = {
  benefits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      recipient: PropTypes.shape({
        name: PropTypes.string,
        date: PropTypes.string,
      }),
      description: PropTypes.string,
    })
  ).isRequired,
};

export default MyVisitList;
