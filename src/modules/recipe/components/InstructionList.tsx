import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React from "react";
import { EdgeInsets } from "react-native-safe-area-context";
import { InstructionItem } from "./InstructionItem";

export interface InstructionListProps {
  data: any[];
  insets: EdgeInsets;
}

export const InstructionList: React.FC<InstructionListProps> = ({
  data,
  insets,
}) => {
  return (
    <BottomSheetFlatList
      showsVerticalScrollIndicator={false}
      data={data ?? []}
      renderItem={(props) => <InstructionItem {...props} />}
      contentContainerStyle={{
        paddingBottom: insets.bottom,
      }}
    />
  );
};
