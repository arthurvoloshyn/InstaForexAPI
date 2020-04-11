import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import AppText from "../AppText";
import styles from './styles';

const Quote = ({ item: { symbol, description, digits }, onPress }) => {
    const onPressHandler = () => onPress(symbol, description, digits);

    return (
        <TouchableOpacity onPress={onPressHandler}>
            <View style={styles.quote}>
                <AppText textStyle={styles.text}>{symbol}</AppText>
            </View>
        </TouchableOpacity>
    );
};

Quote.propTypes = {
    item: PropTypes.shape({
        symbol: PropTypes.string,
        description: PropTypes.string,
        digits: PropTypes.number,
    }),
    onPress: PropTypes.func,
};

Quote.defaultProps = {
    item: {
        symbol: '',
        description: '',
        digits: 0,
    },
    onPress: () => {},
};

export default Quote;
