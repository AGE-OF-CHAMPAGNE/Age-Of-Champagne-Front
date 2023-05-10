import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import classes from "./MyCardsGraphic.module.css";

function MyCardsGraphic() {
  const data = [
    { name: "Group A", value: 24 },
    { name: "Group B", value: 12 },
  ];
  const COLORS = ["#2171AD", "#FABD62"];

  return (
    <div className={classes.main}>
      <div className={classes.map_legend}>
        <div className={classes.legend}>
          <div className={classes.box} id={classes.yellow_box} />
          Cartes déja scannée
        </div>
        <div className={classes.legend}>
          <div className={classes.box} id={classes.blue_box}>
            {" "}
          </div>
          Cartes non scannée
        </div>
      </div>
      <img
        className={classes.img}
        src="/src/assets/img/cards/many_cards.png"
        alt="many game cards"
      />
      <div className={classes.number_div}>
        <div className={classes.number_background} />
        <div className={classes.number}>12/36</div>
      </div>
      <div className={classes.pie}>
        <PieChart width={172} height={172}>
          <Pie
            data={data}
            innerRadius={55}
            outerRadius={85}
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}

export default MyCardsGraphic;
