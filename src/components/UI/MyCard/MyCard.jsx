import React from "react";
import PropTypes from "prop-types";
import classes from "./MyCard.module.css";

function MyCard({ onClick, className, style, img }) {
  const { "colored-zone": coloredZone, card } = classes;
  let clickProps = {
    role: "",
    tabIndex: "",
    ariaHidden: true,
    onKeyDown: () => {},
    onClick: () => {},
  };
  if (onClick) {
    clickProps = {
      role: "button",
      tabIndex: "0",
      ariaHidden: false,
      onKeyDown: onClick,
      onClick,
    };
  }
  return (
    <div
      role="button"
      tabIndex={clickProps.tabIndex}
      onKeyDown={clickProps.onKeyDown}
      onClick={clickProps.onKeyDown}
      aria-hidden={clickProps.ariaHidden}
      className={`${card} ${className}`}
      style={style}
    >
      <img className={coloredZone} src={img.src} alt={img.alt} />
    </div>
  );
}

MyCard.defaultProps = {
  className: "",
  style: {},
  onClick: null,
};

MyCard.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({
    transition: PropTypes.string,
    transform: PropTypes.string,
    zIndex: PropTypes.string,
  }),
  onClick: PropTypes.func,
  img: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
    .isRequired,
};

export default MyCard;
