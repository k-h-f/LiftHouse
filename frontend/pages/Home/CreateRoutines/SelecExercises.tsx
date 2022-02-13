import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import { Exercise } from '../../../../backend/responseTypes.ts/getExercises';
import GlobalText from '../../../shared/components/GlobalText';
import PageStyle from '../../../shared/stylesheets/pages.style';
import { colors, sizes } from '../../../themeConfig';
import useSelectedExercises from '../../Exercises/hooks/useSelectedExercises';
import styles from './SelecExercises.style';
import SelectedExerciseCard from './SelectedExerciseCard';

const SelectExercises: React.FC = () => {
  const navigation = useNavigation();
  const { selectedExercises, onRemoveExercise } = useSelectedExercises();
  const { params } = useRoute();

  navigation.setOptions({ title: params?.routineName });

  const switchToExercises = () => {
    navigation.navigate('Exercises');
  };

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
      <ScrollView>
        {selectedExercises.map((exercise: Exercise) => (
          <SelectedExerciseCard
            key={exercise.exerciseName}
            exercise={exercise}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SelectExercises;
