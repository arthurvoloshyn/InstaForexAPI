import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import AppText from "../AppText";
import styles from './styles';

const Row = ({ title, value }) => (
    <View style={styles.block}>
        <AppText textStyle={styles.text}>
            <Text style={styles.header}>{title}:</Text> {value}
        </AppText>
    </View>
);

Row.propTypes = {
    title: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

Row.defaultProps = {
    title: '',
    value: '',
};

export default Row;
