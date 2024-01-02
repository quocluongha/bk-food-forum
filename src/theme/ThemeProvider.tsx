import { ThemeProvider as ThemeProviderBase } from "@rneui/themed";
import React, { ComponentProps } from "react";
import { useAppTheme } from "./hooks";

export interface ThemeProviderProps
  extends Omit<ComponentProps<typeof ThemeProviderBase>, "theme"> {}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const theme = useAppTheme();

  return <ThemeProviderBase theme={theme}>{children}</ThemeProviderBase>;
};
