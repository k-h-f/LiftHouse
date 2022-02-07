import React from 'react';
import { Text, View } from 'react-native';
import styles from './ExerciseCard.style';

interface ExerciseCardProps {
  exerciseName: string;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exerciseName }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.exercise_text}>{exerciseName}</Text>
    </View>
  );
};

export default ExerciseCard;
