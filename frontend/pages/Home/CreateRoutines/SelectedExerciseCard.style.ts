import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../themeConfig';

const CARD_HEIGHT = 60;

const styles = StyleSheet.create({
  wrapper: {
    height: CARD_HEIGHT,
    marginTop: spacing.standard,
  },

  card: {
    flexDirection: 'row',
  },

  text: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    marginLeft: spacing.standard,
  },

  iconContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 6,
    paddingRight: spacing.largest,
  },
});

export default styles;
