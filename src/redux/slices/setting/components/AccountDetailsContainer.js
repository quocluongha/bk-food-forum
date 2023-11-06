import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AccountDetailsContainer = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <View style={styles.xemChiTitHSParent}>
        <Text style={[styles.xemChiTit, styles.boMtTiTypo]}>
          Xem chi tiết hồ sơ
        </Text>
        <Text style={[styles.boMtTi, styles.boMtTiTypo]}>
          Bảo mật tài khoản
        </Text>
        <Text style={[styles.tyChnThng, styles.boMtTiTypo]}>
          Tùy chọn thông báo
        </Text>
        <Text style={[styles.quynRingT, styles.boMtTiTypo]}>
          Quyền riêng tư
        </Text>
        <Image
          style={[styles.icoutlineLockIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icoutlinelock.png")}
        />
        <Image
          style={[styles.iconamoonnotification, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconamoonnotification.png")}
        />
        <Image
          style={[styles.materialSymbolsprivacyTipOIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/materialsymbolsprivacytipoutline.png")}
        />
        <Image
          style={[styles.iconamoonprofileLight, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconamoonprofilelight.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 172,
    width: 342,
    left: "50%",
    marginLeft: -171,
    position: "absolute",
  },
  boMtTiTypo: {
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
    left: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDarkslateblue,
    top: 0,
  },
  xemChiTit: {
    top: 8,
  },
  boMtTi: {
    top: 47,
  },
  tyChnThng: {
    top: 86,
  },
  quynRingT: {
    top: 125,
  },
  icoutlineLockIcon: {
    top: 117,
  },
  iconamoonnotification: {
    top: 78,
  },
  materialSymbolsprivacyTipOIcon: {
    top: 39,
  },
  iconamoonprofileLight: {
    top: 0,
  },
  xemChiTitHSParent: {
    top: 13,
    left: 16,
    width: 220,
    height: 147,
    position: "absolute",
  },
  rectangleParent: {
    top: 140,
  },
});

export default AccountDetailsContainer;
