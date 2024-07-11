import { Text, View } from "react-native";
import { useAuthenticated } from "src/store/reducers/auth";

export default () => {
  const isAuthenticated = useAuthenticated();
  return (
    <View>
      <Text>Is userLoges {isAuthenticated}</Text>
    </View>
  );
};
