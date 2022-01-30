import { StyleSheet } from 'react-native';
import { DarkTheme } from 'react-native-paper';
import { colors } from '../../themeConfig';

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
});

export const textInputTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.input,
  },
};

export default styles;
