import React from "react";
import PropTypes from "prop-types";
import classes from "./MySpecificationList.module.css";
import MySpecification from "../UI/MySpecification/MySpecification";

function MySpecificationsList({ list }) {
  return (
    <div className={classes.spList}>
      {list.map(({ title, number, color }) => (
        <MySpecification
          key={title}
          color={color}
          title={title}
          number={number}
        />
      ))}
    </div>
  );
}

MySpecificationsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      number: PropTypes.number,
      color: PropTypes.string,
    })
  ).isRequired,
};

export default MySpecificationsList;
