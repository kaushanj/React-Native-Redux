import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "@config/colors"; 
import { IText } from "./text";

const H3: React.FC<IText> = ({ value, textStyle }) => {
  return <Text style={[StyleSheets.style, textStyle]}>{value}</Text>;
};

export default H3

const StyleSheets = StyleSheet.create({
    style: {
        fontSize: 16,
        letterSpacing: -0.8,
        color: colors[141625],
        fontWeight: 'bold'
    }
})