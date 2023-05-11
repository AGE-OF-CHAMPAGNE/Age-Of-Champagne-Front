/* eslint-disable */
import React from "react";
import MyTimer from "./MyTimer";

export default {
  title: "Components/MyTimer",
  component: MyTimer,
  argTypes: {},
}

function Template(args) {
  return <MyTimer {...args}></MyTimer>
}

export const SimpleMyTimer = Template.bind({});
SimpleMyTimer.args = {};