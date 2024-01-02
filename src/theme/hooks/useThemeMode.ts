import { useThemeMode as useThemeModeBase } from "@rneui/themed";
import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { commonActions } from "../../redux/slices";
import { AppTheme } from "../../redux/slices/common/types";

/**
 * Provides the theme mode from Redux store and set the theme mode function.
 */
export const useThemeMode = () => {
  const nativeColorScheme = useColorScheme();
  const appThemeType = useAppSelector((state) => state.common.theme);

  const dispatch = useAppDispatch();
  const { setMode } = useThemeModeBase();

  const mode = useMemo(() => {
    switch (appThemeType) {
      case AppTheme.SYSTEM:
        return nativeColorScheme ?? "light";
      case AppTheme.DARK:
        return "dark";
      case AppTheme.LIGHT:
        return "light";
    }
  }, [appThemeType, nativeColorScheme]);

  const setTheme = (theme: AppTheme) => {
    dispatch(commonActions.setTheme(theme));

    switch (theme) {
      case AppTheme.SYSTEM:
        setMode(nativeColorScheme ?? "light");
        break;
      case AppTheme.DARK:
        setMode("dark");
        break;
      case AppTheme.LIGHT:
        setMode("light");
        break;
    }
  };

  return { mode, setTheme };
};
