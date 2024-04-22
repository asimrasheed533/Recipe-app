import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowIcon(props) {
  return (
    <Svg
      width={20}
      height={12}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.028 3.617L2.442 11.56c-.133.14-.29.25-.465.326a1.372 1.372 0 01-1.096 0 1.426 1.426 0 01-.464-.326A1.549 1.549 0 010 10.497c0-.397.15-.779.417-1.062L9.012.437c.26-.272.612-.428.98-.437.368-.008.725.133.997.393l8.651 9.035c.242.286.37.658.36 1.04-.012.382-.162.745-.42 1.016-.257.27-.604.428-.969.44-.365.013-.72-.12-.995-.372l-7.588-7.935z"
        fill="#ffff"
      />
    </Svg>
  );
}

export default ArrowIcon;
