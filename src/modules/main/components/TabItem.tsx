import { Icon, Tab, useTheme } from "@rneui/themed";
import React, { useMemo } from "react";
import {
  MaterialTabItemProps,
  useFocusedTab,
} from "react-native-collapsible-tab-view";
import {
  ScaledSheet,
  moderateScale,
  scale,
  verticalScale,
} from "react-native-size-matters";
import { CookBook, Discussion } from "../../../components/svg";

export interface TabItemProps extends MaterialTabItemProps<string> {}

export const TabItem: React.FC<TabItemProps> = ({ name, onPress }) => {
  const focusedTab = useFocusedTab();

  const isFocused = useMemo(() => name === focusedTab, [focusedTab]);

  const {
    theme: {
      colors: { primary, white },
    },
  } = useTheme();

  const Icon = useMemo(() => {
    if (name === "Recipe") {
      return (
        <CookBook
          color={isFocused ? white : primary}
          width={moderateScale(22)}
          height={moderateScale(22)}
        />
      );
    } else if (name === "Discussion") {
      return (
        <Discussion
          color={isFocused ? white : primary}
          width={moderateScale(24)}
          height={moderateScale(24)}
        />
      );
    }
  }, [name, isFocused, primary, white]);

  return (
    <Tab.Item
      containerStyle={{ zIndex: 1 }}
      buttonStyle={{
        backgroundColor: isFocused ? primary : undefined,
        marginHorizontal: scale(8),
        marginVertical: verticalScale(8),
        borderRadius: moderateScale(8),
      }}
      titleStyle={{
        color: isFocused ? white : primary,
        fontWeight: "500",
        fontSize: moderateScale(12),
      }}
      icon={Icon}
      iconPosition="left"
      title={name}
      onPress={() => {
        onPress(name);
      }}
    />
  );
};

const styles = ScaledSheet.create({
  container: {},
});
