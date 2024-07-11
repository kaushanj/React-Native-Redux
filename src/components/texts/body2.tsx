import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "@config/colors"; 
import { IText } from "./text";

const Body2: React.FC<IText> = ({ value }) => {
  return <Text style={StyleSheets.style}>{value}</Text>;
};

export default Body2

const StyleSheets = StyleSheet.create({
    style: {
        fontSize: 11,
        letterSpacing: -0.23,
        color: colors[141625],
    }
})