import { useIsFocused } from "@react-navigation/native";
import React from "react";
import { StatusBar, StatusBarProps } from "react-native";
import { useThemeMode } from "../../../theme/hooks";
import { useTheme } from "@rneui/themed";

export interface FocusAwareStatusBarProps extends StatusBarProps {}

export const FocusAwareStatusBar: React.FC<FocusAwareStatusBarProps> = (
  props
) => {
  const isFocused = useIsFocused();
  const { mode } = useThemeMode();
  const {
    theme: {
      colors: { background },
    },
  } = useTheme();

  return isFocused ? (
    <StatusBar
      barStyle={mode === "dark" ? "light-content" : "dark-content"}
      backgroundColor={background}
      {...props}
    />
  ) : null;
};
