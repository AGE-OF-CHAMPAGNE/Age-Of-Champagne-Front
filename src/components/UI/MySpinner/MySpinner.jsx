import React from "react";
import PropTypes from "prop-types";
import classes from "./MySpinner.module.css";

function MySpinner({ active, text }) {
  const { opposites, bl, tr, br, tl, span } = classes;
  return (
    <>
      <div className={`${opposites} ${active ? "" : "d-none"}`}>
        <div className={`${opposites} ${bl}`} />
        <div className={`${opposites} ${tr}`} />
        <div className={`${opposites} ${br}`} />
        <div className={`${opposites} ${tl}`} />
      </div>
      <span className={`${span} ${active ? "" : "d-none"}`}>{text}</span>
    </>
  );
}

MySpinner.defaultProps = {
  active: false,
  text: "Chargement ...",
};

MySpinner.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string,
};

export default MySpinner;
