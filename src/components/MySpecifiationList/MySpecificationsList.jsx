import React from "react";
import PropTypes from "prop-types";
import classes from "./MySpecificationList.module.css";
import MySpecification from "../UI/MySpecification/MySpecification";

function MySpecificationsList({ list }) {
  return (
    <div className={classes.spList}>
      <MySpecification title="Superficie (ha)" number={list[0]} />
      <MySpecification title="Longitude" number={list[1]} />
      <MySpecification title="Latitude" number={list[2]} />
    </div>
  );
}

MySpecificationsList.defaultProps = {
  list: [],
};

MySpecificationsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.number),
};

export default MySpecificationsList;
