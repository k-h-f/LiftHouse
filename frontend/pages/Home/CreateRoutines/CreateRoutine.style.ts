import { StyleSheet } from 'react-native';
import { colors } from '../../../themeConfig';

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    paddingBottom: '50%',
  },

  input_wrapper: {
    flexDirection: 'row',
  },

  text_input: {
    flex: 1,
    marginTop: 28,
  },

  header: {
    color: colors.highlight,
    fontSize: 20,
  },

  icon: {
    marginTop: 20,
  },
});

export default styles;
