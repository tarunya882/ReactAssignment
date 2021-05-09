import React from "react";
import Menu from ".";
import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../themes/index";

const MenuComponent={
    title: "Menu",
    component: Menu,
};

const Template=(args)=>(
    <ThemeProvider theme={baseTheme}>
        <Menu {...args}></Menu>
    </ThemeProvider>
);

export const MenuItem = Template.bind({});
MenuItem.args = {menu:"Spring Rolls Rs 200",
 image:"https://cdn.loveandlemons.com/wp-content/uploads/2013/10/spring-rolls.jpg",
};

export default MenuComponent;

