/* eslint-disable */
import React from "react";
import MySpecificationList from "./MySpecificationsList.jsx";
export default {
    title: "Components/MySpecificationList",
    component: MySpecificationList,
    argTypes: {},
}

function Template(args) {
    return <MySpecificationList {...args}></MySpecificationList>
}

export const SimpleMySpecificationList = Template.bind({});
SimpleMySpecificationList.args = {};