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
  id: 1
};
