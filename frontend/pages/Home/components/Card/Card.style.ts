import { StyleSheet } from 'react-native';
import { fontColors, fontSizes, spacing } from '../../../../shared/themeConfig';
import { CardSize } from './Card';

const style = (size?: CardSize) => {
  return StyleSheet.create({
    CardWrapper: {
      height: size === CardSize.large ? '50%' : '35%',
      width: size === CardSize.large ? '100%' : '50%',
      marginTop: spacing.small,
      marginBottom: spacing.small,
    },

    Card: {
      height: '100%',
    },

    TextWrapper: {
      margin: spacing.standard,
    },

    Text: {
      margin: spacing.medium,
      fontSize: size === CardSize.large ? fontSizes.h2 : fontSizes.small,
      fontWeight: 'bold',
      color: fontColors.white,
    },
  });
};

export default style;
