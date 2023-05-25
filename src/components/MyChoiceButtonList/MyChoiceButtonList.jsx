import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./MyChoiceButtonList.module.css";

function MyChoiceButtonList({ buttons, className, activeDefault }) {
  const [activeId, setActiveId] = useState(activeDefault);
  const { choiceBtn, active, wrapper } = classes;
  return (
    <div className={`${className} ${wrapper}`}>
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => {
            setActiveId(btn.id);
            btn.onClick();
          }}
          type="button"
          className={`${choiceBtn} ${activeId === btn.id ? active : ""}`}
        >
          {btn.children}
        </button>
      ))}
    </div>
  );
}

MyChoiceButtonList.defaultProps = {
  className: "",
};

MyChoiceButtonList.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
      ]),
      onClick: PropTypes.func,
    })
  ).isRequired,
  className: PropTypes.string,
  activeDefault: PropTypes.number.isRequired,
};

export default MyChoiceButtonList;
