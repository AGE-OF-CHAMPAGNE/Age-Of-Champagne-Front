/* eslint-disable */
import React from "react";
import MyPageTitle from "./MyPageTitle";

export default {
    title: "Components/MyPageTitle",
    component: MyPageTitle,
    argTypes: {},
};

function Template(args) {
    return <MyPageTitle {...args} />;
}

export const SimplyMyPageTitle = Template.bind({});
SimplyMyPageTitle.args = {
  children: "My title"
};
