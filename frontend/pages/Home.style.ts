import { StyleSheet } from 'react-native';
import { spacing } from '../themeConfig';

const styles = StyleSheet.create({
  header_wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 60,
  },

  routines_wrapper: {
    marginTop: spacing.standard,
  },
});

export default styles;
