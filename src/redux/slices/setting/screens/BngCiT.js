import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import ReportErrorFormContainer from "../components/ReportErrorFormContainer";
import SupportPackageContainer from "../components/SupportPackageContainer";
import AccountDetailsContainer from "../components/AccountDetailsContainer";
import DarkModeNO from "../components/DarkModeNO";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const BngCiT = () => {
  return (
    <View style={styles.bngCiT}>
      <View style={[styles.iphone142, styles.iphone142Position]}>
        <ReportErrorFormContainer />
        <SupportPackageContainer />
        <AccountDetailsContainer />
        <Text style={[styles.thaoTc, styles.ciTFlexBox]}>Thao tác</Text>
        <Image
          style={[
            styles.materialSymbolsarrowBackIoIcon,
            styles.iphone142Position,
          ]}
          contentFit="cover"
          source={require("../assets/materialsymbolsarrowbackios.png")}
        />
        <Text style={[styles.ciT, styles.ciTFlexBox]}>Cài đặt</Text>
        <DarkModeNO
          wiFiSignalLight={require("../assets/wifi-signal--light.png")}
          darkModeNOPosition="absolute"
          darkModeNOTop={0}
          darkModeNOLeft={4}
        />
        <Text style={[styles.hTr, styles.hTrTypo]}>Hỗ trợ</Text>
        <Text style={[styles.tiKhon, styles.hTrTypo]}>Tài khoản</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone142Position: {
    overflow: "hidden",
    position: "absolute",
  },
  ciTFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  hTrTypo: {
    left: 29,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  thaoTc: {
    top: 497,
    left: 30,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  materialSymbolsarrowBackIoIcon: {
    top: 64,
    left: 23,
    width: 30,
    height: 30,
  },
  ciT: {
    top: 69,
    left: 161,
    fontSize: 24,
    lineHeight: 21,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  hTr: {
    top: 328,
  },
  tiKhon: {
    top: 113,
  },
  iphone142: {
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 390,
    height: 844,
  },
  bngCiT: {
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default BngCiT;
