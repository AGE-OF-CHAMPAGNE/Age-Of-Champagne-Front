/* eslint-disable */
import React from "react";
import MyVignobleCard from "./MyVignobleCard.jsx";

export default {
    title: "Components/MyVignobleCard",
    component: MyVignobleCard,
    argTypes: {},
};

function Template(args) {
    return <MyVignobleCard {...args} />;
}

export const SimplyMyVignobleCard = Template.bind({});
SimplyMyVignobleCard.args = {
    pointOfInterest:["Point d'interet","Point d'interet","Point d'interet","Point d'interet"],
    color: "#F8E977"
};
