import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import { PRIMARY_COLOR } from '../../../constants/themes';
import { isAndroid } from '../../../services/detectDeviceOS';
import AppText from '../AppText';
import styles from './styles';

const AppButton = ({ children, onPress, backgroundColor, activeOpacity, ...attrs }) => {
  const Wrapper = isAndroid ? TouchableNativeFeedback : TouchableOpacity;
  const buttonStyles = { backgroundColor };

  return (
    <Wrapper onPress={onPress} activeOpacity={activeOpacity} {...attrs}>
      <View style={[styles.button, buttonStyles]}>
        <AppText bold style={styles.text}>
          {children}
        </AppText>
      </View>
    </Wrapper>
  );
};

AppButton.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  activeOpacity: PropTypes.number,
};

AppButton.defaultProps = {
  onPress: () => {},
  backgroundColor: PRIMARY_COLOR,
  activeOpacity: 0.7,
};

export default AppButton;
