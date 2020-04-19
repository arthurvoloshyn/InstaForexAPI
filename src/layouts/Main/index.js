import React from 'react';
import { View } from 'react-native';
import { PRIMARY_COLOR, LIGHT_COLOR } from '../../constants/themes';
import { isIOS } from '../../services/detectDeviceOS';
import Navigation from '../../navigation';
import AppStatusBar from '../../components/AppStatusBar';
import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <AppStatusBar
      backgroundColor={isIOS ? LIGHT_COLOR : PRIMARY_COLOR}
      barStyle={isIOS ? 'dark-content' : 'light-content'}
    />

    <View style={styles.container}>
      <Navigation />
    </View>
  </View>
);

export default Main;
