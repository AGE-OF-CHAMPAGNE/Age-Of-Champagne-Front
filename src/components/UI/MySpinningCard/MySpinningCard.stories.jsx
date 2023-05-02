/* eslint-disable */
import React from "react";
import MySpinningCard from "./MySpinningCard";
import "./MySpinningCard";
import "/src/main.css";

export default {
  title: "Components/MySpinningCard",
  component: MySpinningCard,
  argTypes: {},
};

function Template(args) {
  return <MySpinningCard {...args} />;
}

export const SimplyMySpinningCard = Template.bind({});
SimplyMySpinningCard.args = {
  mycard: {
    img: { src: "/src/assets/img/storybook/BETHON 1.png", alt: "BETHON"}
  },
  color: "#EFE075"
};
