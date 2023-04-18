import React from "react";
import MyTitle from "./MyTitle";
import "./MyTitle.module.css";
import "/src/main.css";

export default {
  title: "Components/MyTitle",
  component: MyTitle,
  argTypes: {},
};

function Template(args) {
  return <MyTitle {...args} />;
}

export const SimplyMyTitle = Template.bind({});
SimplyMyTitle.args = {
  children: "This is Title",
};
