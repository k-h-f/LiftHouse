import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../themeConfig';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  fab: {
    position: 'absolute',
    backgroundColor: colors.highlight,
    marginRight: spacing.standard,
    bottom: spacing.largest,
    right: 0,
  },

  exercise_header: {
    marginTop: spacing.standard,
  },
});

export default styles;
