import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { Exercise } from '../../../backend/dtos/Exercise';
import styles from './ExerciseCard.style';

interface ExerciseCardProps {
  exercise: Exercise;
  onClick: (exercise: Exercise) => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onClick }) => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.wrapper}
      onTouchEnd={() => {
        onClick(exercise);
        navigation.goBack();
      }}
    >
      <Text style={styles.exercise_text}>{exercise.exerciseName}</Text>
    </View>
  );
};

export default ExerciseCard;
