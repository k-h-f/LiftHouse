import { StyleSheet } from 'react-native';
import { spacing } from '../../../themeConfig';

const styles = StyleSheet.create({
  wrapper: {
    height: '95%',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  exercise_header: {
    marginTop: spacing.standard,
  },
});

export default styles;
