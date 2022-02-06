import React from 'react';
import { View } from 'react-native';

interface ExerciseCardProps {
  exerciseName: string;
  Icon: any;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ Icon }) => {
  return <Icon />;
};

export default ExerciseCard;
