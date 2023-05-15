import React from "react";
import PropTypes from "prop-types";
import classes from "./MyBenefit.module.css";

function MyBenefit({
  startDate,
  endDate,
  recipientName,
  title,
  description,
  img,
}) {
  const startTab = [
    startDate.getDate(),
    startDate.getMonth(),
    startDate.getFullYear(),
  ];
  const endTab = [endDate.getDate(), endDate.getMonth(), endDate.getFullYear()];
  const month = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.date}>
          <article>
            Du {startTab[0]} {month[startTab[1]]} {startTab[2]}
          </article>
          <article>
            Au {endTab[0]} {month[endTab[1]]} {endTab[2]}
          </article>
        </div>
        <div className={classes.name}>{recipientName}</div>
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.desc}>{description}</div>
      <img className={classes.img} src={img} alt="vignoble" />
    </div>
  );
}

MyBenefit.defaultProps = {
  startDate: new Date("2022-10-22"),
  endDate: new Date("2023-10-22"),
  recipientName: "Nom du Vignerons",
  title:
    "Offre spéciale pour les gourmets: dégustation de vins et d'amuse-gueules exclusifs",
  description:
    "Nous voulons que nos clients fidèles se sentent spéciaux, c'est pourquoi nous proposons de participer à notre programme de club. En tant que membre du club, vous bénéficierez de réductions exclusives sur nos vins, ainsi que d'invitations à des événements spéciaux.\n" +
    "\n" +
    "Nous voulons que nos clients fidèles se sentent spéciaux, c'est pourquoi nous proposons de participer à notre programme de club. En tant que membre du club, vous bénéficierez de réductions exclusives sur nos vins, ainsi que d'invitations à des événements spéciaux.",
  img: "src/assets/img/defaultBenefit.png",
};

MyBenefit.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  recipientName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default MyBenefit;
