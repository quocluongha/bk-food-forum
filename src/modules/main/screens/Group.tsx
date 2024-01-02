import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import { ScreenView } from "../../../components/organisms";

export interface GroupProps {}

export const Group: React.FC<GroupProps> = (props) => {
  return <ScreenView></ScreenView>;
};

const styles = ScaledSheet.create({
  container: {},
});
