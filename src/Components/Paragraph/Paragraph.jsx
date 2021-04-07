import React from "react";
import "./Paragraph.css";

var fontWeightEstimater = (weightStr) => {
  switch (weightStr) {
    case "light":
      return 300;
    case "regular":
      return 400;
    case "semi-bold":
      return 600;
    case "bold":
      return 700;
    case "extra-bold":
      return 800;

    default:
      return 400;
  }
};

const Paragraph = ({
  children,
  fontSize = "16",
  fontWeight = "bold",
  color = "black",
  style = {},
  ...restProps
}) => {
  var fontWeightValue = fontWeightEstimater(fontWeight);
  var fontSizeValue = fontSize/10;
  return (
    <div
    {...restProps}
      className="paragraph"
      style={{
        fontWeight: fontWeightValue,
        color,
        fontSize: `${fontSizeValue}em`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Paragraph;
