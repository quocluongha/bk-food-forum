import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ColorClearImage = ({
  colorClearIconPosition,
  colorClearIconTop,
  colorClearIconLeft,
}) => {
  const colorClearIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", colorClearIconPosition),
      ...getStyleValue("top", colorClearIconTop),
      ...getStyleValue("left", colorClearIconLeft),
    };
  }, [colorClearIconPosition, colorClearIconTop, colorClearIconLeft]);

  return (
    <Image
      style={[styles.colorclearIcon, colorClearIconStyle]}
      contentFit="cover"
      source={require("../assets/time--light.png")}
    />
  );
};

const styles = StyleSheet.create({
  colorclearIcon: {
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    overflow: "hidden",
  },
});

export default ColorClearImage;
