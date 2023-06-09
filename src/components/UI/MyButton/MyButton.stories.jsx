/* eslint-disable */
import React from "react";
import MyButton from "./MyButton.jsx";

export default {
    title: "Components/MyButton",
    component: MyButton,
    argTypes: {},
};

function Template(args) {
    return <MyButton {...args} />;
}

export const SignInButton = Template.bind({});
SignInButton.args = {
    onClick: () => console.log("INSCRIPTION"),
    children: "S'inscrire",
};

export const BuyButton = Template.bind({});
BuyButton.args = {
    onClick: () => console.log("buy"),
    children: "Acheter",
    color: "#4CAF50"
};

export const MoreAboutButton = Template.bind({});
MoreAboutButton.args = {
    onClick: () => console.log("en savoir +"),
    children: "en savoir +",
    color: "#EFE075"
};


