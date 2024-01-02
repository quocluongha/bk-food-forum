import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export interface HomeIconProps extends SvgProps {
  outline?: boolean;
}

export const HomeIcon = ({ outline, ...props }: HomeIconProps) => {
  return (
    <Svg width={21} height={21} viewBox="0 0 21 21" {...props}>
      <Path
        d="M19.844 8.02 11.38.84a1.31 1.31 0 0 0-1.76 0L1.157 8.02A1.997 1.997 0 0 0 .5 9.5v10.336a.664.664 0 0 0 .665.664H6.5a1 1 0 0 0 1-1v-4c0-.564.553-1.021 1.117-1.021h3.766c.565 0 1.118.457 1.118 1.021v4a1 1 0 0 0 1 1h5.335a.664.664 0 0 0 .665-.664V9.5a2 2 0 0 0-.657-1.48Z"
        stroke={outline ? "currentColor" : "none"}
        fill={outline ? "none" : "currentColor"}
      />
    </Svg>
  );
};
