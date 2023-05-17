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
    pointOfInterest:["Point d'interet 1","Point d'interet 2","Point d'interet 3","Point d'interet 4"],
    color: "#F8E977"
};
