import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Home from '.';
import baseTheme from '../../../themes/index';

export default{
    title: "Home Template",
    component: Home
}

const tableListData= [{table:"Table1",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}, {table:"Table2",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}, {table:"Table3",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}];
const menuListData=[{menu:"Spring Rolls Rs-200",image:"https://cdn.loveandlemons.com/wp-content/uploads/2013/10/spring-rolls.jpg"}, {menu:"Chicken Biryani Rs-200",image:"https://content3.jdmagicbox.com/comp/mumbai/i9/022pxx22.xx22.190125122151.n8i9/catalogue/persiana-hyderabadi-biryani-thane-west-thane-hyderabadi-restaurants-nszt2i18q5.jpg"}, {menu:"Dessert Rs-300",image:"https://files.heftycdn.com/wp-content/uploads/2019/04/c7f06b4bce72dbd0b84240982f2166dc-800x457.jpg"}];

const Template = (args) => <ThemeProvider theme={baseTheme}> <Home {...args}/> </ThemeProvider>
export const home = Template.bind({});
home.args = {
    tableList: tableListData,
    menuList: menuListData,
};