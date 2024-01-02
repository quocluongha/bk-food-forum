import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export interface CookBookProps extends SvgProps {}

export const CookBook = (props: CookBookProps) => {
  return (
    <Svg width={20} height={20} viewBox="0 0 16 20" fill="none" {...props}>
      <Path
        d="M2.827 16.782h12.13v1.436a.886.886 0 0 1-.78.47H2.826a.955.955 0 0 1-.674-.28l-.353.354.353-.353a.955.955 0 0 1 0-1.348.955.955 0 0 1 .674-.28ZM5.193 5.68a.444.444 0 0 1 .755.312v1.224a.443.443 0 0 1-.885 0V5.992c0-.117.047-.23.13-.313Z"
        stroke="currentColor"
      />
      <Path
        d="M2.826 15.018c-.658 0-1.29.24-1.784.67V2.976a1.666 1.666 0 0 1 1.664-1.664h12.252v13.706H2.827Zm4.886-7.801V5.992a2.206 2.206 0 1 0-4.413 0v1.224a2.209 2.209 0 0 0 1.325 2.022v3.89c0 .233.093.458.258.623l.354-.353-.354.353a.882.882 0 0 0 1.506-.623v-3.89a2.209 2.209 0 0 0 1.324-2.021Zm4.78 0V5.026a.882.882 0 0 0-1.505-.624l.354.354-.354-.354a.89.89 0 0 0-.078.09.882.882 0 0 0-1.245 0 .881.881 0 0 0-.079-.09l-.353.354.353-.354a.882.882 0 0 0-1.247 0 .882.882 0 0 0-.258.624v2.19a2.21 2.21 0 0 0 1.324 2.022v3.89a.88.88 0 0 0 .259.623l.353-.353-.353.353a.882.882 0 0 0 1.505-.623v-3.89a2.208 2.208 0 0 0 1.325-2.021Zm-2.476-2.37L9.671 4.5l.345.346Z"
        stroke="currentColor"
      />
    </Svg>
  );
};