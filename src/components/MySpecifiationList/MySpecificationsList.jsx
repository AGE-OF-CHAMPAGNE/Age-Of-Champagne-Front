import React from "react";
import PropTypes from "prop-types";
import classes from "./MySpecificationList.module.css";
import MySpecification from "../UI/MySpecification/MySpecification";

function MySpecificationsList({ area, latitude, longitude }) {
  return (
    <div className={classes.spList}>
      <MySpecification title="Superficie (ha)" number={area} />
      <MySpecification title="Longitude" number={longitude} />
      <MySpecification title="Latitude" number={latitude} />
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
