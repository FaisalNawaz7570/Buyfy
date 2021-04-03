import React from "react";
import "./Header.css";

var fontWeightEstimater = (weightStr) => {
  switch (weightStr) {
    case "light":
      return 300;
    case "regular":
      return 400;
    case "semiBold":
      return 500;
    case "bold":
      return 700;
    case "extraBold":
      return 900;

    default:
      return 400;
  }
};

const Header = ({
  children,
  fontSize = "16",
  fontWeight = "bold",
  color = "black",
  style = {},
}) => {
  var fontWeightValue = fontWeightEstimater(fontWeight);
  var fontSizeValue = fontSize/10;
  return (
    <div
      className="header"
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

export default Header;
