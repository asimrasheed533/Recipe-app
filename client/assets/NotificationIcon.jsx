import * as React from "react";
import Svg, { Path } from "react-native-svg";

function NotificationIcon({ filled, ...props }) {
  return (
    <Svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="#F3F3F3"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 7A6 6 0 104 7c0 7-3 9-3 9h18s-3-2-3-9zM11.73 20a1.999 1.999 0 01-3.46 0"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={filled ? "#FFD700" : "#F3F3F3"}
      />
    </Svg>
  );
}

export default NotificationIcon;
