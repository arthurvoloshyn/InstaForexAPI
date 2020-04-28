import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import AppText from '../AppText';
import styles from './styles';

const Row = ({ title, value }) => (
  <View style={styles.block}>
    <AppText style={styles.text}>
      <Text style={styles.header}>{title}:</Text> {value}
    </AppText>
  </View>
);

Row.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Row.defaultProps = {
  value: 'Unknown',
};

export default Row;
