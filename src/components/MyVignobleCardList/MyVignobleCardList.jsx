import React from "react";
import PropTypes from "prop-types";
import classes from "./MyVignobleCardList.module.css";
import MyVignobleCard from "../UI/MyVignobleCard/MyVignobleCard";

function MyVignobleCardList({ cards }) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-5">
      {cards.map(({ id, data, name, imgs, color }) => (
        <MyVignobleCard
          className={classes.item}
          key={id}
          sliderName={`name-${id}`}
          data={data}
          name={name}
          imgs={imgs}
          color={color}
        />
      ))}
    </div>
  );
}

MyVignobleCardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      pointOfInterest: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      imgs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          src: PropTypes.string,
          alt: PropTypes.string,
        })
      ),
      color: PropTypes.string,
    })
  ).isRequired,
};

export default MyVignobleCardList;
