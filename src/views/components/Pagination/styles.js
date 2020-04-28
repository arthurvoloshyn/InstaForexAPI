import { StyleSheet } from 'react-native';
import { deviceWidth } from '../../../services/getDeviceSize';

const styles = StyleSheet.create({
  body: {
    width: deviceWidth - 150,
  },
  container: {
    marginTop: 20,
    width: deviceWidth - 30,
  },
  pagination: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
  },
});

export default styles;
