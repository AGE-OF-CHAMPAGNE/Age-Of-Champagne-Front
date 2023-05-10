import React, { useState } from "react";

import PropTypes from "prop-types";
import classes from "./MyHelpClassification.module.css";

function MyHelpClassification({ content }) {
  const [b, setB] = useState(false);

  return (
    <div className={classes.main}>
      <button
        type="button"
        onClick={() => setB(!b)}
        className={`${classes.button} ${b ? "" : "opacity-50"}`}
      >
        <div className={classes.help}>?</div>
      </button>
      <div className={`${classes.popup} ${b ? "" : "d-none"}`}>
        {content}
        <div className={classes.triangle} />
      </div>
    </div>
  );
}

MyHelpClassification.defaultProps = {
  content: "Par defaut",
};

MyHelpClassification.propTypes = {
  content: PropTypes.string,
};

export default MyHelpClassification;
