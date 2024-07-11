import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "@config/colors"; 
import { IText } from "./text";

const Body1: React.FC<IText> = ({ value }) => {
  return <Text style={StyleSheets.style}>{value}</Text>;
};

export default Body1

const StyleSheets = StyleSheet.create({
    style: {
        fontSize: 12,
        letterSpacing: -0.25,
        color: colors[141625],
    }
})