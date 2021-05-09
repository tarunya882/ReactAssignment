import React from 'react';
import SearchBar from './index';
import { ThemeProvider } from '@material-ui/core/styles'
import baseTheme from '../../../themes/index';

export default {
    title: "search bar",
    component: SearchBar
}

const Template = (args) => <ThemeProvider theme={baseTheme}><SearchBar {...args} /></ThemeProvider>

export const tablesearchBar = Template.bind({});
tablesearchBar.args = {
    placeholder: "Search by Table Name"
}

export const menusearchBar = Template.bind({});
menusearchBar.args = {
    placeholder: "Search by Item Name"
}