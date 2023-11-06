import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SupportPackageContainer = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={styles.giNgKCaTiParent}>
        <Text style={[styles.giNgK, styles.giNgKTypo]}>
          Gói đăng ký của tôi
        </Text>
        <Text style={[styles.ccCuHi, styles.giNgKTypo]}>
          Các câu hỏi thường gặp
        </Text>
        <Text style={[styles.iuKhonV, styles.giNgKTypo]}>
          Điều khoản và trách nhiệm
        </Text>
        <Image
          style={[styles.tablercircleLetterIIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/tablercircleletteri.png")}
        />
        <Image
          style={[styles.mdiquestionMarkCircleOutliIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mdiquestionmarkcircleoutline.png")}
        />
        <Image
          style={[styles.materialSymbolscreditCardOIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/materialsymbolscreditcardoutline.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 132,
    width: 342,
    left: "50%",
    marginLeft: -171,
    position: "absolute",
  },
  giNgKTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_base,
    left: 66,
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    height: 30,
    width: 30,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDarkslateblue,
    top: 0,
  },
  giNgK: {
    top: 8,
  },
  ccCuHi: {
    top: 47,
  },
  iuKhonV: {
    top: 86,
  },
  tablercircleLetterIIcon: {
    top: 78,
    left: 0,
    overflow: "hidden",
    height: 30,
    width: 30,
  },
  mdiquestionMarkCircleOutliIcon: {
    top: 39,
    left: 0,
    overflow: "hidden",
    height: 30,
    width: 30,
  },
  materialSymbolscreditCardOIcon: {
    left: 1,
    top: 0,
  },
  giNgKCaTiParent: {
    top: 12,
    left: 16,
    width: 271,
    height: 108,
    position: "absolute",
  },
  rectangleParent: {
    top: 352,
  },
});

export default SupportPackageContainer;
