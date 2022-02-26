import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../themeConfig';

const styles = StyleSheet.create({
  wrapper: {
    height: 48,
    marginTop: spacing.standard,
    justifyContent: 'center',
    borderRadius: 12,
  },

  exercise_text: {
    color: colors.textPrimary,
    marginLeft: spacing.standard,
    fontWeight: 'bold',
  },

  exercise_text_highlighted: {
    color: colors.highlight,
    marginLeft: spacing.standard,
    fontWeight: 'bold',
  },
});

export default styles;
