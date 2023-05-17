import React, { useState } from "react";
import PropTypes from "prop-types";

function MySlider({ name, className, imgs }) {
  const [imgLoad, setImgLoad] = useState(0);

  const handleImageLoad = () => {
    setImgLoad((prevImgLoad) => prevImgLoad + 1);
  };

  return (
    <div
      id={name}
      className={`carousel slide ${className}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {imgs.map(({ id, src, alt }, index) => (
          <div
            key={id}
            className={`carousel-item ${index === 0 ? "active" : ""} `}
          >
            <img
              onLoad={handleImageLoad}
              src={src}
              className={`d-block w-100 lazy-image ${
                imgLoad === imgs.length ? "loaded" : ""
              }`}
              alt={alt}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${name}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${name}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
MySlider.defaultProps = {
  name: "slider",
  className: "",
};

MySlider.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      src: PropTypes.string,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default MySlider;
