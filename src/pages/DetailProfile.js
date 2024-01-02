import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Modal,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
// import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";

const DetailProfile = () => {
  const [selectedImage, setSelectedImage] = useState("anh-man-hinh");

  const [name, setName] = useState("Nguyễn Văn A");
  const [email, setEmail] = useState("aaaaaaa@gmail.com");
  const [password, setPassword] = useState("randompassword");
  const [country, setCountry] = useState("Dĩ An, Bình Dương");

  // const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  // const today = new Date();
  // const startDate = getFormatedDate(
  //   today.setDate(today.getDate() + 1),
  //   "YYYY/MM/DD"
  // );
  const [selectedStartDate, setSelectedStartDate] = useState("06/09/1996");
  // const [startedDate, setStartedDate] = useState("12/12/2023");

  // const handleChangeStartDate = (propDate) => {
  //   setStartedDate(propDate);
  // };

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const handleImageSelection = async () => {
    console.log(selectedImage);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  // function renderDatePicker() {
  //   return (
  //     <Modal
  //       animationType="slide"
  //       transparent={true}
  //       visible={openStartDatePicker}
  //     >
  //       <View
  //         style={{
  //           flex: 1,
  //           alignItems: "center",
  //           justifyContent: "center",
  //         }}
  //       >
  //         <View
  //           style={{
  //             margin: 20,
  //             backgroundColor: "#242760",
  //             alignItems: "center",
  //             justifyContent: "center",
  //             borderRadius: 20,
  //             padding: 35,
  //             width: "90%",
  //             shadowColor: "#000",
  //             shadowOffset: {
  //               width: 0,
  //               height: 2,
  //             },
  //             shadowOpacity: 0.25,
  //             shadowRadius: 4,
  //             elevation: 5,
  //           }}
  //         >
  //           <DatePicker
  //             mode="calendar"
  //             minimumDate={startDate}
  //             selected={startedDate}
  //             onDateChanged={handleChangeStartDate}
  //             onSelectedChange={(date) => setSelectedStartDate(date)}
  //             options={{
  //               backgroundColor: "#242760",
  //               textHeaderColor: "#469ab6",
  //               textDefaultColor: "white",
  //               selectedTextColor: "white",
  //               mainColor: "#469ab6",
  //               textSecondaryColor: "white",
  //               borderColor: "rgba(122,146,165,0.1)",
  //             }}
  //           />

  //           <TouchableOpacity onPress={handleOnPressStartDate}>
  //             <Text style={{ color: "white" }}>Close</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </Modal>
  //   );
  // }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 22,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            left: 0,
          }}
        ></TouchableOpacity>

        <Text
          style={[
            styles.text,
            { fontWeight: "500", fontSize: 20, textAlign: "center" },
          ]}
        >
          Chỉnh Sửa Hồ Sơ
        </Text>
      </View>

      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginVertical: 22,
          }}
        >
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={require("../../assets/profile.jpg")}
              style={styles.image}
              resizeMode="center"
            ></Image>

            <View style={{ alignSelf: "center" }}>
              <View style={styles.profileImage}>
                {/* <Image source={require("../../assets/profile.jpg")} style={styles.image} resizeMode="center"></Image> */}
              </View>

              <View style={styles.active}></View>
            </View>

            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}
            ></View>
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>Name</Text>
            <View style={styles.textBox}>
              <TextInput
                value={name}
                onChangeText={(value) => setName(value)}
                editable={true}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>Email</Text>
            <View style={styles.textBox}>
              <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                editable={true}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>Password</Text>
            <View style={styles.textBox}>
              <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                editable={true}
                secureTextEntry
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={styles.h4Text}>Date or Birth</Text>
            <TouchableOpacity
              onPress={handleOnPressStartDate}
              style={styles.textBox}
            >
              <Text>{selectedStartDate}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            marginBottom: 6,
          }}
        >
          <Text style={styles.h4Text}>Country</Text>
          <View style={styles.textBox}>
            <TextInput
              value={country}
              onChangeText={(value) => setCountry(value)}
              editable={true}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#242760",
            height: 44,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Save Change
          </Text>
        </TouchableOpacity>

        {/* {renderDatePicker()} */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 170,
    width: 170,
    borderRadius: 85,
    borderWidth: 2,
    borderColor: "#242760",
  },
  h4Text: {
    color: "black",
  },
  h3Text: {
    color: "black",
  },
  textBox: {
    height: 44,
    width: "100%",
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 6,
    justifyContent: "center",
    paddingLeft: 8,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  modifyProfileImage: {
    backgroundColor: "red",
    position: "absolute",
    bottom: 28,
    right: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
});

export default DetailProfile;
