import { StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../themeConfig';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.card,
  },

  title_wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },

  title: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: fontSizes.default,
    fontWeight: 'bold',
  },

  paragraph: {
    color: colors.unfocused,
  },
});

export default styles;
