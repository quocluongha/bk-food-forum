import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Icon, Image, useTheme } from "@rneui/themed";
import { moderateScale, scale } from "react-native-size-matters";
import { Bell, GroupIcon, HomeIcon } from "../components/svg";
import { Group, Home } from "../modules/main/screens";
import { TabBarIconContainer } from "./components";
import GeneralProfile from "../pages/GeneralProfile";
import NotiScreen from "../noti/screens/NotiScreen";

const MainTab = createBottomTabNavigator();

const Blank = () => null;

export const MainTabNavigator = () => {
  const {
    theme: {
      colors: { primary },
    },
  } = useTheme();

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: primary,
        headerLeftLabelVisible: false,
      }}
    >
      <MainTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon({ color, focused, size }) {
            return (
              <TabBarIconContainer color={color} focused={focused} size={size}>
                <HomeIcon
                  outline={!focused}
                  width={size}
                  height={size}
                  color={focused ? "white" : color}
                />
              </TabBarIconContainer>
            );
          },
        }}
      />
      <MainTab.Screen
        name="Group"
        component={Group}
        options={{
          headerShown: false,
          tabBarIcon({ color, focused, size }) {
            return (
              <TabBarIconContainer color={color} focused={focused} size={size}>
                <GroupIcon
                  outline={!focused}
                  width={size}
                  height={size}
                  color={focused ? "white" : color}
                />
              </TabBarIconContainer>
            );
          },
        }}
      />
      <MainTab.Screen
        name="Create"
        component={Blank}
        options={({ navigation }) => ({
          tabBarButton(props) {
            return (
              <Button
                onPress={() => navigation.navigate("CreateRecipe")}
                type="outline"
                buttonStyle={{
                  borderRadius: 40,
                  height: moderateScale(44),
                  width: moderateScale(44),
                  marginHorizontal: scale(20),
                }}
              >
                <Icon name="add" type="material-icon" />
              </Button>
            );
          },
        })}
      />
      <MainTab.Screen
        name="Notification"
        component={NotiScreen}
        options={{
          headerShown: false,
          tabBarIcon({ color, focused, size }) {
            return (
              <TabBarIconContainer color={color} focused={focused} size={size}>
                <Bell
                  outline={!focused}
                  width={size}
                  height={size}
                  color={focused ? "white" : color}
                />
              </TabBarIconContainer>
            );
          },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={GeneralProfile}
        options={{
          headerShown: false,
          tabBarIcon() {
            return (
              <Image
                source={require("../../assets/profile.png")}
                style={{ width: moderateScale(32), height: moderateScale(32) }}
              />
            );
          },
        }}
      />
    </MainTab.Navigator>
  );
};
