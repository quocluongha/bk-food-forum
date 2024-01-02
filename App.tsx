import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { queryClient } from "./src/api";
import { AppNavigator } from "./src/navigation";
import { persistor, store } from "./src/redux/store";
import { ThemeProvider } from "./src/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <AppNavigator />
            </GestureHandlerRootView>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
