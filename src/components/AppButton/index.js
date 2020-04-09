import React from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Index from '../AppTextBold';
import { PRIMARY_COLOR } from '../../constants/themes';

const Index = ({ children, onPress, color = PRIMARY_COLOR }) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{ ...styles.button, backgroundColor: color }}>
                <Index style={styles.text}>{children}</Index>
            </View>
        </Wrapper>
    );
};

export default Index;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
});
