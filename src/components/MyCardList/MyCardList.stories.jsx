/* eslint-disable */
import React from "react";
import { withRouter } from 'storybook-addon-react-router-v6';
import MyCardList from "./MyCardList.jsx";
import "./MyCardList.module.css"
import "/src/main.css";

export default {
    title: "Components/MyCardList",
    component: MyCardList,
    decorators: [withRouter],
    argTypes: {},
};

function Template(args) {
    return <MyCardList {...args} />;
}

export const SimplyMyCardList = Template.bind({});
SimplyMyCardList.args = {
   list: [
    {
      id: 0,
      img: {
        src: "/src/assets/img/storybook/BETHON 1.png",
        alt: "BETHON",
      },
    },
    {
      id: 1,
      img: {
        src: "/src/assets/img/storybook/BETHON 1.png",
        alt: "BETHON",
      },
    },
    {
      id: 2,
      img: {
        src: "/src/assets/img/storybook/BETHON 1.png",
        alt: "BETHON",
      },
    },
    {
      id: 3,
      img: {
        src: "/src/assets/img/storybook/BETHON 1.png",
        alt: "BETHON",
      },
    },
    {
      id: 4,
      img: {
        src: "/src/assets/img/storybook/BETHON 1.png",
        alt: "BETHON",
      },
    },
    {
      id: 5,
      img: {
        src: "/src/assets/img/storybook/BETHON 1.png",
        alt: "BETHON",
      },
    },
    {
      id: 6,
      img: {
        src: "/src/assets/img/storybook/BETHON 1.png",
        alt: "BETHON",
      },
    },
  ],
};
