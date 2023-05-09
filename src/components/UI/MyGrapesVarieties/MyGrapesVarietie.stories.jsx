/* eslint-disable */
import React from "react";
import MyGrapesVarieties from "./MyGrapesVarieties";

export default {
    title: "Components/MyGrapesVarieties",
    component: MyGrapesVarieties,
    argTypes: {},
}

function Template(args) {
    return <MyGrapesVarieties {...args}></MyGrapesVarieties>
}

export const GoldMyGrapesVarieties = Template.bind({});
GoldMyGrapesVarieties.args = {color: "250,189,40"};

export const BlueMyGrapesVarieties = Template.bind({});
BlueMyGrapesVarieties.args = {color:"54,124,192"};

export const BlackMyGrapesVarieties = Template.bind({});
BlackMyGrapesVarieties.args = {color: "0,0,0"};

export const RedMyGrapesVarieties = Template.bind({});
RedMyGrapesVarieties.args = {color: "255, 0, 0"};

