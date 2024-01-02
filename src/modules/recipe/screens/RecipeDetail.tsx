import BottomSheet from "@gorhom/bottom-sheet";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Icon, Image, Text, useTheme } from "@rneui/themed";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Freeze } from "react-freeze";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";
import { ScreenView } from "../../../components/organisms";
import { queryRecipe } from "../../../services/firebase/firestore";
import { IngredientList, InstructionList } from "../components";

export interface RecipeDetailProps extends NativeStackScreenProps<any> {}

export const RecipeDetail: React.FC<RecipeDetailProps> = ({
  navigation,
  route,
}) => {
  const { params } = route;

  const { data, isLoading } = useQuery({
    queryKey: ["recipe", (params as any)?.recipeId],
    queryFn: async () => queryRecipe((params as any)?.recipeId),
  });

  const pagerViewRef = useRef<PagerView>(null);
  const snapPoints = useMemo(() => ["65%", "85%"], []);
  const segmentValues = useMemo(() => ["Ingredients", "Instructions"], []);
  const insets = useSafeAreaInsets();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapIndex, setSnapIndex] = useState(0);

  const handleValueChange = useCallback(
    (name: string) => {
      const index = segmentValues.indexOf(name);

      setSelectedIndex(index);
      pagerViewRef.current?.setPage(index);
    },
    [setSelectedIndex, segmentValues]
  );

  const handleChangeSnapIndex = useCallback(
    (index: number) => {
      if (snapIndex !== index) {
        setSnapIndex(index);
      }
    },
    [setSnapIndex, snapIndex]
  );

  const {
    theme: {
      colors: { primary, white, grey2 },
    },
  } = useTheme();

  return (
    <ScreenView>
      <Freeze
        freeze={isLoading}
        placeholder={
          <SafeAreaView
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <ActivityIndicator />
          </SafeAreaView>
        }
      >
        <Image
          source={{ uri: data?.avatar }}
          style={[StyleSheet.absoluteFill]}
          containerStyle={[StyleSheet.absoluteFill]}
        />
        <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
          <View style={[styles.headerContainer]}>
            <Button
              buttonStyle={[styles.backButton, { backgroundColor: white }]}
              onPress={navigation.goBack}
            >
              <Icon name="close" type="material-icon" />
            </Button>
            <Button
              buttonStyle={[styles.backButton, { backgroundColor: white }]}
            >
              <Icon name="share" type="material-icon" />
            </Button>
          </View>
          <BottomSheet snapPoints={snapPoints} onChange={handleChangeSnapIndex}>
            <View
              style={{
                paddingHorizontal: scale(12),
                rowGap: verticalScale(4),
              }}
            >
              <View style={[styles.titleContainer]}>
                <Text
                  variant="titleLarge"
                  style={{ fontWeight: "700", flex: 1 }}
                >
                  {data?.name}
                </Text>
                <View style={[styles.ratingContainer]}>
                  <Icon name="star" color={"#FCB90C"} />
                  <Text variant="titleLarge" style={{ fontWeight: "500" }}>
                    {data?.rating}
                  </Text>
                </View>
              </View>
              <Text variant="bodySmall" style={{ color: grey2 }}>
                {data?.description}
              </Text>
            </View>
            <SegmentedControl
              tintColor={primary}
              style={{
                height: verticalScale(32),
                marginHorizontal: scale(12),
                marginTop: verticalScale(12),
              }}
              activeFontStyle={{ color: white }}
              values={segmentValues}
              selectedIndex={selectedIndex}
              onValueChange={handleValueChange}
            />
            <PagerView
              ref={pagerViewRef}
              style={{ flex: 1 }}
              scrollEnabled={false}
            >
              <IngredientList data={data?.ingredients} insets={insets} />
              <InstructionList data={data?.instructions} insets={insets} />
            </PagerView>
          </BottomSheet>
        </SafeAreaView>
      </Freeze>
    </ScreenView>
  );
};

const styles = ScaledSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    rowGap: "4@s",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "12@s",
  },
  backButton: {
    alignSelf: "flex-start",
    borderRadius: "8@ms",
    width: "42@ms",
    height: "42@ms",
  },
});
