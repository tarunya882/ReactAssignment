import React from "react";
import Typography from ".";

import { ThemeProvider } from "@material-ui/core/styles";
import baseTheme from "../../../themes/index";

const TypographyComponent = {
  title: "Typography",
  component: Typography,
};

const Template = ({ children, ...args }) => (
  <ThemeProvider theme={baseTheme}>
    <Typography {...args}>{children}</Typography>
  </ThemeProvider>
);


export const Title = Template.bind({});
Title.args = {
  children: "Welcome To ZeMoSo Restaurant",
  variant: "title",
};



export default TypographyComponent;