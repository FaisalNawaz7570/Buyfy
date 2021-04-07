import React from "react";
import "./Button.css";
import Paragraph from "./../Paragraph/Paragraph";

const Button = ({
  children,
  background = "purple",
  fontSize,
  fontWeight,
  color = "white",
  style = {},
  disabled = false,
  ...restProps
}) => {
  return (
    <button disabled={disabled} {...restProps} style={{ background: disabled ? "lightgrey" : background, color, ...style }} className="button">
      <Paragraph style={{textDecoration: disabled ? "Line-through" : ""}} color={disabled ? "black" : color} fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Paragraph>
    </button>
  );
};

export default Button;
