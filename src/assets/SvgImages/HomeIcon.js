import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeIcon(props) {
  return (
    <Svg
      width={394}
      height={356}
      viewBox="0 0 394 356"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M154.333 334.333V227.666h85.334v106.667c0 11.733 9.6 21.333 21.333 21.333h64c11.733 0 21.333-9.6 21.333-21.333V184.999H382.6c9.813 0 14.507-12.16 7.04-18.56L211.293 5.799c-8.106-7.253-20.48-7.253-28.586 0L4.36 166.44c-7.253 6.4-2.773 18.56 7.04 18.56h36.267v149.334c0 11.733 9.6 21.333 21.333 21.333h64c11.733 0 21.333-9.6 21.333-21.333z"
        fill={props?.fill || '#000'}
      />
    </Svg>
  );
}

export default HomeIcon;
