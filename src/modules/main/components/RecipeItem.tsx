import { useNavigation } from "@react-navigation/native";
import { Image, Skeleton, useTheme, Text } from "@rneui/themed";
import { MasonryListRenderItemInfo } from "@shopify/flash-list";
import Color from "color";
import { random } from "lodash";
import { Pressable, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import {
  ScaledSheet,
  moderateScale,
  scale,
  verticalScale,
} from "react-native-size-matters";

export interface RecipeItemProps extends MasonryListRenderItemInfo<any> {}

export const RecipeItem: React.FC<RecipeItemProps> = ({ item, index }) => {
  const navigation = useNavigation();

  const {
    theme: {
      colors: { black, white },
    },
  } = useTheme();

  return (
    <Animated.View
      style={index % 2 === 0 ? styles.leftContainer : styles.rightContainer}
    >
      <Pressable
        onPress={() =>
          //@ts-ignore
          navigation.navigate("RecipeDetail", { recipeId: item?.id })
        }
        style={{
          height: random(200, 240),
          flexDirection: "column-reverse",
          paddingBottom: verticalScale(12),
          borderRadius: moderateScale(12),
        }}
      >
        <Image
          source={{ uri: item?.avatar }}
          containerStyle={[
            StyleSheet.absoluteFill,
            { borderRadius: moderateScale(12) },
          ]}
          PlaceholderContent={<Skeleton style={{ flex: 1 }} />}
        />
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Color(black).alpha(0.4).toString(),
              borderRadius: moderateScale(12),
            },
          ]}
        />
        <Text
          variant="titleSmall"
          style={{
            color: white,
            paddingHorizontal: scale(8),
            fontWeight: "700",
          }}
        >
          {item?.name}
        </Text>
      </Pressable>
    </Animated.View>
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
