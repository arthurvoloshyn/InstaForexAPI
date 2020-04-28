import { StyleSheet } from 'react-native';
import { LIGHT_COLOR, MUTED_COLOR } from '../../../constants/themes';
import { deviceHeight, deviceWidth } from '../../../services/getDeviceSize';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 10,
  },
  quotes: {
    backgroundColor: LIGHT_COLOR,
    borderColor: MUTED_COLOR,
    borderRadius: 5,
    borderWidth: 1,
    height: deviceHeight - 270,
    padding: 10,
    width: deviceWidth,
  },
});

export default styles;
