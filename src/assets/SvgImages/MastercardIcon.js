import React from "react";
import { Svg, Circle, Text } from "react-native-svg";

const MastercardIcon = ({ width = 50, height = 50 }) => (
  <Svg width={width} height={height} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Left Circle (Red) */}
    <Circle cx="45" cy="40" r="20" fill="#EB001B" />
    {/* Right Circle (Yellow) */}
    <Circle cx="75" cy="40" r="20" fill="#F79E1B" />
    {/* Overlapping Area (Orange) */}
    <Circle cx="60" cy="40" r="20" fill="#FF5F00" />
    {/* Mastercard Text */}
    <Text
      x="50%"
      y="70"
      textAnchor="middle"
      fill="#000000" // Black text
      fontSize="10"
      fontWeight="bold"
    >
      Mastercard
    </Text>
  </Svg>
);

export default MastercardIcon;
