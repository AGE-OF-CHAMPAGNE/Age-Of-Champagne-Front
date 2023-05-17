/* eslint-disable */
import React from "react";
import MyVignobleCardList from "./MyVignobleCardList.jsx";
export default {
    title: "Components/MyVignobleCardList",
    component: MyVignobleCardList,
    argTypes: {},
}

function Template(args) {
    return <MyVignobleCardList {...args}></MyVignobleCardList>
}

export const SimpleMyVignobleCardList = Template.bind({});
SimpleMyVignobleCardList.args = {
  cards: [{
    id: 0,
    color: "#F8E977"
  },
  {
    id: 1,
    color: "#F8E977"
  },
  {
    id: 2,
    color: "#F8E977"
  }]
};