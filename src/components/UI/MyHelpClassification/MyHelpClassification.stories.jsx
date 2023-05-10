/* eslint-disable */
import React from "react";
import MyHelpClassification from "./MyHelpClassification";

export default {
  title: "Components/MyHelpClassification",
  component: MyHelpClassification,
  argTypes: {},
}

function Template(args) {
  return <MyHelpClassification {...args}></MyHelpClassification>
}

export const SimpleMyHelpClassification = Template.bind({});
SimpleMyHelpClassification.args = {content:"La classification des crus se réfère à la classification des vins en fonction de leur qualité, de leur origine géographique ou de leur style de production."};

export const DefaultMyHelpClassification = Template.bind({});
DefaultMyHelpClassification.args = {};