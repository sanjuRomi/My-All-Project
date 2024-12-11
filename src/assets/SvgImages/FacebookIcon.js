import * as React from 'react';
import Svg, {Circle, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
function FacebookIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={12} cy={12} r={10.5} fill="#fff" />
      <Path
        d="M15.91 15.211l.467-2.963h-2.918v-1.923c0-.81.407-1.602 1.714-1.602H16.5V6.2S15.296 6 14.145 6c-2.404 0-3.974 1.42-3.974 3.989v2.259H7.5v2.963h2.671v7.165a10.856 10.856 0 003.288 0V15.21h2.451z"
        fill="url(#paint0_linear_14_5679)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_14_5679"
          x1={12}
          y1={6}
          x2={12}
          y2={22.5}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#18ACFE" />
          <Stop offset={1} stopColor="#0163E0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default FacebookIcon;
