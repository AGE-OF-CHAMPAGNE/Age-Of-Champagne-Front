/* eslint-disable */
import React from "react";
import MyPopUp from "./MyPopUp.jsx";

export default {
    title: "Components/MyPopUp",
    component: MyPopUp,
    argTypes: {},
};

function Template(args) {
    return <MyPopUp {...args} />;
}

export const SimplyMyPopUp = Template.bind({});
SimplyMyPopUp.args = {
   active: false,
};
