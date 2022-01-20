import { StyleSheet } from 'react-native';
import { colors } from '../../themeConfig';

const styles = StyleSheet.create({
  three_dots: {
    marginTop: 4,
  },
});

export const optionsStyles = {
  optionWrapper: {
    backgroundColor: colors.popup,
    padding: 12,
  },
  optionText: {
    color: colors.textPrimary,
  },
};

export default styles;
