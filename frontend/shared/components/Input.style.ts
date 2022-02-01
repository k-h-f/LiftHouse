import { DarkTheme } from 'react-native-paper';
import { colors } from '../../themeConfig';

export const textInputTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.input,
  },
};

export const errorHelperTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    colors: colors.error,
  },
};
