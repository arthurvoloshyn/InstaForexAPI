import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { PRIMARY_COLOR } from '../../../constants/themes';
import styles from './styles';

const AppLoader = ({ size, color, ...attrs }) => (
  <View style={styles.loader}>
    <ActivityIndicator size={size} color={color} {...attrs} />
  </View>
);

AppLoader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

AppLoader.defaultProps = {
  size: 'large',
  color: PRIMARY_COLOR,
};

export default AppLoader;
