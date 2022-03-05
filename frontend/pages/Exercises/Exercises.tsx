import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { ActivityIndicator, TextInput, FAB } from 'react-native-paper';
import QueryAlias from '../../../backend/queryAlias';
import GlobalText from '../../shared/components/GlobalText';
import PageStyle from '../../shared/stylesheets/pages.style';
import { colors } from '../../themeConfig';
import useDatabase from '../../utils/hooks/useDatabase';
import ExerciseCard from './ExerciseCard';
import { Exercise } from '../../../backend/dtos/Exercise';
import ExerciseType from '../../../backend/types';
import styles, { searchBarTheme } from './Exercises.style';

const Execises: React.FC = () => {
  const { data, isCompleted, executeQuery } = useDatabase();
  const [save, setIsSaved] = useState(false);

  useEffect(() => {
    executeQuery(QueryAlias.GET_EXERCISES);
  }, []);

  const getExercises = (values: Exercise[], exerciseType: ExerciseType) =>
    values
      .filter((exercise: Exercise) => exercise.type === exerciseType)
      .map((exercise: Exercise) => (
        <ExerciseCard
          key={exercise.exerciseName}
          exercise={exercise}
          save={save}
        />
      ));

  return (
    <View>
      <ScrollView>
        <View style={PageStyle.wrapper}>
          <TextInput
            theme={searchBarTheme}
            right={<TextInput.Icon name={'magnify'} color={colors.white} />}
            mode={'outlined'}
            selectionColor={colors.highlight}
            outlineColor={colors.highlight}
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
      {isCompleted && (
        <FAB icon="plus" style={styles.fab} onPress={() => setIsSaved(!save)} />
      )}
    </View>
  );
};

export default Execises;
