import React from "react";
import { StyleSheet, Text } from "react-native";

const Index = props => {
  return <Text style={{...styles.default, ...props.style}}>{props.children}</Text>;
};

export default Index;

const styles = StyleSheet.create({
    default: {
        fontFamily: 'roboto-bold'
    }
});
