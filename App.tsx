import { Provider } from "react-redux";
import store from "./src/store/configureStore";

import {
  checkAuthenticated,
  useAuthenticated,
} from "./src/store/reducers/auth";

import LoginScreen from "@screens/LoginScreen";
import HomeScreen from "@screens/HomeScreen";
import { View } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <Authentication />
    </Provider>
  );
}

const Authentication = () => {
  const isAuthenticated = useAuthenticated();
  console.log(isAuthenticated);

  return (
    <View style={{ flex: 1 }}>
      {isAuthenticated ? <HomeScreen /> : <LoginScreen />}
    </View>
  );
};
