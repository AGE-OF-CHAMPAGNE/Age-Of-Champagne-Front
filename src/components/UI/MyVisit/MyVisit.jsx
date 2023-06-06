import React from "react";
import PropTypes from "prop-types";
import classes from "./MyVisit.module.css";
import MySlider from "../MySlider/MySlider";
import MyButtonLink from "../MyButtonLink/MyButtonLink";

function MyVisit({ benefit, className }) {
  const {
    benefitItem,
    benefitTitle,
    benefitDate,
    benefitDesc,
    slider,
    wrapper,
  } = classes;
  return (
    <div className={`${benefitItem} ${className}`}>
      <div className="d-flex justify-content-between">
        <span className={benefitTitle}>
          CHEZ &quot;{benefit.recipient.name}&quot;
        </span>
        <span className={benefitDate}>{benefit.recipient.date}</span>
      </div>
      <p className={benefitDesc}>{benefit.description}</p>
      <div className={wrapper}>
        <MySlider
          className={slider}
          imgs={[
            { id: 0, src: "src/assets/img/defaultBenefit.png", alt: "" },
            { id: 1, src: "src/assets/img/defaultBenefit.png", alt: "" },
            { id: 2, src: "src/assets/img/defaultBenefit.png", alt: "" },
          ]}
        />
        <MyButtonLink className="text-black" to="/recipient">
          En Savoir +
        </MyButtonLink>
      </div>
    </div>
  );
}

MyVisit.defaultProps = {
  className: "",
};

MyVisit.propTypes = {
  benefit: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.string,
    }),
    description: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

export default MyVisit;
