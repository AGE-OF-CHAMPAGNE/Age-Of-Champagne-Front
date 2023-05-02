/* eslint-disable */
import React from "react";
import MySpecification from "./MySpecification";

export default {
    title: "Components/MySpecification",
    component: MySpecification,
    argTypes: {},
}

function Template(args) {
    return <MySpecification {...args}></MySpecification>
}

export const SimpleMySpecification = Template.bind({});
SimpleMySpecification.args = {};