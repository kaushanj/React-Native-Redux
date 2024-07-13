import AppButton from "@components/AppButton";
import {  View } from "react-native";
import useAuth from "src/auth/useAuth";


export default () => {
  const d = useAuth()
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppButton title="Logout" onPress={() => d.onLogout()}/>
    </View>
  );
};
