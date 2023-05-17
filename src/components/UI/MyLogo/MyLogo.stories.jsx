/* eslint-disable */
import React from "react";
import MyLogo from "./MyLogo";

export default {
  title: "Components/MyLogo",
  component: MyLogo,
  argTypes: {},
}

function Template(args) {
  return <MyLogo {...args}></MyLogo>
}

export const SimpleMyLogo = Template.bind({});
SimpleMyLogo.args = {};