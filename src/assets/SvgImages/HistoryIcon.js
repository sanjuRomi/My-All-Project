import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HistoryIcon(props) {
  return (
    <Svg
      height="21px"
      viewBox="0 0 20 21"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.5 0C7 0 3.9 1.9 2.3 4.8L0 2.5V9h6.5L3.7 6.2C5 3.7 7.5 2 10.5 2 14.6 2 18 5.4 18 9.5S14.6 17 10.5 17c-3.3 0-6-2.1-7.1-5H1.3c1.1 4 4.8 7 9.2 7 5.3 0 9.5-4.3 9.5-9.5S15.7 0 10.5 0zM9 5v5.1l4.7 2.8.8-1.3-4-2.4V5H9z"
        transform="translate(-464 -254) translate(464 254.5)"
        fill={props?.fill || '#000'}
        opacity={0.9}
        fillRule="evenodd"
        stroke="none"
        strokeWidth={1}
      />
    </Svg>
  );
}

export default HistoryIcon;
