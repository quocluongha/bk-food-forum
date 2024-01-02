import { Avatar, useTheme, Text, Button } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import {
  ScaledSheet,
  moderateScale,
  verticalScale,
} from "react-native-size-matters";

export interface GroupItemProps {
  title: string;
  description: string;
  image: string;
}

export const GroupItem: React.FC<GroupItemProps> = ({
  title,
  description,
  image,
}) => {
  const {
    theme: {
      colors: { primary, grey5, white, grey0 },
    },
  } = useTheme();

  return (
    <View style={[styles.container, { borderColor: grey5 }]}>
      <Avatar
        rounded
        size={moderateScale(40)}
        source={{
          uri: image,
        }}
      />
      <View style={{ flex: 1, rowGap: verticalScale(2) }}>
        <Text
          variant="titleSmall"
          style={{ fontWeight: "500", color: primary }}
        >
          {title}
        </Text>
        <Text variant="labelSmall" style={{ color: grey0 }}>
          {description}
        </Text>
      </View>
      <Button buttonStyle={{ borderRadius: moderateScale(8) }}>
        <Text variant="bodySmall" style={{ color: white, fontWeight: "500" }}>
          Join
        </Text>
      </Button>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: "12@s",
    paddingVertical: "8@vs",
    flexDirection: "row",
    columnGap: "12@s",
    marginHorizontal: "12@s",
    borderWidth: 1,
    borderRadius: "8@ms",
  },
});
