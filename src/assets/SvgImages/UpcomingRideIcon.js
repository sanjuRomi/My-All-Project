import * as React from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

function UpcomingRideIcon(props) {
  return (
    <Svg
      height="21px"
      viewBox="0 0 24 24"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Calendar Outline */}
      <Rect
        x="2"
        y="4"
        width="20"
        height="18"
        rx="2"
        ry="2"
        fill="none"
        stroke={props?.fill || '#000'}
        strokeWidth={1.5}
      />
      
      {/* Calendar Top Bars */}
      <Path
        d="M6 2v4M18 2v4"
        stroke={props?.fill || '#000'}
        strokeWidth={1.5}
      />
      
      {/* Calendar Divider Line */}
      <Path
        d="M2 10h20"
        stroke={props?.fill || '#000'}
        strokeWidth={1.5}
      />

      {/* Car Icon */}
      <Path
        d="M8 15h8l1 3H7l1-3zM5 18h14M7 13h10c.8 0 1.4.6 1.4 1.4v.6H5.6v-.6C5.6 13.6 6.2 13 7 13z"
        fill={props?.fill || '#000'}
        opacity={0.9}
      />

      {/* Clock Circle */}
      <Circle
        cx="12"
        cy="7"
        r="1"
        fill={props?.fill || '#000'}
      />
    </Svg>
  );
}

export default UpcomingRideIcon;
