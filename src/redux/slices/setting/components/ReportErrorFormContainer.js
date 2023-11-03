import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ReportErrorFormContainer = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <View style={styles.icsharpOutlinedFlagParent}>
        <Image
          style={[styles.icsharpOutlinedFlagIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icsharpoutlinedflag.png")}
        />
        <Text style={[styles.boCoLi, styles.ngXutTypo]}>Báo cáo lỗi</Text>
        <Text style={[styles.dngTiKhon, styles.ngXutTypo]}>
          Dùng tài khoản khác
        </Text>
        <Text style={[styles.ngXut, styles.ngXutTypo]}>Đăng xuất</Text>
        <Image
          style={[styles.mdilogoutIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mdilogout.png")}
        />
        <Image
          style={[styles.icsharpPeopleOutlineIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icsharppeopleoutline.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 133,
    width: 342,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    overflow: "hidden",
    height: 30,
    width: 30,
    left: 0,
    position: "absolute",
  },
  ngXutTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 14,
    fontSize: FontSize.size_base,
    left: 66,
    position: "absolute",
  },
  groupChild: {
    marginLeft: -171,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorDarkslateblue,
    top: 0,
  },
  icsharpOutlinedFlagIcon: {
    top: 0,
  },
  boCoLi: {
    top: 8,
  },
  dngTiKhon: {
    top: 47,
  },
  ngXut: {
    top: 86,
  },
  mdilogoutIcon: {
    top: 78,
  },
  icsharpPeopleOutlineIcon: {
    top: 39,
  },
  icsharpOutlinedFlagParent: {
    top: 13,
    left: 12,
    width: 224,
    height: 108,
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -174,
    top: 524,
  },
});

export default ReportErrorFormContainer;
