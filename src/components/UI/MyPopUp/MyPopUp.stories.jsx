/* eslint-disable */
import React, {useState} from "react";
import MyPopUp from "./MyPopUp.jsx";
import "./MyPopUp.module.css"
import "/src/main.css";

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
