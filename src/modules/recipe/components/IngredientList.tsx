import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React from "react";
import { EdgeInsets } from "react-native-safe-area-context";
import { verticalScale } from "react-native-size-matters";
import { IngredientItem } from "./IngredientItem";

export interface IngredientListProps {
  data: any[];
  insets: EdgeInsets;
}

export const IngredientList: React.FC<IngredientListProps> = ({
  data,
  insets,
}) => {
  return (
    <BottomSheetFlatList
      showsVerticalScrollIndicator={false}
      data={data ?? []}
      renderItem={(props) => <IngredientItem {...props} />}
      contentContainerStyle={{
        rowGap: verticalScale(12),
        paddingTop: verticalScale(12),
        paddingBottom: insets.bottom,
      }}
    />
  );
};
