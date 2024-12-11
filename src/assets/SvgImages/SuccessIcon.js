import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SuccessIcon(props) {
  return (
    <Svg
      width={100}
      height={100}
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M48.978 6.75c6.35-9 19.695-9 26.044 0l.408.577a15.937 15.937 0 0015.733 6.517l.697-.12c10.853-1.874 20.29 7.563 18.416 18.416l-.12.697a15.934 15.934 0 006.517 15.733l.578.408c8.999 6.35 8.999 19.695 0 26.044l-.578.408a15.934 15.934 0 00-6.517 15.733l.12.697c1.874 10.853-7.563 20.29-18.416 18.416l-.697-.12a15.934 15.934 0 00-15.733 6.517l-.408.578c-6.35 8.999-19.695 8.999-26.044 0l-.408-.578a15.934 15.934 0 00-15.733-6.517l-.697.12c-10.853 1.874-20.29-7.563-18.416-18.416l.12-.697A15.937 15.937 0 007.327 75.43l-.578-.408c-8.999-6.35-8.999-19.695 0-26.044l.578-.408a15.937 15.937 0 006.517-15.733l-.12-.697C11.85 21.287 21.287 11.85 32.14 13.724l.697.12A15.937 15.937 0 0048.57 7.327l.408-.578z"
        fill="#C8E6C9"
      />
      <Path
        d="M51.234 83.606H51.25c.978 0 1.917-.388 2.608-1.082l.002-.002 35.83-35.83a3.688 3.688 0 10-5.216-5.217L51.266 74.682 39.543 62.773s0 0 0 0a3.692 3.692 0 00-5.216-.04h-.001a3.688 3.688 0 00-.039 5.216s0 0 0 0L48.62 82.506h0a3.691 3.691 0 002.614 1.1z"
        fill="#43A048"
        stroke="#43A048"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default SuccessIcon;
