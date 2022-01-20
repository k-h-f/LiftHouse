import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import GlobalText from '../../shared/components/GlobalText';
import { colors } from '../../themeConfig';
import styles from './EmptyRoutine.style';

const EmptyRoutine: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <GlobalText style={styles.no_routine_message}>
        No Routines added. Start creating routines
      </GlobalText>
      <Button testID="create-btn" color={colors.highlight}>
        CREATE
      </Button>
    </View>
  );
};

export default EmptyRoutine;
