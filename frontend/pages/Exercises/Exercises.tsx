import React from 'react';
import { View, ScrollView } from 'react-native';
import { ActivityIndicator, TextInput } from 'react-native-paper';
import QueryAlias from '../../../backend/queryAlias';
import GlobalText from '../../shared/components/GlobalText';
import PageStyle from '../../shared/stylesheets/pages.style';
import { colors } from '../../themeConfig';
import useDatabase from '../../utils/hooks/useDatabase';
import styles from '../components/EmptyRoutine.style';
import ExerciseCard from './ExerciseCard';
import searchBarTheme from './Exercises.style';
import { Exercise } from '../../../backend/dtos/Exercise';
import ExerciseType from '../../../backend/types';
import useSelectedExercises from './hooks/useSelectedExercises';

interface ExecisesProps {
  exerciseToFilter: Exercise[];
}

const Execises: React.FC<ExecisesProps> = ({ exerciseToFilter }) => {
  const { data, isCompleted } = useDatabase(QueryAlias.GET_EXERCISES);
  const { onSelectExercise } = useSelectedExercises();

  const onClick = (exercise: Exercise) => {
    onSelectExercise(exercise);
  };

  const getExercises = (values: Exercise[], exerciseType: ExerciseType) => {
    const filteredExercises = values.filter(
      exercise =>
        !exerciseToFilter.some(
          targetExercise => exercise.id === targetExercise.id,
        ),
    );

    console.log(filteredExercises);

    return filteredExercises
      .filter((exercise: Exercise) => exercise.type === exerciseType)
      .map((exercise: Exercise) => (
        <ExerciseCard
          key={exercise.exerciseName}
          exercise={exercise}
          onClick={onClick}
        />
      ));
  };

  return (
    <ScrollView>
      <View style={PageStyle.wrapper}>
        <TextInput
          theme={searchBarTheme}
          right={<TextInput.Icon name={'magnify'} color={colors.white} />}
          mode={'outlined'}
          selectionColor={colors.highlight}
          outlineColor={colors.highlight}
          // onChangeText={text => onChange && onChange(text)} //Since function is possibly undefined, check if it exists
        />
        <View>
          {!isCompleted ? (
            <ActivityIndicator />
          ) : (
            <>
              <GlobalText style={styles.exercise_header} isCaption>
                PUSH
              </GlobalText>
              {getExercises(data, ExerciseType.PUSH)}
              <GlobalText style={styles.exercise_header} isCaption>
                PULL
              </GlobalText>
              {getExercises(data, ExerciseType.PULL)}
              <GlobalText style={styles.exercise_header} isCaption>
                LEGS
              </GlobalText>
              {getExercises(data, ExerciseType.LEGS)}
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Execises;
