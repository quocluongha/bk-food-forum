import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux";
import NotiScreen from './src/noti/screens/NotiScreen';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
        <NotiScreen/>
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
