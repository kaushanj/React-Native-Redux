import {
    Animated,
    GestureResponderEvent,
    StyleSheet,
    TouchableWithoutFeedback,
    ViewProps,
  } from "react-native";
  
  import colors from "@config/colors";
  import H3 from "./texts/H3";
  
  interface IAppButton extends ViewProps {
    title: string;
    onPress?: (() => void) | undefined;
  }
  
  const AppButton = ({ title, onPress, ...props }: IAppButton) => {

    const animation = new Animated.Value(20);
  
    const onTap = () => {
        
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 30,
          duration: 100,
          easing: (v) => v * 0.5,
          useNativeDriver: false,
        }),
        Animated.timing(animation, {
          toValue: 20,
          duration: 100,
          easing: (v) => v * 0.5,
          useNativeDriver: false,
        }),
      ]).start();
  
      onPress && onPress();
    };
  
    return (
      <TouchableWithoutFeedback {...props} onPress={onTap}>
        <Animated.View
          style={[StyleSheets.container, { paddingHorizontal: animation }]}
        >
          <H3 value={title} textStyle={{ textTransform: "uppercase" }} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };
  
  export default AppButton;
  
  const StyleSheets = StyleSheet.create({
    container: {
      borderRadius: 100,
      paddingVertical: 10,
      alignItems: "center",
      backgroundColor: colors["7C5DFA"],
    },
  });
  