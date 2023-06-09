import React, { useState } from "react";
import PropTypes from "prop-types";
import classes from "./MySwitcher.module.css";

function MySwitcher({ active, handleOnChange, children }) {
  const [isChecked, setIsChecked] = useState(active);
  const { span, input } = classes;
  return (
    <div className="d-flex gap-2">
      <div className="form-check form-switch">
        <input
          className={`form-check-input ${input}`}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            handleOnChange(e);
            setIsChecked(e.target.checked);
          }}
          role="switch"
          id={children}
        />
      </div>
      <span className={span}>{children}</span>
    </div>
  );
}
MySwitcher.defaultProps = {
  active: false,
  handleOnChange: () => {},
  children: "switcher",
};
MySwitcher.propTypes = {
  active: PropTypes.bool,
  handleOnChange: PropTypes.func,
  children: PropTypes.string,
};
export default MySwitcher;
