import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../themes/index";
import Tables from ".";

const TablesComponent={
    title: "Tables",
    component: Tables,
};

const Template=(args)=>(
    <ThemeProvider theme={baseTheme}>
        <Tables {...args}></Tables>
    </ThemeProvider>
);

const tableList= [{table:"Table1",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}, {table:"Table2",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}, {table:"Table3",image:"https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg"}];
export const RestaurantTables = Template.bind({});
RestaurantTables.args = {tableList:tableList};

export default TablesComponent;
