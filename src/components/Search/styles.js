import { StyleSheet } from 'react-native';
import { LIGHT_COLOR, MUTED_COLOR } from '../../constants/themes';
import { deviceWidth } from '../../services/getDeviceSize';

const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    backgroundColor: LIGHT_COLOR,
    borderColor: MUTED_COLOR,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    fontSize: 26,
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    width: deviceWidth,
  },
});

export default styles;
