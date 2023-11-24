// npm install @react-navigation/native --save
// npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save
// npm install @react-navigation/drawer --save
// npm install @react-native-async-storage/async-storage 
// npm install @react-navigation/native-stack

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailProfile from './src/pages/DetailProfile';
import GeneralProfile from './src/pages/GeneralProfile';

// import RegisterScreen from './src/redux/slice/auth/Registerscreen';
// import LoginScreen from './src/redux/slice/auth/Loginscreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen options={{headerShown: false}} name = "DetailProfile" component={DetailProfile} />
        <Stack.Screen options={{headerShown: false}} name = "GeneralProfile" component={GeneralProfile} />

        {/* <Stack.Screen options={{headerShown: false}} name = "Regscreen" component={RegisterScreen} />
        <Stack.Screen options={{headerShown: false}} name = "Loginscreen" component={LoginScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;