import React from "react";
import PropTypes from "prop-types";
import classes from "./MySpinner.module.css";

function MySpinner({ active }) {
  const { opposites, bl, tr, br, tl } = classes;
  return (
    <div className={`${opposites} ${active ? "" : "d-none"}`}>
      <div className={`${opposites} ${bl}`} />
      <div className={`${opposites} ${tr}`} />
      <div className={`${opposites} ${br}`} />
      <div className={`${opposites} ${tl}`} />
    </div>
  );
}

MySpinner.defaultProps = {
  active: false,
};

MySpinner.propTypes = {
  active: PropTypes.bool,
};

export default MySpinner;
