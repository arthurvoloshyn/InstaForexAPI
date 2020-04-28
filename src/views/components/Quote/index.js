import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import AppText from '../AppText';
import styles from './styles';

const Quote = ({ item, onPress }) => {
  const onPressHandler = () => onPress(item);

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.quote}>
        <AppText bold style={styles.text}>
          {item.symbol}
        </AppText>
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
    description: 'Here should be a description',
    digits: 0,
  },
  onPress: () => {},
};

export default Quote;
