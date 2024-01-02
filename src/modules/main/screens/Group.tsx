import { Icon, Text, useTheme } from "@rneui/themed";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet, verticalScale } from "react-native-size-matters";
import { ScreenView } from "../../../components/organisms";
import { GroupItem } from "../components";

export interface GroupProps {}

export const Group: React.FC<GroupProps> = (props) => {
  const {
    theme: {
      colors: { primary },
    },
  } = useTheme();

  return (
    <ScreenView>
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            rowGap: verticalScale(20),
            paddingBottom: verticalScale(12),
          }}
        >
          <View style={{ rowGap: verticalScale(12) }}>
            <View style={[styles.titleContainer]}>
              <Text
                variant="titleMedium"
                style={{ fontWeight: "700", color: primary }}
              >
                More like "Vietnamese cuisine"
              </Text>
              <Icon name="chevron-right" />
            </View>
            <View style={{ rowGap: verticalScale(12) }}>
              <GroupItem
                image="https://www.allrecipes.com/thmb/HTJHVC_LYKmXaMF54dhe2gZQkNI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roasted-pork-banh-mi-vietnamese-sandwitch-ddmfs-3X4-0332-cfb4d2e149e7476ab2a2b4030c543f1b.jpg"
                title="50 shades of Banh Mi"
                description="30k members"
              />
              <GroupItem
                image="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1622728130/The-Best-Food-In-Vietnam-Main/The-Best-Food-In-Vietnam-Main.jpg"
                title="Vietnamese traditional food"
                description="50k members"
              />
              <GroupItem
                image="https://images.immediate.co.uk/production/volatile/sites/2/2015/04/4783.jpg?quality=90&resize=556,505"
                title="Modern Pho"
                description="10k members"
              />
              <GroupItem
                image="https://authentiktravel.com/media/ckeditor/vietnamese%20cuisine%20co%20of%20the%20north.jpg"
                title="Vietnamese northern cuisine"
                description="20k members"
              />
            </View>
          </View>
          <View style={{ rowGap: verticalScale(12) }}>
            <View style={[styles.titleContainer]}>
              <Text
                variant="titleMedium"
                style={{ fontWeight: "700", color: primary }}
              >
                🌏 Top communities
              </Text>
              <Icon name="chevron-right" />
            </View>
            <View style={{ rowGap: verticalScale(12) }}>
              <GroupItem
                image="https://www.easyridersvietnam.com/wp-content/uploads/2023/03/must-try-dishes-in-vietnam-pho1.jpg"
                title="HCM National Uni Food Recommendations"
                description="40k members"
              />
              <GroupItem
                image="https://blog.suvie.com/wp-content/uploads/2021/10/Supreme_Tortellini_Bake_Hero-1.jpg"
                title="10-minute prep meals"
                description="50k members"
              />
            </View>
          </View>
          <View style={{ rowGap: verticalScale(12) }}>
            <View style={[styles.titleContainer]}>
              <Text
                variant="titleMedium"
                style={{ fontWeight: "700", color: primary }}
              >
                🔥 Trending communities
              </Text>
              <Icon name="chevron-right" />
            </View>
            <View style={{ rowGap: verticalScale(12) }}>
              <GroupItem
                image="https://images.ctfassets.net/8urtyqugdt2l/1MgK8AZDuh814awamhq10B/d7641333e35b119016e89a09b7c341f2/1579088584-prawn-pasta-low-carb-meal-prep-header.jpg"
                title="Meal prep for gym sharks"
                description="5k members"
              />
              <GroupItem
                image="https://www.luneproduction.com/Content/Images/uploaded/PressParnership/food_3.jpg"
                title="Vietnamese southern cuisine"
                description="10k members"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScreenView>
  );
};

const styles = ScaledSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "16@s",
  },
});
