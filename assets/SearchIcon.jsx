import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SearchIcon(props) {
  return (
    <Svg
      width={20}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.562 21.447l-4.646-4.648c3.476-4.645 2.529-11.228-2.117-14.704C12.154-1.381 5.571-.433 2.095 4.212-1.381 8.857-.433 15.44 4.212 18.916a10.505 10.505 0 0012.587 0l4.648 4.648a1.496 1.496 0 002.115-2.115v-.002zM10.544 18.02a7.475 7.475 0 117.476-7.476 7.483 7.483 0 01-7.476 7.476z"
        fill="#898989"
      />
    </Svg>
  );
}

export default SearchIcon;
