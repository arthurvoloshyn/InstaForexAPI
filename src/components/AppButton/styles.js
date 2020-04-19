import { StyleSheet } from 'react-native';
import { LIGHT_COLOR } from '../../constants/themes';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    color: LIGHT_COLOR,
  },
});

export default styles;
