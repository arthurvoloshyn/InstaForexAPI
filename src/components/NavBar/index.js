import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import AppText from '../AppText';
import styles from './styles';

const NavBar = ({ title, ...attrs }) => (
    <View style={styles.navbar} {...attrs}>
        <AppText style={styles.text}>{title}</AppText>
    </View>
);

NavBar.propTypes = {
    title: PropTypes.string,
};

NavBar.defaultProps = {
    title: 'InstaForex',
};

export default NavBar;


