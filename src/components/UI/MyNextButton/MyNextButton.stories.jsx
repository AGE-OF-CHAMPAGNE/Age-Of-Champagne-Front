/* eslint-disable */
import React from "react";
import MyNextButton from "./MyNextButton";

export default {
    title: "Components/MyNextButton",
    component: MyNextButton,
    argTypes: {},
};

function Template(args) {
    return <MyNextButton {...args} />;
}

export const SimplyMyNextButton = Template.bind({});
SimplyMyNextButton.args = {
  to: "/", className: "", color: "black",
};
