/* eslint-disable */
import React from "react";
import MyTitle from "./MyTitle";

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
