import { darkTheme } from "../dark";
import { lightTheme } from "../light";
import { useThemeMode } from "./useThemeMode";

export const useAppTheme = () => {
  const { mode } = useThemeMode();

  return mode === "dark" ? darkTheme : lightTheme;
};
