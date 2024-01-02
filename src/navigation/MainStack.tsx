import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../modules/auth/screens";
import { MainTabNavigator } from "./MainTab";
import { RecipeDetail } from "../modules/recipe/screens";
import DetailProfile from "../pages/DetailProfile";

const MainStack = createNativeStackNavigator();

export const MainStackNavigator: React.FC = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <MainStack.Screen
        name="MainTab"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="CreateRecipe" component={Login} />
      <MainStack.Screen
        name="RecipeDetail"
        component={RecipeDetail}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="DetailProfile"
        component={DetailProfile}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};
