import React, { useContext } from "react";
import { PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";
import classes from "./MyCardsGraphic.module.css";
import ThemeContext from "../../../contexts/theme";

function MyCardsGraphic({ data, className }) {
  const COLORS = ["#FABD62", "#2171AD"];
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${classes.main} ${className}`}>
      <div className={classes.map_legend}>
        <div className={classes.legend}>
          <div className={classes.box} id={classes.yellow_box} />
          Cartes déja scannées
        </div>
        <div className={classes.legend}>
          <div className={classes.box} id={classes.blue_box}>
            {" "}
          </div>
          Cartes non scannées
        </div>
      </div>
      <img
        className={classes.img}
        src="/src/assets/img/cards/many_cards.png"
        alt="many game cards"
      />
      <div className={classes.wrapper}>
        <div
          className={`${classes.number_div} ${
            theme === "dark" ? "" : classes.light
          }`}
        >
          {data.scaned}/{data.total}
        </div>
        <div className={classes.pie}>
          <PieChart width={172} height={172}>
            <Pie
              data={[
                { name: "Cartes déja scannées", value: data.scaned },
                {
                  name: "Cartes non scannées",
                  value: data.total - data.scaned,
                },
              ]}
              innerRadius={55}
              outerRadius={85}
              paddingAngle={1}
              dataKey="value"
            >
              <Cell key="cell-0" fill={COLORS[0]} />
              <Cell key="cell-1" fill={COLORS[1]} />
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
}

MyCardsGraphic.defaultProps = {
  className: "",
  data: {
    scaned: 12,
    total: 36,
  },
};

MyCardsGraphic.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    scaned: PropTypes.number,
    total: PropTypes.number,
  }),
};
export default MyCardsGraphic;
