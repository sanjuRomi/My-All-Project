import * as React from 'react';
import Svg, {Circle, G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function UserLocationIcon(props) {
  return (
    <Svg
      width={170}
      height={170}
      viewBox="0 0 224 224"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle opacity={0.1} cx={112} cy={112} r={112} fill="#0B6EB6" />
      <Circle opacity={0.15} cx={112} cy={111.998} r={77.1391} fill="#0B6EB6" />
      <Circle opacity={0.25} cx={112} cy={112.001} r={36.3444} fill="#0B6EB6" />
      <Circle opacity={0.5} cx={112} cy={111.999} r={14.0927} fill="#0B6EB6" />
      <G filter="url(#filter0_d_177_13107)">
        <Path
          d="M111 126c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15z"
          fill="#F15D38"
          stroke="#fff"
          strokeWidth={2}
          strokeMiterlimit={10}
        />
      </G>
      <Path
        d="M118.277 106.386l-6.799 12.114a.662.662 0 01-.645.379.87.87 0 01-.169-.022.682.682 0 01-.552-.672l.15-6.415-6.756-1.794a.74.74 0 01-.45-.15.683.683 0 01-.209-.843.682.682 0 01.329-.322l14.127-3.207a.717.717 0 01.331-.075.7.7 0 01.509.206.64.64 0 01.136.801h-.002z"
        fill="#fff"
      />
      <Defs></Defs>
    </Svg>
  );
}

export default UserLocationIcon;
