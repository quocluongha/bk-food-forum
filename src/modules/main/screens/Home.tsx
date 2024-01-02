import { useTheme, SearchBar } from "@rneui/themed";
import React from "react";
import {
  MaterialTabBar,
  ScrollView,
  Tabs,
} from "react-native-collapsible-tab-view";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScaledSheet,
  moderateScale,
  verticalScale,
} from "react-native-size-matters";
import { ScreenView } from "../../../components/organisms";
import { Recipe, TabItem } from "../components";
import { Platform, View } from "react-native";

export interface HomeProps {}

export const Home: React.FC<HomeProps> = (props) => {
  const {
    theme: {
      mode,
      colors: { background, grey5 },
    },
  } = useTheme();

  return (
    <ScreenView>
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <Tabs.Container
          renderHeader={() => {
            return <SearchBar />;
          }}
          headerContainerStyle={{ shadowColor: "transparent" }}
          renderTabBar={(props) => {
            return (
              <MaterialTabBar
                style={{ backgroundColor: grey5 }}
                indicatorStyle={{ backgroundColor: "transparent" }}
                TabItemComponent={(props) => <TabItem {...props} />}
                {...props}
              />
            );
          }}
        >
          <Tabs.Tab name="Recipe">
            <Recipe />
          </Tabs.Tab>
          <Tabs.Tab name="Discussion">
            <ScrollView></ScrollView>
          </Tabs.Tab>
        </Tabs.Container>
      </SafeAreaView>
    </ScreenView>
  );
};

const styles = ScaledSheet.create({
  container: {},
});
