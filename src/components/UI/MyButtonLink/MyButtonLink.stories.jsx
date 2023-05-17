/* eslint-disable */
import React from "react";
import MyButtonLink from "./MyButtonLink.jsx";

export default {
    title: "Components/MyButtonLink",
    component: MyButtonLink,
    argTypes: {},
};

function Template(args) {
    return <MyButtonLink {...args} />;
}

export const SignInMyButtonLink = Template.bind({});
SignInMyButtonLink.args = {
    to: "/",
    children: "S'inscrire",
};

export const BuyMyButtonLink = Template.bind({});
BuyMyButtonLink.args = {
    to: "/",
    children: "Acheter",
    color: "#4CAF50"
};

export const MoreMyButtonLink = Template.bind({});
MoreMyButtonLink.args = {
  to: "/",
  children: "en savoir +",
  color: "#EFE075"
};
