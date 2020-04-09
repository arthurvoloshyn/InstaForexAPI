import React from 'react';
import { StatusBar, View } from 'react-native';
import styles from './styles';

const AppStatusBar = ({ backgroundColor, translucent, ...attrs }) => {
    const statusBarStyles = { backgroundColor };

    return (
        <View style={[styles, statusBarStyles]}>
            <StatusBar translucent={translucent} backgroundColor={backgroundColor} {...attrs} />
        </View>
    );
};

export default AppStatusBar;
