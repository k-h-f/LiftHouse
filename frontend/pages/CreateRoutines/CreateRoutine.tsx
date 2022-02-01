import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GlobalText from '../../shared/components/GlobalText';
import styles from './CreateRoutine.style';
import { IconButton } from 'react-native-paper';
import { colors, sizes } from '../../themeConfig';
import Input, { HelperType } from '../../shared/components/Input';

const CreateRoutine: React.FC = () => {
  const navigation = useNavigation();
  const [routineName, setRoutineName] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    routineName.length > 25 ? setError(true) : setError(false);
  }, [routineName]);

  const switchToSelectExercisesPage = () => {
    if (!routineName) {
      setError(true);
      return;
    }

    if (!error) {
      navigation.navigate('SelectExercises', { routineName });
    }
  };

  return (
    <View style={styles.wrapper}>
      <GlobalText style={styles.header}>Routine Name</GlobalText>
      <View style={styles.input_wrapper}>
        <Input
          style={styles.text_input}
          height={50}
          onChange={text => setRoutineName(text)}
          helperMessage={
            error
              ? {
                  type: HelperType.error,
                  message: 'Rountine names can only be a length of 25',
                }
              : undefined
          }
        />
        <IconButton
          onPress={() => switchToSelectExercisesPage()}
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
