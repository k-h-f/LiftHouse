import { DarkTheme } from '@react-navigation/native';

export const colors = {
  primary: '#051E3E',
  highlight: '#BB86FC',
  unfocused: '#A1A1A1',
  background: '#051E3E',
  textPrimary: '#FFFFFF',
};

export const sizes = {
  iconSize: 24,
};

const HouseTheme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    background: colors.primary,
    text: colors.textPrimary,
    border: colors.primary,
  },
};

export default HouseTheme;
