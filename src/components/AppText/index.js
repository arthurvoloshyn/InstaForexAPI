import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import styles from './styles';

const AppText = ({ textStyle, children, ...attrs }) => <Text {...attrs} style={[styles.default, textStyle]}>{children}</Text>;

AppText.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AppText.defaultProps = {
    style: {},
};

export default AppText;
