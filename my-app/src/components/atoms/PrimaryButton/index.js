import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

const ButtonComponent = ({ backgroundColor, size, label, ...props })  => (
  <Button
    variant="contained"
    color="primary"
    onClick={props.onClick}
    size="medium"
    style={backgroundColor && { backgroundColor }}
  >
    {props.title}
  </Button>
);

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
 
};

export default ButtonComponent;