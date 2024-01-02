import { createTheme } from "@rneui/themed";
import { fontConfig } from "./typography";
import { moderateScale, verticalScale } from "react-native-size-matters";

export const lightTheme = createTheme({
  mode: "light",
  lightColors: { primary: "#0A094B" },
  components: {
    Text(props, theme) {
      return {
        style: [fontConfig[props.variant]],
      };
    },
    SearchBar(props, theme) {
      return {
        containerStyle: {
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderTopColor: "transparent",
          borderBottomColor: "transparent",
          backgroundColor: theme.colors.background,
        },
        placeholder: "Search",
        lightTheme: theme.mode === "light",
        inputStyle: {
          fontSize: moderateScale(16),
        },
        inputContainerStyle: {
          height: verticalScale(32),
          borderRadius: moderateScale(8),
          backgroundColor: theme.colors.grey5,
        },
      };
    },
  },
});
