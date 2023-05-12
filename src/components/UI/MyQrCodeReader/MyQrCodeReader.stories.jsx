/* eslint-disable */
import React from "react";
import MyQrCodeReader from "./MyQrCodeReader.jsx";

export default {
    title: "Components/MyQrCodeReader",
    component: MyQrCodeReader,
    argTypes: {},
};

function Template(args) {
    return <MyQrCodeReader {...args} />;
}

export const SimplyMyQrCodeReader = Template.bind({});
SimplyMyQrCodeReader.args = {
    active: false,
};
