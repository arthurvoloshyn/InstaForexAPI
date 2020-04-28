import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import AppText from '../AppText';
import styles from './styles';

const ErrorIndicator = ({ children }) => (
  <View style={styles.error}>
    <AppText style={styles.text}>Something went wrong!</AppText>
    {children}
  </View>
);

ErrorIndicator.propTypes = {
  children: PropTypes.node,
};

ErrorIndicator.defaultProps = {
  children: null,
};

export default ErrorIndicator;
