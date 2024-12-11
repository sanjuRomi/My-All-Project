import * as React from "react";
import Svg, { Rect, Circle } from "react-native-svg";

function RedCar(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={200}
      height={100}
      viewBox="0 0 200 100"
      {...props}
    >
      {/* Body */}
      <Rect x={20} y={40} width={160} height={40} rx={10} ry={10} fill="#E53E3E" />
      {/* Windows */}
      <Rect x={40} y={30} width={50} height={30} rx={5} ry={5} fill="#D0E8F2" />
      <Rect x={110} y={30} width={50} height={30} rx={5} ry={5} fill="#D0E8F2" />
      {/* Wheels */}
      <Circle cx={50} cy={90} r={10} fill="#2A2A2A" />
      <Circle cx={150} cy={90} r={10} fill="#2A2A2A" />
    </Svg>
  );
}

export default RedCar;
