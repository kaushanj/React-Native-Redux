
import { StyleProp, TextStyle } from "react-native";
import color from "./colors";
import { ColorTypes } from "./types/color";

interface IStyles {
    color: Record<ColorTypes, string>,
    textInput: StyleProp<TextStyle>
    text: StyleProp<TextStyle>
}


 const Styles: IStyles = {
    color,
    textInput: {
      fontSize: 16,
      // fontFamily: Platform.OS === "ios" ? "Avenir" : "Roboto",
      // width: "100%",
      fontWeight: "500",
      color: 'white',
      padding: 10,
      marginVertical: 8,
      backgroundColor: color['1E2139']
    },
    text: {
      color: color['F8F8FB'],
      fontWeight: "500",
    },
  };


  export default Styles