import React from 'react';
import { StatusBar, View } from 'react-native';
import Constants from 'expo-constants';

const AppStatusBar = ({ backgroundColor, translucent, ...attrs }) => {
    const statusBarStyles = { backgroundColor, height: Constants.statusBarHeight };

    return (
        <View style={statusBarStyles}>
            <StatusBar translucent={translucent} backgroundColor={backgroundColor} {...attrs} />
        </View>
    );
};

export default AppStatusBar;
