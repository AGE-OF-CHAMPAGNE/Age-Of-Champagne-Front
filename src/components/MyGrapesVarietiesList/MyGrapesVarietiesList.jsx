import React from "react";
import MyGrapesVarieties from "../UI/MyGrapesVarieties/MyGrapesVarieties";
import classes from "./MyGrapesVarietiesList.module.css";

function MyGrapesVarietiesList() {
  return (
    <div className={classes.list}>
      <MyGrapesVarieties
        title="Chardonnay"
        imgPath="/src/assets/img/icons/goldGrape.png"
        color="250,189,40"
      />
      <MyGrapesVarieties
        title="Meunier"
        imgPath="/src/assets/img/icons/purpleGrape.png"
        color="54,124,192"
      />
      <MyGrapesVarieties
        title="Pinot Noir"
        imgPath="/src/assets/img/icons/blackGrape.png"
        color="255, 2555,255"
      />
    </div>
  );
}

export default MyGrapesVarietiesList;
