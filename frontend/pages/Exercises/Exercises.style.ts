import { StyleSheet } from 'react-native';
import { DarkTheme } from 'react-native-paper';
import { colors, spacing } from '../../themeConfig';

export const searchBarTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.primary,
  },
};

const styles = StyleSheet.create({
  exercise_header: {
    marginTop: spacing.standard,
  },

  fab: {
    bottom: 0,
  },
});
export default styles;
