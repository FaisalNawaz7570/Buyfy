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
}) => {
  return (
    <button style={{ background, color, ...style }} className="button">
      <Paragraph color fontSize={fontSize} fontWeight={fontWeight}>
        {children}
      </Paragraph>
    </button>
  );
};

export default Button;
