import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import styles from './styles';

const AppText = ({ textStyle, children, ...attrs }) => <Text style={[styles.text, textStyle]} {...attrs}>{children}</Text>;

AppText.propTypes = {
    children: PropTypes.node.isRequired,
    textStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AppText.defaultProps = {
    textStyle: {},
};

export default AppText;
