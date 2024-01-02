import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@rneui/themed";
import React from "react";
import { MainStackNavigator } from "./MainStack";

export const AppNavigator: React.FC = () => {
  const {
    theme: { colors, mode },
  } = useTheme();

  return (
    <NavigationContainer
      theme={{
        dark: mode === "dark",
        colors: {
          primary: colors.primary,
          background: colors.background,
          border: colors.background,
          card: colors.background,
          notification: colors.primary,
          text: colors.black,
        },
      }}
    >
      <MainStackNavigator />
    </NavigationContainer>
  );
};
