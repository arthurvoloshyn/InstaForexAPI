import React from 'react';
import { StatusBar, View } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';

const AppStatusBar = ({ backgroundColor, translucent, ...attrs }) => {
    const statusBarStyles = { backgroundColor };

    return (
        <View style={[styles.default, statusBarStyles]}>
            <StatusBar translucent={translucent} backgroundColor={backgroundColor} {...attrs} />
        </View>
    );
};

AppStatusBar.propTypes = {
    backgroundColor: PropTypes.string,
    translucent: PropTypes.bool,
};

AppStatusBar.defaultProps = {
    backgroundColor: '',
    translucent: true,
};

export default AppStatusBar;
