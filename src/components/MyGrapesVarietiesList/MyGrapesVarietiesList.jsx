import React from "react";
import PropTypes from "prop-types";
import MyGrapesVarieties from "../UI/MyGrapesVarieties/MyGrapesVarieties";
import classes from "./MyGrapesVarietiesList.module.css";

function MyGrapesVarietiesList({ list }) {
  return (
    <div className={classes.list}>
      {list.map((elem) => (
        <MyGrapesVarieties
          key={elem.title}
          title={elem.title}
          number={elem.number}
          imgPath={elem.imgPath}
          color={elem.color}
        />
      ))}
    </div>
  );
}

MyGrapesVarietiesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imgPath: PropTypes.string,
      color: PropTypes.string,
      number: PropTypes.number,
    })
  ).isRequired,
};

export default MyGrapesVarietiesList;
