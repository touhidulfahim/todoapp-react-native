import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import Store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/Login/Login";
import NavigationTab from "./src/components/navigationTab/NavigationTab";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={Store}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={NavigationTab} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
