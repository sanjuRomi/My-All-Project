import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackIcon(props) {
  return (
    <Svg
      width={13}
      height={22}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8 15.75a.744.744 0 01-.53-.22l-7-7a.75.75 0 010-1.06l7-7a.75.75 0 111.061 1.06L2.061 8l6.47 6.47A.75.75 0 018 15.75z"
        fill={props?.color || '#2A2A2A'}
      />
    </Svg>
  );
}

export default BackIcon;
