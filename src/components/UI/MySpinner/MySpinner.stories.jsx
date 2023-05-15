/* eslint-disable */
import React from "react";
import MySpinner from "./MySpinner";

export default {
    title: "Components/MySpinner",
    component: MySpinner,
    argTypes: {},
};

function Template(args) {
    return <MySpinner {...args} />;
}

export const SimpleMySpinner = Template.bind({});
SimpleMySpinner.args = {
  active: true
};
