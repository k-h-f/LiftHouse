import React from 'react';
import { View } from 'react-native';
import GlobalText from '../../shared/components/GlobalText';
import styles from './CreateRoutine.style';
import { IconButton } from 'react-native-paper';
import { colors, sizes } from '../../themeConfig';
import Input from '../../shared/components/Input';

const CreateRoutine: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <GlobalText style={styles.header}>Routine Name</GlobalText>
      <View style={styles.input_wrapper}>
        <Input style={styles.text_input} />
        <IconButton
          style={styles.icon}
          icon="arrow-right-drop-circle"
          size={sizes.largeIconSize}
          color={colors.highlight}
        />
      </View>
    </View>
  );
};

export default CreateRoutine;
