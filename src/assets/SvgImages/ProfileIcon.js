import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

function ProfileIcon(props) {
  return (
    <Svg
      height="21px"
      viewBox="0 0 20 21"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Head */}
      <Circle 
        cx="10" 
        cy="6" 
        r="4" 
        fill={props?.fill || '#000'} 
        opacity={0.9} 
      />

      {/* Body */}
      <Path
        d="M2 19c0-4 3.5-7 8-7s8 3 8 7"
        fill="none"
        stroke={props?.fill || '#000'}
        strokeWidth={1.5}
        opacity={0.9}
      />
    </Svg>
  );
}

export default ProfileIcon;
