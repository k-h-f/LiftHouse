import { DarkTheme } from '@react-navigation/native';

export const colors = {
  primary: '#051E3E',
  highlight: '#BB86FC',
  unfocused: '#A1A1A1',
  background: '#051E3E',
  textPrimary: '#FFFFFF',
  card: '#251E3E',
  popup: '#242526',
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
