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
    position: 'absolute',
    backgroundColor: colors.highlight,
    marginRight: spacing.standard,
    bottom: 0,
    right: 0,
  },
});
export default styles;
