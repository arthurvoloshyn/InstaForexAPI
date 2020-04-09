import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import styles from './styles';

const AppTextBold = ({ style, children }) => <Text style={[styles.default, style]}>{children}</Text>;

AppTextBold.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AppTextBold.defaultProps = {
    style: {},
};

export default AppTextBold;
