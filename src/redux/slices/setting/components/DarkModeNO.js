import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import VisibleNOImage from "./VisibleNOImage";
import ColorClearImage from "./ColorClearImage";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeNO = ({
  wiFiSignalLight,
  darkModeNOPosition,
  darkModeNOTop,
  darkModeNOLeft,
}) => {
  const darkModeNOStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeNOPosition),
      ...getStyleValue("top", darkModeNOTop),
      ...getStyleValue("left", darkModeNOLeft),
    };
  }, [darkModeNOPosition, darkModeNOTop, darkModeNOLeft]);

  return (
    <View style={[styles.darkModeno, darkModeNOStyle]}>
      <VisibleNOImage
        visibleNOImageVisibleNO={require("../assets/notch.png")}
        visibleNOIconPosition="absolute"
        visibleNOIconTop={0}
        visibleNOIconRight={0}
        visibleNOIconLeft={0}
        visibleNOIconMaxWidth="100%"
        visibleNOIconOverflow="hidden"
      />
      <View style={styles.statusIcons}>
        <Image
          style={styles.networkSignalLight}
          contentFit="cover"
          source={require("../assets/network-signal-light.png")}
        />
        <Image
          style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
          contentFit="cover"
          source={wiFiSignalLight}
        />
        <Image
          style={[styles.batteryLight, styles.lightSpaceBlock]}
          contentFit="cover"
          source={require("../assets/battery--light.png")}
        />
      </View>
      <Image
        style={styles.indicatorIcon}
        contentFit="cover"
        source={require("../assets/indicator.png")}
      />
      <ColorClearImage
        colorClearIconPosition="absolute"
        colorClearIconTop={13}
        colorClearIconLeft={12}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  darkModeno: {
    width: 385,
    height: 44,
    overflow: "hidden",
  },
});

export default DarkModeNO;
