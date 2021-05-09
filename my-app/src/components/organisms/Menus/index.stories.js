import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../themes/index";
import MenuList from ".";

const MenuListComponent={
    title: "MenuList",
    component: MenuList,
};

const Template=(args)=>(
    <ThemeProvider theme={baseTheme}>
        <MenuList {...args}></MenuList>
    </ThemeProvider>
);

// const menuList=['Spring Rolls Rs-200', 'Chicken Biryani Rs-200', 'Plain Rice Rs-100','Finger Chicken Rs-250'];
const menuList1=[{menu:"Spring Rolls Rs-200",image:"https://cdn.loveandlemons.com/wp-content/uploads/2013/10/spring-rolls.jpg"}, {menu:"Chicken Biryani Rs-200",image:"https://content3.jdmagicbox.com/comp/mumbai/i9/022pxx22.xx22.190125122151.n8i9/catalogue/persiana-hyderabadi-biryani-thane-west-thane-hyderabadi-restaurants-nszt2i18q5.jpg"}, {menu:"Dessert Rs-300",image:"https://files.heftycdn.com/wp-content/uploads/2019/04/c7f06b4bce72dbd0b84240982f2166dc-800x457.jpg"}];
export const RestaurantMenu = Template.bind({});
RestaurantMenu.args = {menuList:menuList1};

export default MenuListComponent;
