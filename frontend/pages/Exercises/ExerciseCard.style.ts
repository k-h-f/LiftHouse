import { StyleSheet } from "react-native";
import { colors, spacing } from "../../themeConfig";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.card,
    height: 48,
    marginTop: spacing.standard,
    justifyContent: 'center',
    borderRadius: 12,
  },

  exercise_text: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
