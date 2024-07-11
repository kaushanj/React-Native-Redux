import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "@config/colors"; 
import { IText } from "./text";

const H1: React.FC<IText> = ({ value }) => {
  return <Text style={StyleSheets.style}>{value}</Text>;
};

export default H1

const StyleSheets = StyleSheet.create({
    style: {
        fontSize: 32,
        letterSpacing: -1,
        color: colors[141625],
        fontWeight: 'bold'
    }
})