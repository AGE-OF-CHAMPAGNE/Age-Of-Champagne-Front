/* eslint-disable */
import React from "react";
import MyInstruction from "./MyInstruction";

export default {
    title: "Components/MyInstruction",
    component: MyInstruction,
    argTypes: {},
};

function Template(args) {
    return <MyInstruction {...args} />;
}

export const SimpleMyInstruction = Template.bind({});
SimpleMyInstruction.args = {
    title: "Commencez le jeu",
    description:
        "Après avoir fait l’aquisition du jeu munissez-vous de votre téléphone ainsi que de la boite du jeu",
    side: "right"
};
