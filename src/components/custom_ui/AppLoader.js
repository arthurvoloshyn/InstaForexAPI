import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { MAIN_COLOR } from '../../constants/themes';

export const AppLoader = () => (
    <View style={styles.center}>
        <ActivityIndicator size="large" color={MAIN_COLOR} />
    </View>
);

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
