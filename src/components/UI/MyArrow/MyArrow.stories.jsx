/* eslint-disable */
import React from "react";
import MyArrow from "./MyArrow.jsx";
export default {
    title: "Components/MyArrow",
    component: MyArrow,
    argTypes: {},
}

function Template(args) {
    return <MyArrow {...args}></MyArrow>
}

export const SimpleMyArrow = Template.bind({});
SimpleMyArrow.args = {};