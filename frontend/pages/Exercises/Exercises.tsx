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
import styles, { searchBarTheme } from './Exercises.style';
import { ExerciseType, QueryArgs } from '../../../backend/types';

const Execises: React.FC = () => {
  const {
    data,
    isCompleted,
    executeQuery,
  }: {
    data: Exercise[];
    isCompleted: boolean;
    executeQuery: (
      requestedQuery: QueryAlias,
      args?: QueryArgs | undefined,
    ) => void;
  } = useDatabase();
  const [save, setIsSaved] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExercises =
    data &&
    data.filter(exercise =>
      exercise.exerciseName.toLowerCase().match(searchQuery.toLowerCase()),
    );

  useEffect(() => {
    executeQuery(QueryAlias.GET_EXERCISES);

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            onChangeText={text => setSearchQuery(text)}
          />
          <View>
            {!isCompleted ? (
              <ActivityIndicator />
            ) : (
              <>
                <GlobalText style={styles.exercise_header} isCaption>
                  PUSH
                </GlobalText>
                {getExercises(filteredExercises, ExerciseType.PUSH)}
                <GlobalText style={styles.exercise_header} isCaption>
                  PULL
                </GlobalText>
                {getExercises(filteredExercises, ExerciseType.PULL)}
                <GlobalText style={styles.exercise_header} isCaption>
                  LEGS
                </GlobalText>
                {getExercises(filteredExercises, ExerciseType.LEGS)}
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
