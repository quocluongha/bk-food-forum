import "@rneui/themed";
import { TextVariant } from "./types";

declare module "@rneui/themed" {
  export interface TextProps {
    variant?: keyof typeof TextVariant;
  }

  export interface ComponentTheme {
    Text: Partial<TextProps>;
  }
}
