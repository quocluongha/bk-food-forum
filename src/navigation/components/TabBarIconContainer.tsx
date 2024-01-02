import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { moderateScale } from "react-native-size-matters";

export interface TabBarIconContainerProps {
  focused: boolean;
  color: string;
  size: number;
}

export const TabBarIconContainer: React.FC<
  PropsWithChildren<TabBarIconContainerProps>
> = ({ focused, color, children }) => {
  return (
    <View
      style={[
        {
          backgroundColor: focused ? color : "transparent",
          padding: moderateScale(8),
          borderRadius: moderateScale(8),
        },
      ]}
    >
      {children}
    </View>
  );
};
