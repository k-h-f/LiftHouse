import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../../themeConfig';

const CARD_HEIGHT = 60;

const styles = StyleSheet.create({
  wrapper: {
    height: CARD_HEIGHT,
    marginTop: spacing.standard,
  },

  card: {
    backgroundColor: colors.card_gray,
    borderRadius: 6,
    flexDirection: 'row',
  },

  text: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    marginVertical: 14,
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
