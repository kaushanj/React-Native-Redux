import React from "react";
import {
  SafeAreaView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import constants from "expo-constants";

const AppScreen: React.FC<{
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: constants.statusBarHeight,
    flex: 1,
  },
});
