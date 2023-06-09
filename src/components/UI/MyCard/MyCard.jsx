import React, { useState } from "react";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import classes from "./MyCard.module.css";
import MySpinner from "../MySpinner/MySpinner";

function MyCard({ onClick, className, style, img }) {
  const { "colored-zone": coloredZone, card } = classes;
  const [loaded, setLoaded] = useState(false);
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

  const handleImageLoad = () => {
    setLoaded(true);
  };

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
      <LazyLoad offset={200} once placeholder={<MySpinner active />}>
        <img
          className={`${coloredZone} lazy-image ${loaded ? "loaded" : ""}`}
          src={img.src}
          alt={img.alt}
          onLoad={handleImageLoad}
        />
      </LazyLoad>
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
