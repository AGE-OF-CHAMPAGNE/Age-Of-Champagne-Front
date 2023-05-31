import React from "react";
import classes from "./Error.module.css";

function Error() {
  const {
    error,
    number,
    number_1: number1,
    number_2: number2,
    number_3: number3,
    "error-name": errorName,
  } = classes;
  return (
    <div className={error}>
      <h1>
        <span className={`${number} ${number1}`}>4</span>
        <span className={`${number} ${number2}`}>0</span>
        <span className={`${number} ${number3}`}>4</span>
      </h1>
      <h2 className={errorName}>Page non trouvée</h2>
    </div>
  );
}

export default Error;
