import { DarkTheme } from 'react-native-paper';
import { colors } from '../../themeConfig';

export const searchBarTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.primary,
  },
};
export default searchBarTheme;
