import { StyleSheet } from 'react-native';
import { spacing } from '../../themeConfig';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: spacing.standard,
    flexDirection: 'row',
    width: '100%',
  },

  no_routine_message: {
    marginTop: spacing.large,
    flex: 1,
  },
});

export default styles;
