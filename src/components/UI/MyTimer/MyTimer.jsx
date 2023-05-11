import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./MyTimer.module.css";

function MyTimer({ date }) {
  const now = new Date();
  let totalSec = (date - now) / 1000;
  const [nbDays, setNbDays] = useState(Math.floor(totalSec / (60 * 60 * 24)));
  const [nbHours, setNbHours] = useState(
    Math.floor((totalSec - nbDays * 60 * 60 * 24) / (60 * 60))
  );
  const [nbMin, setNbMin] = useState(
    Math.floor((totalSec - (nbDays * 60 * 60 * 24 + nbHours * 60 * 60)) / 60)
  );
  const [nbSec, setNbSec] = useState(
    Math.floor(
      totalSec - (nbDays * 60 * 60 * 24 + nbHours * 60 * 60 + nbMin * 60)
    )
  );
  let inter;
  function Timer() {
    if (totalSec > 0) {
      totalSec -= 1;
      let calcNbSec = Math.floor(
        totalSec - (nbDays * 60 * 60 * 24 + nbHours * 60 * 60 + nbMin * 60)
      );
      if (calcNbSec === -1) {
        calcNbSec = 59;
      }
      setNbDays(Math.floor(totalSec / (60 * 60 * 24)));
      setNbHours(Math.floor((totalSec - nbDays * 60 * 60 * 24) / (60 * 60)));
      setNbMin(
        Math.floor(
          (totalSec - (nbDays * 60 * 60 * 24 + nbHours * 60 * 60)) / 60
        )
      );
      setNbSec(calcNbSec);
    } else {
      clearTimeout(inter);
    }
  }

  setTimeout(() => {
    Timer();
  }, 1000);
  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <div className={`${classes.info} ${classes}`}> JOURS </div>
        <div className={classes.info}> HEURES </div>
        <div className={classes.info}> MINUTES </div>
        <div className={classes.info}> SECONDES </div>
      </div>

      <div className={classes.timer}>
        <div className={classes.info}> {nbDays} </div>
        <div className={classes.bar} />
        <div className={classes.info}> {nbHours} </div>
        <div className={classes.bar} />
        <div className={classes.info}> {nbMin} </div>
        <div className={classes.bar} />
        <div className={classes.info}>{nbSec}</div>
      </div>
    </div>
  );
}

MyTimer.defaultProps = {
  date: new Date("2023-12-31T23:59:59"),
};

MyTimer.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default MyTimer;
