import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import AppText from '../AppText';
import styles from './styles';

const Quote = ({ symbol, description, digits, onPress }) => {
  const onPressHandler = () => onPress(symbol, description, digits);

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.quote}>
        <AppText bold style={styles.text}>
          {symbol}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

Quote.propTypes = {
  symbol: PropTypes.string,
  description: PropTypes.string,
  digits: PropTypes.number,
  onPress: PropTypes.func,
};

Quote.defaultProps = {
  symbol: '',
  description: 'Here should be a description',
  digits: 0,
  onPress: () => {},
};

export default Quote;
