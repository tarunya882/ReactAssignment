import React from "react";
import Table from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../themes/index";


const TableComponent={
    title: "Table",
    component: Table,
};

const Template=(args)=>(
    <ThemeProvider theme={baseTheme}>
        <Table {...args}></Table>
    </ThemeProvider>
);

export const Table1 = Template.bind({});
Table1.args = {table:"Table1",
image: "https://comps.canstockphoto.com/wooden-spoon-and-fork-on-wood-table-stock-image_csp63269065.jpg",
};

export default TableComponent;

