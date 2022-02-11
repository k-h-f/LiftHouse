import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Exercise } from '../../../../backend/responseTypes.ts/getExercises';
import GlobalText from '../../../shared/components/GlobalText';
import PageStyle from '../../../shared/stylesheets/pages.style';
import { colors, sizes } from '../../../themeConfig';
import useSelectedExercises from '../../Exercises/hooks/useSelectedExercises';
import styles from './SelecExercises.style';

const SelectExercises: React.FC = () => {
  const navigation = useNavigation();
  const { selectedExercises } = useSelectedExercises();
  const { params } = useRoute();

  navigation.setOptions({ title: params?.routineName });

  const switchToExercises = () => {
    navigation.navigate('Exercises');
  };

  console.log(selectedExercises);

  return (
    <View style={PageStyle.wrapper}>
      <View style={styles.header}>
        <GlobalText style={styles.exercise_header} isCaption>
          EXERCISES
        </GlobalText>
        <IconButton
          onPress={() => switchToExercises()}
          icon="plus"
          size={sizes.iconSize}
          color={colors.highlight}
        />
      </View>
      {selectedExercises.map((exercise: Exercise) => (
        <Text>{exercise.exerciseName}</Text>
      ))}
    </View>
  );
};

export default SelectExercises;
