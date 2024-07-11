import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "@config/colors"; 
import { IText } from "./text";

const H2: React.FC<IText> = ({ value }) => {
  return <Text style={StyleSheets.style}>{value}</Text>;
};

export default H2

const StyleSheets = StyleSheet.create({
    style: {
        fontSize: 20,
        letterSpacing: -0.63,
        color: colors[141625],
        fontWeight: 'bold'
    }
})