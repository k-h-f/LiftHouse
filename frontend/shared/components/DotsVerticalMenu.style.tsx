import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../themeConfig';

const styles = StyleSheet.create({
  three_dots: {
    marginTop: spacing.medium,
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
