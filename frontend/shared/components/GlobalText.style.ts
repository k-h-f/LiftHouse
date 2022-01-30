import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../themeConfig';

const styles = StyleSheet.create({
  text: {
    color: colors.textPrimary,
  },

  header: {
    color: colors.textPrimary,
    fontSize: fontSizes.header,
  },

  caption: {
    color: colors.textPrimary,
    fontSize: fontSizes.caption,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
});

export default styles;
