import { StyleSheet } from 'react-native';
import { colors } from '../../themeConfig';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.card,
  },

  title_wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },

  three_dots: {
    marginTop: 4,
  },

  title: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: 'bold',
  },

  paragraph: {
    color: colors.unfocused,
  },
});

export const optionsStyles = {
  optionWrapper: {
    backgroundColor: colors.popup,
    padding: 12,
  },
  optionText: {
    color: colors.textPrimary,
  },
};

export default styles;
