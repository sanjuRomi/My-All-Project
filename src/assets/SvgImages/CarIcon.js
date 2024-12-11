import React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

const NewCarIcon = (props) => {
  const { fill = "#000", width = 50, height = 50 } = props;

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={width} height={height}>
      {/* Car Body */}
      <Rect x="10" y="40" width="80" height="30" rx="5" ry="5" fill="#FF8C00" stroke="#000" strokeWidth="2"/>
      
      {/* Car Windows */}
      <Rect x="25" y="45" width="20" height="15" fill="#ADD8E6" stroke="#000" strokeWidth="1"/>
      <Rect x="55" y="45" width="20" height="15" fill="#ADD8E6" stroke="#000" strokeWidth="1"/>
      
      {/* Wheels */}
      <Circle cx="25" cy="75" r="8" fill="black"/>
      <Circle cx="75" cy="75" r="8" fill="black"/>
      
      {/* Front Bumper */}
      <Rect x="10" y="40" width="80" height="5" fill="#8B0000" stroke="#000" strokeWidth="1"/>
      
      {/* Rear Bumper */}
      <Rect x="10" y="70" width="80" height="5" fill="#8B0000" stroke="#000" strokeWidth="1"/>
      
      {/* Car Roof */}
      <Rect x="20" y="35" width="60" height="5" fill="#FF8C00" stroke="#000" strokeWidth="2"/>
    </Svg>
  );
};

export default NewCarIcon;
