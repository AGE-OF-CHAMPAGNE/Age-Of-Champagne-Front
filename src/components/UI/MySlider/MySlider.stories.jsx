/* eslint-disable */
import React from "react";
import MySlider from "./MySlider";

export default {
    title: "Components/MySlider",
    component: MySlider,
    argTypes: {},
};

function Template(args) {
    return <MySlider {...args} />;
}

export const SimplyMySlider = Template.bind({});
SimplyMySlider.args = {
  imgs: [
    { id: 0, src: "src/assets/img/defaultBenefit.png", alt: "" },
    { id: 1, src: "src/assets/img/defaultBenefit.png", alt: "" },
    { id: 2, src: "src/assets/img/defaultBenefit.png", alt: "" },
  ],
};
