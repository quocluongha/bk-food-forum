import { createTheme } from "@rneui/themed";
import { fontConfig } from "./typography";

export const darkTheme = createTheme({
  mode: "dark",
  components: {
    Text(props, theme) {
      return {
        style: [fontConfig[props.variant]],
      };
    },
  },
});
