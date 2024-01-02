import { moderateScale } from "react-native-size-matters";
import { TextVariant } from "../types";

export const fontConfig = {
  [TextVariant.bodyLarge]: {
    fontSize: moderateScale(16),
  },
  [TextVariant.bodyMedium]: {
    fontSize: moderateScale(14),
  },
  [TextVariant.bodySmall]: {
    fontSize: moderateScale(12),
  },
  [TextVariant.displayLarge]: {
    fontSize: moderateScale(57),
  },
  [TextVariant.displayMedium]: {
    fontSize: moderateScale(45),
  },
  [TextVariant.displaySmall]: {
    fontSize: moderateScale(36),
  },
  [TextVariant.headlineLarge]: {
    fontSize: moderateScale(32),
  },
  [TextVariant.headlineMedium]: {
    fontSize: moderateScale(28),
  },
  [TextVariant.headlineSmall]: {
    fontSize: moderateScale(24),
  },
  [TextVariant.labelLarge]: {
    fontSize: moderateScale(14),
  },
  [TextVariant.labelMedium]: {
    fontSize: moderateScale(12),
  },
  [TextVariant.labelSmall]: {
    fontSize: moderateScale(11),
  },
  [TextVariant.titleLarge]: {
    fontSize: moderateScale(22),
  },
  [TextVariant.titleMedium]: {
    fontSize: moderateScale(16),
  },
  [TextVariant.titleSmall]: {
    fontSize: moderateScale(14),
  },
};
