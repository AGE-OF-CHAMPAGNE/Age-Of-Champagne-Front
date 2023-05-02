/* eslint-disable */
import React from "react";
import MyCard from "./MyCard";

export default {
    title: "Components/MyCard",
    component: MyCard,
    argTypes: {},
};

function Template(args) {
    return <MyCard {...args} />;
}

export const SimpleMyCard = Template.bind({});
SimpleMyCard.args = {
    img: { src: "/src/assets/img/storybook/BETHON 1.png", alt: "BETHON"}
};
