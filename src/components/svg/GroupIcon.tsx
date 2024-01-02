import * as React from "react";
import Svg, { Path, Ellipse, Circle, SvgProps } from "react-native-svg";

export interface GroupIconProps extends SvgProps {
  outline?: boolean;
}

export const GroupIcon = ({ outline, ...props }: GroupIconProps) => {
  return (
    <Svg width={21} height={17} viewBox="0 0 21 17" fill="none" {...props}>
      <Ellipse
        cx={10.5}
        cy={13.5}
        rx={6}
        ry={3}
        stroke={outline ? "currentColor" : "none"}
        fill={outline ? "none" : "currentColor"}
      />
      <Circle
        cx={10.5}
        cy={4.5}
        r={4}
        stroke={outline ? "currentColor" : "none"}
        fill={outline ? "none" : "currentColor"}
      />
      <Path
        clipRule="evenodd"
        d="M5.75 1.968A3.499 3.499 0 0 0 4 5a3.5 3.5 0 0 0 1.75 3.032 3.5 3.5 0 1 1 0-6.064Zm9.5 0A3.499 3.499 0 0 1 17 5a3.499 3.499 0 0 1-1.75 3.032 3.5 3.5 0 1 0 0-6.064ZM16 10.5a2.5 2.5 0 0 1 2 4 2.5 2.5 0 1 0-2-4Zm-11 0a2.5 2.5 0 0 0-2 4 2.5 2.5 0 1 1 2-4Z"
        stroke={outline ? "currentColor" : "none"}
        fill={outline ? "none" : "currentColor"}
      />
    </Svg>
  );
};
