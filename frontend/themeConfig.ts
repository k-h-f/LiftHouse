import { DarkTheme } from '@react-navigation/native';

export const colors = {
  primary: '#051E3E',
  highlight: '#BB86FC',
  unfocused: '#A1A1A1',
  background: '#051E3E',
  textPrimary: '#FFFFFF',
  white: '#FFFFFF',
  card: '#251E3E',
  popup: '#242526',
  input: '#2C2D2E',
  error: 'EF5350',
};

export const spacing = {
  small: 2,
  medium: 4,
  large: 8,
  standard: 16,
  largest: 32,
};

export const sizes = {
  iconSize: 24,
  largeIconSize: 42,
};

export const fontSizes = {
  header: 24,
  caption: 10,
  default: 14,
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
