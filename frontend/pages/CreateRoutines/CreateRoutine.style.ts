import { StyleSheet } from 'react-native';
import { colors } from '../../themeConfig';

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    width: '80%',
  },

  input_wrapper: {
    height: 72,
  },

  text_input: {
    marginTop: 28,
  },

  header: {
    textAlign: 'center',
    color: colors.highlight,
    fontSize: 20,
  },

  icon: {
    marginTop: 24,
    color: colors.highlight,
    alignItems: 'flex-end',
  },
});

export default styles;
