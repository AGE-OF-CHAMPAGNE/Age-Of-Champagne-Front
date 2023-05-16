/* eslint-disable */
import React from "react";
import MyNavbar from "./MyNavbar";

export default {
    title: "Components/MyNavbar",
    component: MyNavbar,
    argTypes: {},
};

function Template(args) {
    return <MyNavbar {...args} />;
}

export const SimpleMyNavbar = Template.bind({});
SimpleMyNavbar.args = {};
