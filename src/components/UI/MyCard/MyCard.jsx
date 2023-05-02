import React from "react";
import PropTypes from "prop-types";
import classes from "./MyCard.module.css";

const { "colored-zone": coloredZone, card } = classes;

function MyCard({ className, style, img }) {
  return (
    <div className={`${card} ${className}`} style={style}>
      <img className={coloredZone} src={img.src} alt={img.alt} />
    </div>
  );
}

MyCard.defaultProps = {
  className: "",
  style: {},
};

MyCard.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape,
  img: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
    .isRequired,
};

export default MyCard;
