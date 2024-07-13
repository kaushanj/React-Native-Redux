import { Provider } from "react-redux";
import store from "./src/store/configureStore";
import * as SplashScreen from "expo-splash-screen";

import LoginScreen from "@screens/LoginScreen";
import HomeScreen from "@screens/HomeScreen";
import { View } from "react-native";
import useAuth from "src/auth/useAuth";
import { NavigationContainer } from "@react-navigation/native";
import { useCallback } from "react";

export default function App() {
  return (
    <Provider store={store}>
      <Authentication />
    </Provider>
  );
}

const Authentication = () => {
  const { loggedIn, onRefresh } = useAuth();

  const checkAuthentication = () => {
    onRefresh();
  };

  const onLayoutRootView = useCallback(async () => {
    if (typeof loggedIn != "undefined") {
      await SplashScreen.hideAsync();
    }
  }, [loggedIn]);

  if (typeof loggedIn == "undefined") {
    checkAuthentication();
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer onReady={onLayoutRootView}>
        {loggedIn ? <HomeScreen /> : <LoginScreen />}
      </NavigationContainer>
    </View>
  );
};
