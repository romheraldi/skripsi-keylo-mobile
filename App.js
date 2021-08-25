import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import Home from "./src/screens/home";
import ForgotPassword from "./src/screens/forgotPassword";

export default class App extends React.Component {
  state = { isFontLoaded: false };

  async componentDidMount() {
    await Font.loadAsync({
      PoppinsRegular: require("./src/fonts/Poppins-Regular.ttf"),
      PoppinsSemiBold: require("./src/fonts/Poppins-SemiBold.ttf"),
    });
    this.setState({ isFontLoaded: true });
  }

  render() {
    const Stack = createStackNavigator();
    return this.state.isFontLoaded === true ? (
        <Provider store={store}>
          <NavigationContainer>
            <StatusBar hidden />
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                  headerShown: false,
                  gestureEnabled: false,
                }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
    ) : (
        <AppLoading
            onFinish={() => this.setState({ isFontLoaded: true })}
            onError={console.warn}
        />
    );
  }
}