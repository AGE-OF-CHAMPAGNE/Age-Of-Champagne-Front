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
  area: 194.9,
  longitude: 3.6167,
  latitude: 48.6167,
};

MySpecificationsList.propTypes = {
  area: PropTypes.number,
  longitude: PropTypes.number,
  latitude: PropTypes.number,
};

export default MySpecificationsList;
