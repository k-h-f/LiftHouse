/**
 * This is a shared theme/house style that all pages should follow
 */
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#8F3D4D',
  secondary: '#2B1D42',
  focused: '#f3b88d',
  unfocused: '#4a2f48',
};

export const spacing = {
  small: 2,
  medium: 4,
  large: 8,
  standard: 16,
  largest: 32,
};

export const pageMarginSizes = {
  all: 14,
};

export const sizes = {
  iconSize: 26,
};

export const fontSizes = {
  h1: 24,
  h2: 18,
  default: 14,
  small: 12,
  caption: 10,
};

export const fontColors = {
  primary: '#000',
  white: '#FFF',
};

export const HouseStyle = StyleSheet.create({
  H1: {
    textAlign: 'left',
    paddingBottom: spacing.standard,
    fontSize: fontSizes.h1,
    color: fontColors.primary,
    fontWeight: 'bold',
  },

  H2: {
    fontSize: fontSizes.h2,
    color: fontColors.primary,
    paddingBottom: spacing.standard,
    paddingTop: spacing.standard,
    fontWeight: 'bold',
  },
});
