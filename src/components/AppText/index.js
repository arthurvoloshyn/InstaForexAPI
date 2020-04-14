import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import styles from './styles';

const AppText = ({ style, children, ...attrs }) => (
    <Text style={[styles.text, style]} {...attrs}>{children}</Text>
);

AppText.propTypes = {
    children: PropTypes.node.isRequired,
    style: Text.propTypes.style
};

AppText.defaultProps = {
    style: {},
};

export default AppText;
