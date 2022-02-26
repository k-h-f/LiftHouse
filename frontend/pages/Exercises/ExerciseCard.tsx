import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Exercise } from '../../../backend/dtos/Exercise';
import styles from './ExerciseCard.style';
import useSelectedExercises from './hooks/useSelectedExercises';

interface ExerciseCardProps {
  exercise: Exercise;
  save: boolean;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, save }) => {
  const navigation = useNavigation();
  const [selected, onSelected] = useState<boolean>(false);
  const { selectedExercises, onSelectExercise } = useSelectedExercises();

  useEffect(() => {
    if (save && selected) {
      navigation.navigate('SelectExercises');
      onSelectExercise(exercise);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [save]);

  const isAlreadySelected = selectedExercises.some(
    (selectedExercise: Exercise) => selectedExercise.id === exercise.id,
  );

  return !isAlreadySelected ? (
    <View
      style={styles.wrapper}
      onTouchEnd={() => {
        onSelected(!selected);
      }}
    >
      <Text
        style={
          selected ? styles.exercise_text_highlighted : styles.exercise_text
        }
      >
        {exercise.exerciseName}
      </Text>
    </View>
  ) : null;
};

export default ExerciseCard;
