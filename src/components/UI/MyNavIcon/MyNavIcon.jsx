import React from "react";
import { Link, useMatch } from "react-router-dom";
import PropTypes from "prop-types";

function MyNavIcon({ imgActive, imgDisabled, to }) {
  const match = useMatch(to);

  return (
    <Link to={to}>
      <img
        className={match ? "d-none" : ""}
        src={imgDisabled.src}
        alt={imgDisabled.alt}
      />
      <img
        className={match ? "" : "d-none"}
        src={imgActive.src}
        alt={imgActive.alt}
      />
    </Link>
  );
}

MyNavIcon.propTypes = {
  imgActive: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
    .isRequired,
  imgDisabled: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
    .isRequired,
  to: PropTypes.string.isRequired,
};

export default MyNavIcon;
