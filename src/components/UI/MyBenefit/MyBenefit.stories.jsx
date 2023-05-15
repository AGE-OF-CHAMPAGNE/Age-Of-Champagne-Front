/* eslint-disable */
import React from "react";
import MyBenefit from "./MyBenefit.jsx";

export default {
    title: "Components/MyBenefit",
    component: MyBenefit,
    argTypes: {},
};

function Template(args) {
    return <MyBenefit {...args} />;
}

export const SimpleMyBenefit = Template.bind({});
SimpleMyBenefit.args = {
};