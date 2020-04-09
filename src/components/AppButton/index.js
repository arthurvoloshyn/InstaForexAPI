import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import PropTypes from "prop-types";
import { PRIMARY_COLOR } from '../../constants/themes';
import AppTextBold from '../AppTextBold';
import styles from './styles';

const AppButton = ({ children, onPress, color = PRIMARY_COLOR }) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={[ styles.button, { backgroundColor: color } ]}>
                <AppTextBold style={styles.text}>{children}</AppTextBold>
            </View>
        </Wrapper>
    );
};

AppButton.propTypes = {
    children: PropTypes.node.isRequired
};

export default AppButton;
