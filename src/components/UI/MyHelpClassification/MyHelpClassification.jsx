import React, { useState } from "react";

import PropTypes from "prop-types";
import classes from "./MyHelpClassification.module.css";

function MyHelpClassification({ content }) {
  const [b, setB] = useState(false);

  function DisplayOrNot() {
    if (b == false) {
      document.getElementById("popup").style.display = "block";
      setB(true);
    } else {
      document.getElementById("popup").style.display = "none";
      setB(false);
    }
  }

  return (
    <div className={classes.main}>
      <button type="button" onClick={DisplayOrNot} className={classes.button}>
        <div className={classes.help}>?</div>
      </button>
      <div className={classes.popup} id="popup">
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
