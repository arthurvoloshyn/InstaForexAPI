import React from "react";
import { StyleSheet, Text } from "react-native";

const AppTextBold = props => {
  return <Text style={{...styles.default, ...props.style}}>{props.children}</Text>;
};

export default AppTextBold;

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-bold'
    }
});