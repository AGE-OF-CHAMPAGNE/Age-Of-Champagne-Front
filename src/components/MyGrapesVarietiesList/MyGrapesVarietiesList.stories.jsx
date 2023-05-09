/* eslint-disable */
import React from "react";
import MyGrapesVarietiesList from "./MyGrapesVarietiesList";

export default {
    title: "Components/MyGrapesVarietiesList",
    component: MyGrapesVarietiesList,
    argTypes: {},
}

function Template(args) {
    return <MyGrapesVarietiesList {...args}></MyGrapesVarietiesList>
}

export const SimpleMyGrapesVarieties = Template.bind({});
SimpleMyGrapesVarieties.args = {};
