import { Text, useTheme } from "@rneui/themed";
import React from "react";
import { ListRenderItemInfo, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

export interface IngredientItemProps extends ListRenderItemInfo<any> {}

export const IngredientItem: React.FC<IngredientItemProps> = ({ item }) => {
  const {
    theme: {
      colors: { background, black },
    },
  } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: background, shadowColor: black },
      ]}
    >
      <Text variant="titleSmall" style={{ maxWidth: "60%" }}>
        {item?.ingredient?.name}
      </Text>
      <Text variant="titleSmall" style={{ maxWidth: "35%", fontWeight: "700" }}>
        {item?.amount}
      </Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderRadius: "4@ms",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: "12@s",
    paddingHorizontal: "12@s",
    paddingVertical: "12@s",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
});
