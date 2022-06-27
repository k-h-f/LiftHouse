import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../themeConfig';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    backgroundColor: colors.highlight,
    marginRight: spacing.standard,
    bottom: spacing.largest,
    right: 0,
  },
});

export default styles;
