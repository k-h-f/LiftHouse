import React from 'react';
import { View } from 'react-native';
import GlobalText from '../../shared/components/GlobalText';
import styles, { textInputTheme } from './CreateRoutine.style';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { colors, sizes } from '../../themeConfig';
import Input from '../../shared/components/Input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CreateRoutine: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <GlobalText style={styles.header}>Routine Name</GlobalText>
      <View style={styles.input_wrapper}>
        <Input style={styles.text_input} />
        <Button style={styles.icon} color={colors.highlight}>
          CONTINUE
        </Button>
      </View>
    </View>
  );
};

export default CreateRoutine;
