import { StyleSheet } from 'react-native';
import { DANGER_COLOR } from '../../../constants/themes';

const styles = StyleSheet.create({
  error: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: DANGER_COLOR,
    fontSize: 20,
    marginBottom: 20,
  },
});

export default styles;
