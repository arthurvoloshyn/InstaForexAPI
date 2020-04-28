import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../../constants/themes';

const styles = StyleSheet.create({
  quote: {
    alignItems: 'center',
    borderColor: PRIMARY_COLOR,
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 10,
    padding: 15,
  },
  text: {
    fontSize: 26,
  },
});

export default styles;
