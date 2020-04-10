import React from 'react';
import { View } from 'react-native';
import PropTypes from "prop-types";
import { DANGER_COLOR } from "../../constants/themes";
import AppButton from "../AppButton";
import AppText from "../AppText";
import styles from './styles';

const ErrorIndicator = ({ onPress }) => (
    <View style={styles.center}>
        <AppText textStyle={styles.error}>Something went wrong!</AppText>
        <AppButton onPress={onPress} backgroundColor={DANGER_COLOR}>Try again</AppButton>
    </View>
);

ErrorIndicator.propTypes = {
    onPress: PropTypes.func,
};

ErrorIndicator.defaultProps = {
    onPress: () => {},
};

export default ErrorIndicator;
