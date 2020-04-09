import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import PropTypes from "prop-types";
import { PRIMARY_COLOR } from '../../constants/themes';
import { isAndroid } from "../../services/detectDevice";
import AppText from '../AppText';
import styles from './styles';

const AppButton = ({ children, onPress, color, activeOpacity, ...attrs }) => {
    const Wrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;
    const buttonStyles = { backgroundColor: color };

    return (
        <Wrapper {...attrs} onPress={onPress} activeOpacity={activeOpacity}>
            <View style={[styles.button, buttonStyles]}>
                <AppText style={styles.text}>{children}</AppText>
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
