/* eslint-disable */
import React from "react";
import MyButton from "./MyButton.jsx";
import "./MyButton.module.css"
import "/src/main.css";

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
    children: "S'inscrire",
    onClick: () => {console.log("INSCRIPTION")}
};

export const BuyButton = Template.bind({});
BuyButton.args = {
    children: "Acheter",
    color: "#4CAF50"
};

export const MoreAboutButton = Template.bind({});
MoreAboutButton.args = {
    children: "en savoir +",
    color: "#EFE075"
};


