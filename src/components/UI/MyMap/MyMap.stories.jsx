/* eslint-disable */
import React from "react";
import MyMap from "./MyMap";

export default {
    title: "Components/MyMap",
    component: MyMap,
    argTypes: {},
};

function Template(args) {
    return <MyMap {...args} />;
}

export const SimpleMyMap = Template.bind({});
SimpleMyMap.args = {
};
