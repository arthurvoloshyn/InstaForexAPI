import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import PropTypes from "prop-types";
import { PRIMARY_COLOR } from '../../constants/themes';
import AppTextBold from '../AppTextBold';
import styles from './styles';

const AppButton = ({ children, onPress, color, activeOpacity }) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
        <Wrapper onPress={onPress} activeOpacity={activeOpacity}>
            <View style={[ styles.button, { backgroundColor: color } ]}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </Wrapper>
    );
};

AppButton.propTypes = {
    children: PropTypes.node.isRequired,
    onPress: PropTypes.func,
    color: PropTypes.string,
    activeOpacity: PropTypes.number,
};

AppButton.defaultProps = {
    onPress: () => {},
    color: PRIMARY_COLOR,
    activeOpacity: 0.7,
};

export default AppButton;
