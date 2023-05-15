/* eslint-disable */
import React from "react";
import MySpinner from "./MySpinner";
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
    title: "Components/MySpinner",
    component: MySpinner,
    decorators: [withRouter],
    argTypes: {},
};

function Template(args) {
    return <MySpinner {...args} />;
}

export const SimpleMySpinner = Template.bind({});
SimpleMySpinner.args = {
  active: true
};
