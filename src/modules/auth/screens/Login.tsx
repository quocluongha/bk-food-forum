import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import { ScreenView } from "../../../components/organisms";

export interface LoginProps {}

export const Login: React.FC<LoginProps> = (props) => {
  return <ScreenView></ScreenView>;
};

const styles = ScaledSheet.create({
  container: {},
});
