import { Provider } from "react-redux";
import store from "./src/store/configureStore";

import { useAuthenticated } from "./src/store/reducers/auth";

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
  const isLogged = useAuthenticated();

  return (
    <View style={{ flex: 1 }}>
      {isLogged ? <HomeScreen /> : <LoginScreen />}
    </View>
  );
};
