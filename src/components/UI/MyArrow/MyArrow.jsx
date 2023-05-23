import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyButton from "../MyButton/MyButton";
import classes from "./MyArrow.module.css";

function MyArrow() {
  const navigate = useNavigate();

  const goBack = useCallback(() => navigate(-1), []);

  return (
    <MyButton onClick={goBack} className={classes.button} color="transparent">
      <FontAwesomeIcon
        icon={faArrowLeft}
        size="xl"
        style={{ color: "#ffffff" }}
      />
    </MyButton>
  );
}

export default MyArrow;
