/* eslint-disable */
import React from "react";
import MyMap from "./MyMap";
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
    title: "Components/MyMap",
    component: MyMap,
    decorators: [withRouter],
    argTypes: {},
};

function Template(args) {
    return <MyMap {...args} />;
}

export const SimpleMyMap = Template.bind({});
SimpleMyMap.args = {
};
