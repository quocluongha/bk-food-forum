import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "@rneui/themed";
import PaginationDot from "react-native-animated-pagination-dot";

function GeneralProfile(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant="titleLarge" style={{ textAlign: "center" }}>
        Profile
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}></View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../../assets/profile.jpg")}
              style={styles.image}
              resizeMode="center"
            ></Image>
          </View>

          <View style={styles.active}></View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            Nguyễn Văn A
          </Text>
          <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
            Dĩ An, Bình Dương
          </Text>
        </View>

        <Pressable
          style={styles.modifyButton}
          onPress={() => {
            props.navigation.navigate("DetailProfile");
          }}
        >
          <Text style={styles.modifyButtonText}>Details</Text>
        </Pressable>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>69</Text>
            <Text style={[styles.text, styles.subText]}>lượt thích</Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 24 }]}>86</Text>
            <Text style={[styles.text, styles.subText]}>bình luận</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24 }]}>9</Text>
            <Text style={[styles.text, styles.subText]}>bài viết</Text>
          </View>
        </View>
        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../../assets/food1.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
              <Text
                style={[
                  styles.text,
                  { fontWeight: "600", fontSize: 14, textAlign: "center" },
                ]}
              >
                Pancake sốt đậu gà
              </Text>
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={require("../../assets/food2.jpg")}
                style={styles.image}
                resizeMode="cover"
              ></Image>
              <Text
                style={[
                  styles.text,
                  { fontWeight: "600", fontSize: 14, textAlign: "center" },
                ]}
              >
                Bánh mì hạnh nhân
              </Text>
            </View>
            {/* <View style={styles.mediaImageContainer}>
                    <Image source={require("../../assets/media3.jpg")} style={styles.image} resizeMode="cover"></Image>
                    <Text style={[styles.text, { fontWeight: "600", fontSize: 14, textAlign: "center" }]}>Hồ sơ người dùng</Text>
                </View> */}
          </ScrollView>
        </View>

        <View style={{ marginTop: 12, marginLeft: "45%" }}>
          <PaginationDot activeDotColor={"grey"} curPage={0} maxPage={3} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#242760",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#242760",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  modifyButton: {
    width: "40%",
    backgroundColor: "#242760",
    borderRadius: 10,
    marginLeft: "30%",
    marginTop: 12,
  },
  modifyButtonText: {
    color: "white",
    fontSize: 16,
    padding: 8,
    textAlign: "center",
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    right: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 39,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  recent: {
    marginLeft: 78,
    marginTop: 32,
    marginBottom: 6,
    fontSize: 10,
  },
  recentItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  activityIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
});

export default GeneralProfile;
