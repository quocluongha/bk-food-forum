import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Freeze } from "react-freeze";
import { ActivityIndicator, View } from "react-native";
import {
  MasonryFlashList,
  ScrollView,
  useCollapsibleStyle,
} from "react-native-collapsible-tab-view";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import { queryRecipeList } from "../../../services/firebase/firestore";
import { RecipeItem } from "./RecipeItem";

export interface RecipeProps {}

export const Recipe: React.FC<RecipeProps> = (props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: queryRecipeList,
  });

  const { contentContainerStyle } = useCollapsibleStyle();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Freeze
      freeze={isLoading}
      placeholder={
        <ScrollView>
          <ActivityIndicator style={{ marginTop: verticalScale(12) }} />
        </ScrollView>
      }
    >
      <MasonryFlashList
        numColumns={2}
        estimatedItemSize={160}
        data={data ?? []}
        contentContainerStyle={{
          paddingTop: contentContainerStyle.paddingTop + verticalScale(12),
        }}
        ItemSeparatorComponent={() => (
          <View style={{ height: verticalScale(12) }} />
        )}
        renderItem={(props) => {
          return <RecipeItem {...props} />;
        }}
      />
    </Freeze>
  );
};

const styles = ScaledSheet.create({
  leftContainer: {
    paddingLeft: "12@s",
    paddingRight: "6@s",
  },
  rightContainer: {
    paddingRight: "12@s",
    paddingLeft: "6@s",
  },
});
