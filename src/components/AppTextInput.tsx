import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

import defaultStyles from "../config/styles";

interface IAppTextInput extends TextInputProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
}
const AppTextInput = ({ label, style, ...props }: IAppTextInput) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text style={{ marginTop: 10, color: defaultStyles.color["7E88C3"] }}>
        {label}
      </Text>
      <TextInput
        {...props}
        style={[styles.container, defaultStyles.textInput]}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.color["1E2139"],
  },
});
