import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Platform, View } from 'react-native';
import { THEME } from '../theme';
import AppTextBold from './custom_ui/AppTextBold';

const NavBar = ({ title }) => {
    return (
        <View
            style={{
                ...styles.navbar,
                ...Platform.select({
                    ios: styles.navbarIos,
                    android: styles.navbarAndroid,
                }),
            }}
        >
            <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    );
};

NavBar.propTypes = {
    title: PropTypes.string,
};

export default NavBar;

const styles = StyleSheet.create({
    navbar: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR,
    },
    navbarIos: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1,
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
        fontSize: 20,
    },
});
