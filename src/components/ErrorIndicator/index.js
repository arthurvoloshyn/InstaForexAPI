import React from 'react';
import { View } from 'react-native';
import PropTypes from "prop-types";
import AppButton from "../AppButton";
import AppText from "../AppText";
import styles from './styles';

const ErrorIndicator = ({ onPress }) => (
    <View style={styles.center}>
        <AppText style={styles.error}>Something went wrong!</AppText>
        <AppButton onPress={onPress}>Try again</AppButton>
    </View>
);

ErrorIndicator.propTypes = {
    onPress: PropTypes.func,
};

ErrorIndicator.defaultProps = {
    onPress: () => {},
};

export default ErrorIndicator;
