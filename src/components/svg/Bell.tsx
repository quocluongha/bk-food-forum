import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export interface BellProps extends SvgProps {
  outline?: boolean;
}

export const Bell = ({ outline, ...props }: BellProps) => {
  return (
    <Svg width={21} height={21} viewBox="0 0 21 21" fill="none" {...props}>
      <Path
        d="M2.587 14.061v-.067c.525-.173.913-.661.913-1.25V7.847C3.5 4.073 6.624 1 10.5 1c3.877 0 7 3.075 7 6.847v4.897c0 .591.387 1.079.913 1.25v.067c.89 0 1.587.7 1.587 1.54v.41a.323.323 0 0 1-.334.316H1.334A.325.325 0 0 1 1 16.01v-.41c0-.839.7-1.54 1.587-1.54Zm10.275 4.082C12.627 19.199 11.666 20 10.5 20c-1.166 0-2.128-.801-2.362-1.857h4.724Z"
        stroke={outline ? "currentColor" : "none"}
        fill={outline ? "none" : "currentColor"}
      />
    </Svg>
  );
};
