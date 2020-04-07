import React from "react";
import { StyleSheet, Text } from "react-native";

const AppText = props => {
  return <Text style={{...styles.default, ...props.style}}>{props.children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-regular'
    }
});
